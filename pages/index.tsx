import Layout from "@/components/layout";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import React from "react";
import JSXStyle from "styled-jsx/style";

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="m-10"
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
          className="sticky bg-slate-500 bg-clip-text font-display text-4xl font-bold text-center text-transparent drop-shadow-sm md:text-7xl sm:text-left"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <div className="group m-10 inline text-white">
            <div className="inline text-white">
              <b>T</b>
              <div className="inline text-[0px] transition-all duration-500 lg:group-hover:text-7xl">
                era
              </div>
              <b>H</b>
              <div className="inline text-[0px] transition-all duration-500 lg:group-hover:text-7xl">
                ertz Band{" "}
              </div>
              <b>I</b>
              <div className="inline text-[0px] transition-all duration-500 lg:group-hover:text-7xl">
                nterlink in{" "}
              </div>
              <b>S</b>
              <div className="inline text-[0px] transition-all duration-500 lg:group-hover:text-7xl">
                pace{" "}
              </div>
            </div>
            <div className="inline text-slate-500 transition-all lg:group-hover:text-[0px]">
              -
            </div>
            <div className="inline text-[#C80000]">
              <b>SAT</b>
              <div className="inline text-[0px] transition-all duration-500 lg:group-hover:text-7xl">
                ellite
              </div>
            </div>
          </div>
        </motion.h1>
        <motion.div
          className="m-10 w-1/2 bg-slate-500 bg-clip-text sm:text-left text-center text-2xl tracking-[-0.02em] text-transparent drop-shadow-sm "
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <p>
            Welcome to Project Horizon's <b>T</b>era<b>H</b>ertz Band <b>I</b>
            nterlink in Space Satellite (<b>THIS-SAT</b>) landing page!
          </p>
          <br />
          <p>
            THIS-SAT is an innovative student-led project that aims to showcase
            the effectiveness of TeraHertz band links as an alternative to the
            currently dominant Optical Inter-Satellite Links (OISLs) in the
            industry. Our goal is to create new and ultra-low-cost satellite
            systems that will enhance network connectivity in remote regions.{" "}
          </p>
          <br />

          <p>
            Our project is driven by the vision to expand reliable network
            connectivity to the remotest parts of the world, enabling people to
            stay connected and access important services. We are excited about
            the potential of TeraHertz band links to make this vision a reality.{" "}
          </p>
          <br />
          <p>
            Join us in our mission to revolutionize satellite communication
            technology and bring connectivity to the most remote regions of the
            world. Explore our website to learn more about our team, our
            project, and how you can get involved!
          </p>
        </motion.div>
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
        <div className="flex justify-end -mt-32">
  <model-viewer
    src="\CubeSatRender.glb"
    poster="\poster.png"
    alt="6U CubeSat"
    auto-rotate
    camera-controls
    disable-zoom
    interaction-prompt="none"
    touch-action="pan-y"
    loading="auto"
    rotation-per-second="20deg"
    orientation="0deg 30deg 20deg"
    exposure="0.5"
    scale="5 5 5"
    camera-orbit="0deg 90deg 95%"
    ios-src="\CubeSatRender.glb"
  ></model-viewer>
</div>
<JSXStyle>
  {'model-viewer {  width: 800px;  height: 600px;top:10px;}'}
</JSXStyle>


      </motion.div>
    </Layout>
  );
}
