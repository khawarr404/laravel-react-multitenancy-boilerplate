import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { MoreHorizontal, Search, Trash2, Edit } from "lucide-react";
import { router } from '@inertiajs/react';
import { useState } from 'react';
import { debounce } from 'lodash';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

interface User {
    id: number;
    name: string;
    email: string;
    created_at: string;
    email_verified_at: string | null;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props extends PageProps {
    users: {
        data: User[];
        links: PaginationLink[];
        current_page: number;
        last_page: number;
    };
    filters: {
        search: string;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
];

export default function Index({ users, filters }: Props) {
    const [search, setSearch] = useState(filters.search || '');

    const handleSearch = debounce((value: string) => {
        router.get(
            route('users.index'),
            { search: value },
            { preserveState: true, preserveScroll: true }
        );
    }, 300);

    const handleDelete = (userId: number) => {
        router.delete(route('users.destroy', userId), {
            preserveScroll: true,
            preserveState: true
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users Management" />

            <div className="py-12">
                <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    {/* Header Section */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight">Users</h1>
                                <p className="text-muted-foreground mt-1">
                                    Manage and view all users in your system
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search users..."
                                        value={search}
                                        onChange={(e) => {
                                            setSearch(e.target.value);
                                            handleSearch(e.target.value);
                                        }}
                                        className="pl-8 w-[300px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table Container */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="p-6">
                            <div className="rounded-md">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Email</TableHead>
                                            <TableHead>Verified</TableHead>
                                            <TableHead>Created At</TableHead>
                                            <TableHead className="w-[70px]"></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {users.data.map((user) => (
                                            <TableRow key={user.id}>
                                                <TableCell>{user.name}</TableCell>
                                                <TableCell>{user.email}</TableCell>
                                                <TableCell>
                                                    {user.email_verified_at ? (
                                                        <Badge className="bg-green-500 text-white">
                                                            Verified
                                                        </Badge>
                                                    ) : (
                                                        <Badge className="bg-red-500 text-white">
                                                            Unverified
                                                        </Badge>
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    {new Date(user.created_at).toLocaleDateString()}
                                                </TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button
                                                                variant="ghost"
                                                                className="h-8 w-8 p-0"
                                                            >
                                                                <MoreHorizontal className="h-4 w-4" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem>
                                                                <Edit className="mr-2 h-4 w-4" />
                                                                Edit
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem 
                                                                className="text-red-600 cursor-pointer"
                                                                onClick={() => handleDelete(user.id)}
                                                            >
                                                                <Trash2 className="mr-2 h-4 w-4" />
                                                                Delete
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>

                            {/* Pagination */}
                            <div className="mt-6 flex items-center justify-between">
                                <div className="text-sm text-muted-foreground">
                                    Showing {users.data.length} of {users.last_page} pages
                                </div>
                                <div className="flex gap-2">
                                    {users.links.map((link, i) => (
                                        <Button
                                            key={i}
                                            variant={link.active ? "default" : "outline"}
                                            size="sm"
                                            disabled={!link.url}
                                            onClick={() => {
                                                if (link.url) {
                                                    router.visit(link.url);
                                                }
                                            }}
                                        >
                                            {link.label === '&laquo; Previous' ? 'Previous' : 
                                             link.label === 'Next &raquo;' ? 'Next' : 
                                             link.label}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
} 