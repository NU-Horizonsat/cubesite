import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import PartnerList from "@/components/parts/partnercard";

export default function Partners() {
    const partner = [{
        title: "AeroNU",
        description: " is the parent club for Project Horizon. AeroNU provides extended administrative capacity to Project Horizon, and integrates the project into the university club system. AeroNU also provides all day-to-day operational funding for project horizon.",
        image: '/partners/aeronu.png',
        link: "https://www.aerospacenu.com/",
        linkName: "AerospaceNU",
        width: 640,
        height: 139,
    },
    {
        title: "UnLab",
        description: " is a graduate research lab on Northeastern’s campus. They conduct research into advanced communications technology and are building the payload (a Terahertz band transmitter and receiver) that will ultimately fly on THIS-SAT.",
        image: '/partners/unlab.png',
        link: "https://unlab.tech",
        linkName: "The Ultrabroadband Nano-networking Laboratory",
        width: 640,
        height: 192,
    },
    {
        title: "Ansys",
        description: " has graciously provided Project Horizon with its Satellite ToolKit (STK) software which we use for orbital modeling, and determining communication times between our satellites and our ground station.",
        image: '/partners/ansys.png',
        link: "https://google.com",
        linkName: "ANSYS",
        width: 640,
        height: 199,
    },
    {
        title: "NASA CSLI",
        description: " is a program offers an opportunity for universities, high schools, and non-profit organizations in the United States to access space. It provides us cost-effective pathway for building, testing and launching THIS-SAT.",
        image: '/partners/nasa.png',
        link: "https://nasa.gov",
        linkName: "NASA CSLI",
        width: 748,
        height: 255,
    }
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
                    className="m-10 bg-white bg-clip-text text-center font-display text-4xl font-bold tracking-[0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
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