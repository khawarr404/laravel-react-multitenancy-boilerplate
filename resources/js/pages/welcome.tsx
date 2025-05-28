import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Laravel React Multitenancy Boilerplate">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                {/* Decorative background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-200 opacity-20 blur-3xl dark:bg-purple-900" />
                    <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-200 opacity-20 blur-3xl dark:bg-indigo-900" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <header className="flex items-center justify-between py-8">
                        <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600" />
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                Laravel React Multitenancy
                            </div>
                        </div>
                        <nav>
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-indigo-600 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <Link
                                    href={route('login')}
                                    className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-indigo-600 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
                                >
                                    Login
                                </Link>
                            )}
                        </nav>
                    </header>

                    {/* Hero Section */}
                    <div className="py-24 text-center">
                        <div className="mx-auto max-w-3xl">
                            <h1 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
                                Modern Multitenancy Boilerplate
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                                A powerful starter kit for building scalable multi-tenant applications with Laravel 12, React 19, and TenancyForLaravel
                            </p>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="py-20">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Feature 1 */}
                            <div className="group relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
                                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 blur transition duration-300 group-hover:opacity-20" />
                                <div className="relative">
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">TenancyForLaravel Integration</h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                                        Seamless integration with TenancyForLaravel package for robust multi-tenant database management
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="group relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
                                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 blur transition duration-300 group-hover:opacity-20" />
                                <div className="relative">
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Latest Stack</h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                                        Built with Laravel 12, React 19, and Inertia.js for cutting-edge full-stack development
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="group relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
                                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 blur transition duration-300 group-hover:opacity-20" />
                                <div className="relative">
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Authentication Ready</h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                                        Pre-configured authentication system with multi-tenant support and role-based access control
                                    </p>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="group relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
                                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 blur transition duration-300 group-hover:opacity-20" />
                                <div className="relative">
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">TypeScript Support</h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                                        Full TypeScript integration for better development experience and type safety
                                    </p>
                                </div>
                            </div>

                            {/* Feature 5 */}
                            <div className="group relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
                                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 blur transition duration-300 group-hover:opacity-20" />
                                <div className="relative">
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tailwind CSS</h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                                        Modern utility-first CSS framework for rapid UI development
                                    </p>
                                </div>
                            </div>

                            {/* Feature 6 */}
                            <div className="group relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
                                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 blur transition duration-300 group-hover:opacity-20" />
                                <div className="relative">
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Dark Mode</h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                                        Built-in dark mode support with automatic system preference detection
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="py-20 text-center">
                        <div className="mx-auto max-w-3xl">
                            <h2 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                                Ready to Get Started?
                            </h2>
                            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                                Start building your multi-tenant application today
                            </p>
                            <div className="mt-8">
                                <Link
                                    href={route('register')}
                                    className="inline-flex items-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:from-indigo-600 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
                                >
                                    Get Started
                                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
