import '@/styles/global.css';
import React from "react";
import { Metadata, Viewport } from "next";
import { maple } from "@/lib/font";
import { ThemeProvider } from "next-themes";
import { clsx } from "clsx";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import SplashScreen from "@/components/ui/splash-screen";

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#09090b' },
    ],
    width: 'device-width',
    initialScale: 1
}

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://csh0101.cc'),
    title: {
        default: 'csh0101 - AI Infra & 云原生专家',
        template: '%s | csh0101'
    },
    description: "恭华早修居余位 楼台晚证失道果",
    keywords: [
        'csh0101', 'Amos', 'AI Infra', '云原生', 'BigData',
        'Program Language', 'Cloud Native', 'Kubernetes', 'Infrastructure'
    ],
    authors: [{ name: 'Amos', url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://csh0101.cc' }],
    creator: 'csh0101',
    publisher: 'csh0101',

    alternates: {
        canonical: '/',
    },

    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="zh-CN" className='no-scrollbar' suppressHydrationWarning>
        <body className={ clsx(
            "bg-theme-light dark:bg-theme-dark transition-colors duration-300", maple.className
        ) }>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="flex flex-col min-h-svh">
                <SplashScreen/>
                <Header/>
                <main className="flex flex-col grow">
                    { children }
                </main>
                <Footer/>
            </div>
        </ThemeProvider>
        </body>
        </html>
    )
}
