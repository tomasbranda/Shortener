import Logo from "./assets/logo-black.svg";

function Navbar() {
  function toggleMenu() {
    document.querySelector("#navbar-default").classList.toggle("hidden");
  }

  return (
    <>
      <nav className="bg-white">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-x-8 p-6">
          <a href="#" className="flex items-center space-x-3">
            <img src={Logo} className="h-8" alt="Shortly Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto md:grow"
            id="navbar-default"
          >
            <div className="mt-4 flex animate-show flex-col gap-y-4 rounded-lg border bg-custom-dark-violet-500 p-4 text-center font-medium text-white opacity-0 md:mt-0 md:animate-none md:flex-row md:items-center md:justify-between md:border-0 md:bg-white md:p-0 md:text-gray-600 md:opacity-100">
              <div className="gap-4 space-y-2 border-b border-custom-dark-violet-300 pb-4 md:flex md:space-y-0 md:border-0 md:pb-0">
                <a
                  href="#"
                  className="block rounded px-3 py-2 transition-colors hover:bg-custom-dark-violet-300 md:p-0 md:hover:bg-transparent md:hover:text-custom-cyan-300"
                  aria-current="page"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block rounded px-3 py-2 transition-colors hover:bg-custom-dark-violet-300 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-custom-cyan-300"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="block rounded px-3 py-2 transition-colors hover:bg-custom-dark-violet-300 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-custom-cyan-300"
                >
                  Resources
                </a>
              </div>
              <div className="gap-4 space-y-2 md:flex md:items-center md:space-y-0">
                <a
                  href="#"
                  className="block rounded px-3 py-2 transition-colors hover:bg-custom-dark-violet-300 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-custom-cyan-300"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="block rounded-full bg-custom-cyan-500 px-6 py-2 font-bold text-white transition-colors hover:bg-custom-cyan-300"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
