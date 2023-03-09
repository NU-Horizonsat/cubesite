import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
// @ts-ignore
import AcronymExpander from "@/pages/parts/AcronymExpander";

export default function Home() {
  const acronym_letters = ["T", "H", "I", "S", "SAT"];
  const rest_word = ["era", "ertz", "nterlink", "pace", "ATellite"];
  return (
      <Layout>
        <motion.div
            className="max-w-xl px-5 xl:px-0"
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
              className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <AcronymExpander/>
          </motion.h1>
          <motion.p
              className="mt-6 text-center text-gray-500 md:text-xl"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>
              <b>T</b>era<b>H</b>ertz Band <b>I</b>nterlink in <b>S</b>pace <b>SAT</b>ellite
            </Balancer>
          </motion.p>
          <motion.p className="">
            <Balancer>
              Project Horizon's TeraHertz Band Interlink in Space SATellite (THIS-SAT) is a student led project that seeks to demonstrate the efficacy of TeraHertz band links as an alternative to the existing Optical Inter-Satellite Links (OISLs) that are predominant in the industry.
              This will pave the way for new, ultra-low cost satellite systems that expand reliable network connectivity into remote regions.
            </Balancer>
          </motion.p>
        </motion.div>
        {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      </Layout>
  );
}