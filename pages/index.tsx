import Layout from "@/components/layout";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
// @ts-ignore

export default function Home() {
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
          <div className="group inline "><b>T</b><div className="transition-all duration-500 inline text-[0px] group-hover:text-7xl">era</div><b>H</b><div className="transition-all duration-500 inline text-[0px] group-hover:text-7xl">ertz Band </div><b>I</b><div className="transition-all duration-500 inline text-[0px] group-hover:text-7xl">nterlink in </div><b>S</b><div className="transition-all duration-500 inline text-[0px] group-hover:text-7xl">pace </div><b>SAT</b><div className="transition-all duration-500 inline text-[0px] group-hover:text-7xl">ellite</div></div>
        </motion.h1>
        <motion.p
          className="m-10 bg-slate-500 bg-clip-text text-center tracking-[-0.02em] text-transparent drop-shadow-sm text-2xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}>
          Project Horizon&apos;s TeraHertz Band Interlink in Space SATellite (THIS-SAT) is a student led project that seeks to demonstrate the efficacy of TeraHertz band links as an alternative to the existing Optical Inter-Satellite Links (OISLs) that are predominant in the industry.
          This will pave the way for new, ultra-low cost satellite systems that expand reliable network connectivity into remote regions.
        </motion.p>
      </motion.div>

    </Layout>
  );
}