import Layout from "@/components/layout";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { title } from "process";
import React, { useEffect, useState } from "react";
import JSXStyle from "styled-jsx/style";
export default function Home() {
  const [modelViewerLoaded, setModelViewerLoaded] = useState(false);
  useEffect(() => {
    const onInteraction = () => {
      if (modelViewerLoaded) {
        return;
      }
      setModelViewerLoaded(true);

      const modelViewer = document.createElement('script'); 
      modelViewer.type = 'module';
      modelViewer.src = './model-viewer.min.js'; 
      document.body.appendChild(modelViewer);
      const onProgress = (event) => {
        if (event.loaded === event.total) {
          document.body.removeEventListener('model-viewer-progress', onProgress);
          document.body.removeEventListener('model-viewer-load', onLoad);
        }
      }
      const onLoad = () => {
        document.body.removeEventListener('model-viewer-progress', onProgress);
        document.body.removeEventListener('model-viewer-load', onLoad);
      }
    };
    document.body.addEventListener('mouseover', onInteraction, {once:true});
    document.body.addEventListener('touchmove', onInteraction, {once:true});
    document.body.addEventListener('scroll', onInteraction, {once:true});
    document.body.addEventListener('keydown', onInteraction, {once:true});
    // load model-viewer after 2 seconds
    setTimeout(onInteraction, 500);
  }, [modelViewerLoaded]);

 

  
  return (
    <Layout meta={{ title: "Project Horizon", description: "Northeastern's first in-house developed satellite. The first of its kind.", image: "/banner.png" }}>
      <div className="flex flex-col items-center justify-center">
        <motion.h1
          className="sticky bg-slate-500 bg-clip-text text-center font-display text-4xl font-bold text-transparent drop-shadow-sm md:text-7xl"
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
                ertz{" "}
              </div>
              <b>I</b>
              <div className="inline text-[0px] transition-all duration-500 lg:group-hover:text-7xl">
                n{" "}
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
        <motion.h3 className='sticky bg-slate-400 bg-clip-text text-center font-display text-lg font-bold text-transparent drop-shadow-sm'>Northeastern's first in-house developed satellite. The world's first terahertz band link in space</motion.h3>
        <div className="top-10 w-auto items-center justify-center">
            <model-viewer
            id="model-viewer"
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
            >
            </model-viewer>
          

        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            className="m-10 md:w-1/2 bg-white bg-clip-text text-left text-2xl tracking-[-0.02em] text-transparent drop-shadow-sm"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <p>
              THIS-SAT is an innovative, student-led project that aims to
              showcase the effectiveness of Terahertz band inter-satellite
              communication links as an alternative to the currently dominant
              Optical Inter-Satellite Links (OISLs) in the industry. Our goal is
              to create new, ultra-low-cost satellite systems that will enhance
              network connectivity in remote regions, enabling people to stay
              connected and access bandwidth demanding services.
            </p>
            <br></br>
            <p>
              Join us in our mission to revolutionize satellite communication
              technology and expand connectivity to the all regions of the
              world. Explore our website to learn more about our team, our
              project, and how you can get involved!
            </p>
          </motion.div>


          <JSXStyle>
            {`
              model-viewer {
                width: 600px;
                height: 450px;
                top: 10px;
              }

              @media (max-width: 768px) {
                model-viewer {
                  width: 250px;
                  height: 350px;
                  top: 0;
                }
              }

              posterbg {
                background-image: url(./poster.png);
              }
            `}
          </JSXStyle>
        </div>
      </div>
    </Layout>
  );
}
