import Layout from "@/components/layout";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <motion.h1
          className="sticky bg-white bg-clip-text text-center font-display text-4xl font-bold text-transparent drop-shadow-sm sm:text-left md:text-7xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          About THIS-SAT
        </motion.h1>

        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            className="m-10 md:w-1/2 bg-white bg-clip-text text-left text-2xl tracking-[-0.02em] text-transparent drop-shadow-sm"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <p>
              With the rise of satellite constellations, advancements in
              wireless communications-such as high-throughput space-based
              internet solutions–are becoming a reality. The promise of low
              latency, world-wide coverage is made possible by the deployment of
              such systems in Low Earth Orbits (LEO), where launch and
              maintenance costs are minimized and communication between
              satellites is unimpeded by the atmosphere. Lasers and optical
              receivers have long been proposed as a candidate solution for
              establishing Optical Inter-Satellite Links (OISLs). However, the
              operation of such links at orbital distances ({"<100km"}) is
              limited by the narrow beamwidth of laser sources, which results in
              complex and bulky payload designs for accurate pointing. A novel
              alternative technology that could lower the cost, size, and
              complexity of the payload design is the use of the Terahertz (THz)
              band (0.1-1THz).
            </p>
            <br></br>
            <p>
              Communication in the THz band has been explored for terrestrial
              communications as the preferred technology to enable multi-Gbps
              throughputs in the 6th generation of wireless communications (6G).
              Advancements in frequency multiplier technology supported by
              on-chip power combining methods have enabled output power
              milestones that can overcome the main limitation of THz
              communication: water vapor molecular absorption losses. Such
              advancements have enabled the first experimental tests of real THz
              communications. The TeraNova testbed platform at Northeastern
              University (NU) is a good example. Results obtained with TeraNova
              reveal that molecular absorption loss is a limiting factor rather
              than a barrier: drier environments show better performance and
              longer link distances due to lower water vapor concentrations.
            </p>
            <br></br>

            <p>
              In space, the absence of water vapor molecules could translate
              into long-range, high- throughput Inter-Satellite Links (ISLs).
              For this reason, the purpose of our Terahertz in Space Satellite
              (THIS-SAT) is to establish the first THz ISL, and to demonstrate
              that THz inter-satellite communication is not only possible but
              also that the required technologies can be compact as well.
              THIS-SAT will consist of a twin satellite platform that will be
              launched as a unique 6U satellite and then split into two units
              after deployment in orbit. As soon as the satellites are active,
              they will face each other and start testing the ISL as the
              satellites drift apart due to the splitting inertia. THz
              communication will be enabled by the design of a
              CubeSat-compatible integration of the TeraNova testbed through a
              collaboration with the Ultrabroadband Nanonetworking Laboratory
              (UNLab), part of the Institute for the Wireless Internet of Things
              (WIoT) at NU. Details and research publications of TeraNova can be
              found on the UNLab webpage.
            </p>
            <br></br>

            <p>
              This project will yield valuable results, including the highest
              data transmission rate achievable, longest link distance
              achievable, and the first channel measurements of the THz band in
              space. These are the primary goals, and further details of
              experiments and design are part of the team’s next phase of work
              with the UNLab.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
