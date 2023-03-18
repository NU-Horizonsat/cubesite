import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import PartnerList from "@/pages/parts/partnercard";

export default function Partners() {
    const partner = [{
        description: " is the parent club for project horizon. AeroNU provides extended administrative capacity to project horizon, and integrates the project into the university club system. Aero NU also provides all day-to-day operational funding for project horizon.",
        image: '/partners/aeronu.png',
        link: "https://google.com",
        linkName: "AerospaceNU",
    },
    {
        title: "Partner 2",
        description: " is a graduate research lab on Northeastern’s campus. They conduct research into advanced communications technology and are building the payload (a Terahertz band transmitter and receiver) that will ultimately fly on THIS-SAT.",
        image: '/partners/unlab.png',
        link: "https://google.com",
        linkName: "The Ultrabroadband Nano-networking Laboratory",
    },
    {
        title: "Partner 3",
        description: " has graciously provided Project Horizon with its Satellite ToolKit (STK) software which we use for orbital modeling, and determining communication times between our satellites and our ground station. To learn more about STK visit the ANSYS website.",
        image: '/partners/ansys.png',
        link: "https://google.com",
        linkName: "ANSYS",
    },
    ]
    return (
        <Layout>
            <motion.div
                className="items-center justify-center"
                initial="hidden"
                whileInView="show"
                animate="show"
                viewport={{ once: true }}
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
                    className="m-10 bg-slate-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}>
                    Partners
                </motion.h1>
                <motion.div>
                    <PartnerList partners={partner} />
                </motion.div>
            </motion.div>
        </Layout>
    );
}