import { motion } from "framer-motion";
import HeroImage from "./assets/illustration-working.svg";

function Hero() {
  return (
    <>
      <section className="overflow-x-hidden bg-white">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-center gap-8 p-6 pb-24 text-center md:flex-row md:text-left">
          <motion.div
            className="md:order-2"
            initial={{ opacity: 0, translateX: "128px" }}
            whileInView={{ opacity: 1, translateX: "0px" }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <img
              src={HeroImage}
              alt="Hero Image"
              className="relative mx-auto max-w-md md:left-12 md:max-w-full"
            />
          </motion.div>

          <motion.div
            className="mx-auto flex max-w-sm flex-col items-center justify-center md:items-start"
            initial={{ opacity: 0, translateX: "-128px" }}
            whileInView={{ opacity: 1, translateX: "0px" }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl font-bold leading-tight text-black">
              More than just shorter links
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Build your brand&apos;s recognition and get detailed insights on
              how your links are performing.
            </p>

            <button className="mt-8 rounded-full bg-custom-cyan-500 px-6 py-3 font-bold text-white transition-colors hover:bg-custom-cyan-300">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
