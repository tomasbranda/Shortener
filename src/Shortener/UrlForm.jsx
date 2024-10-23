import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import icon_link from "../assets/link.svg";

function UrlForm({ onAddUrl }) {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef(null);
  const errorRef = useRef(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    function isValidUrl(string) {
      try {
        new URL(string);
        return true;
      } catch {
        return false;
      }
    }

    if (!isValidUrl(inputValue)) {
      setErrorMessage("Please enter a valid URL.");
      return;
    } else {
      setErrorMessage("");
      setInputValue("");
    }

    fetch("https://spoo.me/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: new URLSearchParams({
        url: inputValue,
      }),
    })
      .then((res) => {
        if (res.status === 429) {
          setErrorMessage(
            "You've sent too many requests. Please try again later.",
          );
          throw new Error(`${res.status}: Too many requests`);
        } else if (res.status !== 200) {
          setErrorMessage("Something went wrong! Please try again later.");
          throw new Error(`Error: ${res.status}`);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        onAddUrl(inputValue, data.short_url);
        setInputValue("");
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const styles = ["outline", "outline-2", "outline-red-500", "bg-red-100"];

    if (errorMessage) {
      inputRef.current.classList.add(...styles);
      errorRef.current.classList.add("animate-shake");
    } else {
      inputRef.current.classList.remove(...styles);
    }
  }, [errorMessage]);

  return (
    <form
      className="relative mb-4 flex flex-col gap-4 rounded-lg bg-custom-dark-violet-500 px-6 py-8 before:absolute before:left-0 before:top-0 before:z-0 before:h-full before:w-full before:rounded-lg before:bg-[url('./assets/bg-shorten-mobile.svg')] before:bg-right-top before:bg-no-repeat before:content-[''] after:absolute after:-top-1/2 after:left-1/2 after:-z-10 after:h-full after:w-screen after:-translate-x-1/2 after:bg-white after:content-[''] md:flex-row md:py-6 md:before:bg-[url('./assets/bg-shorten-desktop.svg')] md:before:bg-cover md:before:bg-center"
      onSubmit={handleSubmit}
    >
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center pl-3">
          <img src={icon_link} alt="link icon" />
        </div>
        <input
          type="text"
          id="shortener"
          className="block h-full w-full rounded-lg bg-gray-50 py-2 pl-10 text-sm text-gray-900"
          placeholder="Paste your URL…"
          value={inputValue}
          onChange={handleChange}
          ref={inputRef}
        />
        <p
          ref={errorRef}
          className="absolute bottom-full text-sm font-bold text-custom-red"
        >
          {errorMessage}
        </p>
      </div>
      <button
        type="submit"
        className="z-10 rounded-lg bg-custom-cyan-500 px-4 py-2 text-lg font-bold text-white transition-colors hover:bg-custom-cyan-300"
      >
        Shorten&nbsp;it!
      </button>
    </form>
  );
}

export default UrlForm;

UrlForm.propTypes = {
  onAddUrl: PropTypes.func.isRequired,
};
