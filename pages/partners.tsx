import Layout from "@/components/layout";
import {motion} from "framer-motion";
import {FADE_DOWN_ANIMATION_VARIANTS} from "@/lib/constants";
import PartnerList from "@/pages/parts/partnercard";

export default function Partners() {
    const partner = [{
        name: "Partner 1",
        logo: "/logo.png",
        description: "Partner 1 description",
        link: "https://www.google.com"
    },
        {
            name: "Partner 2",
            logo: "/logo.png",
            description: "Partner 2 description",
            link: "https://www.google.com"
        }]
    return (
        <Layout>
            <motion.div
                className="px-5 py-10 mx-auto max-w-7xl"
                initial="hidden"
                whileInView="show"
                animate="show"
                viewport={{once: true}}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >

                <motion.h1
                    className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}>
                    Partners
                </motion.h1>
                <motion.div>
                    <PartnerList partners={partner}/>
                </motion.div>
            </motion.div>
        </Layout>
    );
}