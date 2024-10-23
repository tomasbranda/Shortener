import PropTypes from "prop-types";
import { useState } from "react";

function UrlItem({ url, onDelete }) {
  const [isTruncated, setIsTruncated] = useState(true);
  const maxLength = 24;

  const toggleTruncation = () => {
    setIsTruncated(!isTruncated);
  };

  const displayText =
    isTruncated && url.original.length > maxLength
      ? url.original.slice(0, maxLength) + "..."
      : url.original;

  const handleCopy = (e) => {
    try {
      navigator.clipboard.writeText(url.short);
      e.target.innerText = "Copied!";
      setTimeout(() => {
        e.target.innerText = "Copy";
      }, 2000);
    } catch {
      alert("Could not copy text!");
    }
  };

  return (
    <div className="flex animate-show flex-col justify-between gap-4 rounded-lg bg-white p-4 opacity-0 md:flex-row md:items-center">
      <a
        href=""
        className="cursor-pointer break-all border-b-2 pb-2 text-slate-700 md:border-0 md:pb-0"
        onClick={(e) => {
          toggleTruncation();
          e.preventDefault();
        }}
      >
        {displayText}
      </a>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <a
          href={url.short}
          className="font-bold text-custom-cyan-500"
          target="_blank"
        >
          {url.short}
        </a>
        <button
          className="rounded-lg bg-custom-cyan-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-custom-cyan-300"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          className="rounded-lg bg-custom-red px-4 py-2 font-medium text-white transition-colors hover:bg-red-300"
          onClick={onDelete}
        >
          <svg
            className="mx-auto h-6 w-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default UrlItem;

UrlItem.propTypes = {
  url: PropTypes.shape({
    id: PropTypes.string.isRequired,
    original: PropTypes.string.isRequired,
    short: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
