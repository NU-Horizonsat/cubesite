import Layout from "@/components/layout";
import {motion} from "framer-motion";
import {FADE_DOWN_ANIMATION_VARIANTS} from "@/lib/constants";
import PartnerList from "@/pages/parts/partnercard";

export default function Partners() {
    const partner = [{
        description: "The Ultrabroadband Nano-networking Laboratory is a graduate research lab on Northeastern's campus. They conduct research into advanced communications technology and are building the payload (a Terahertz band transmitter and receiver) that will ultimately fly on THIS-SAT.",
        image: '/logo.png',
        link: "https://google.com"
    },
        {
            title: "Partner 2",
            description: "Partner 2 description",
            image: '/logo.png',
            link: "https://google.com"
        },
        ]
    return (
        <Layout>
            <motion.div
                className="items-center justify-center"
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