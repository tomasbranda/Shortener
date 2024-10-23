function Cta() {
  return (
    <>
      <section className="bg-custom-dark-violet-500">
        <div className="relative z-10 mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-6 px-6 py-16 before:absolute before:-z-10 before:h-full before:w-full before:bg-[url('./assets/bg-boost-mobile.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:content-[''] md:before:bg-[url('./assets/bg-boost-desktop.svg')] md:before:bg-left-top">
          <strong className="text-center text-3xl font-bold text-white">
            Boost your links today
          </strong>
          <a
            href="#"
            className="rounded-full bg-custom-cyan-500 px-8 py-3 font-bold text-white transition-colors hover:bg-custom-cyan-300"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  );
}

export default Cta;
