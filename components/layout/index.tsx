import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";

export default function Layout({
                                   meta,
                                   children,
                               }: {
    meta?: {
        title?: string;
        description?: string;
        image?: string;
    };
    children: ReactNode;
}) {
    const scrolled = useScroll(50);

    return <>
        <Meta {...meta} />
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <div
            className={`fixed top-0 w-full ${
                scrolled
                    ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
                    : "bg-white/0"
            } z-30 transition-all`}
        >
            <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
                <Link href="/" className="flex items-center font-display text-2xl">
                    <Image
                        src="/logo.png"
                        alt="Precedent logo"
                        width="30"
                        height="30"
                        className="mr-2 rounded-sm"
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }}></Image>
                    <p>Project Horizon</p>
                </Link>
                <div>
                    <AnimatePresence>
                        <motion.div
                            className="flex items-center space-x-4"
                            {...FADE_IN_ANIMATION_SETTINGS}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Link href="/teams">
                                <p className="text-gray-500 hover:text-gray-900 lg:text-lg xl:text-xl">Our Team</p>
                            </Link>
                            <Link href="/partners">
                                <p className="text-gray-500 hover:text-gray-900 lg:text-lg xl:text-xl">Partners</p>
                            </Link>
                            <Link href="/contact">
                                <p className="text-gray-500 hover:text-gray-900 lg:text-lg xl:text-xl">Contact</p>
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
        <main className=" w-full items-center justify-center py-32">
            {children}
        </main>
        <footer className="flex flex-col items-center justify-center w-full h-32 bg-white/50 backdrop-blur-xl border-t border-gray-200">
            <p className="text-gray-500 text-sm">
                © 2021 Project Horizon. All rights reserved.
            </p>
        </footer>
    </>;
}
