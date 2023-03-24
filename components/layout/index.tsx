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
        <div className="fixed h-screen w-full bg-bg-image" />
        <div
            className={`fixed top-0 w-full transition-backdrop-blur duration-1000  ${scrolled
                ? "backdrop-blur-xl"
                : "bg-white/0"
                } z-30 transition-all`}
        >
            <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
                <Link href="/" className="flex items-center font-display text-white">
                    <Image
                        src="/banner.png"
                        alt="Precedent logo"
                        width="250"
                        height="250"
                        className="mr-2 rounded-sm"
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }}></Image>
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
                                <p className="text-white transition-colors duration-300 hover:text-slate-500 lg:text-lg xl:text-lg">Our Team</p>
                            </Link>
                            <Link href="/partners">
                                <p className="text-white transition-colors duration-300 hover:text-slate-500 lg:text-lg xl:text-lg">Partners</p>
                            </Link>
                            <Link href="/contact">
                                <p className="text-white transition-colors duration-300 hover:text-slate-500 lg:text-lg xl:text-lg">Contact</p>
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
        <main className=" w-full items-center justify-center py-32">
            {children}
        </main>
        <footer className="fixed bottom-0 left-0 flex flex-col items-center justify-center w-full h-20 bg-transparent backdrop-blur-xl border-none">
            <p className="text-white text-sm">
                © 2023 Project Horizon. All rights reserved.
            </p>
        </footer>
    </>;
}
