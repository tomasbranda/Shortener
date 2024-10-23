import { motion } from "framer-motion";
import IconBrand from "./assets/icon-brand-recognition.svg";
import IconRecords from "./assets/icon-detailed-records.svg";
import IconCustomizable from "./assets/icon-fully-customizable.svg";

function Features() {
  const blockVariants = {
    hidden: { translateY: "128px", opacity: 0 },
    visible: { translateY: 0, opacity: 1 },
  };

  return (
    <>
      <section className="bg-slate-100">
        <div className="mx-auto max-w-screen-xl p-6 pb-32 text-center">
          <h2 className="mb-4 text-4xl font-bold text-black">
            Advanced Statistics
          </h2>
          <p className="mx-auto mb-28 max-w-md text-gray-500">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <div className="relative z-0 flex flex-col gap-24 after:absolute after:left-1/2 after:-z-10 after:h-full after:w-3 after:-translate-x-1/2 after:bg-custom-cyan-500 after:content-[''] md:flex-row md:items-start md:justify-between md:gap-8 md:text-left md:after:top-1/2 md:after:h-3 md:after:w-full">
            <motion.div
              className="relative flex flex-col items-center justify-center rounded-lg bg-white p-6 pt-20 md:items-start"
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.75 }}
              viewport={{ amount: 0.35, once: true }}
            >
              <div className="absolute -top-11 rounded-full bg-slate-700 p-6 md:left-12">
                <img src={IconBrand} alt="Brand Recognition" />
              </div>
              <h3 className="mb-6 text-2xl font-bold">Brand Recognition</h3>
              <p className="text-gray-500">
                Boost your brand recognition with each click. Generic links
                don&apos;t mean a thing. Branded links help instil confidence in
                your content.
              </p>
            </motion.div>

            <motion.div
              className="relative flex flex-col items-center justify-center rounded-lg bg-white p-6 pt-20 md:mt-8 md:items-start"
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.75 }}
              viewport={{ amount: 0.55, once: true }}
            >
              <div className="absolute -top-11 rounded-full bg-slate-700 p-6 md:left-12">
                <img src={IconRecords} alt="Detailed Records" />
              </div>
              <h3 className="mb-6 text-2xl font-bold">Detailed Records</h3>
              <p className="text-gray-500">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </motion.div>

            <motion.div
              className="relative flex flex-col items-center justify-center rounded-lg bg-white p-6 pt-20 md:mt-16 md:items-start"
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.75 }}
              viewport={{ amount: 0.75, once: true }}
            >
              <div className="absolute -top-11 rounded-full bg-slate-700 p-6 md:left-12">
                <img src={IconCustomizable} alt="Fully Customizable" />
              </div>
              <h3 className="mb-6 text-2xl font-bold">Fully Customizable</h3>
              <p className="text-gray-500">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
