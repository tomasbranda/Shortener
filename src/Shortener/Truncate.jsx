import PropTypes from "prop-types";
import { useState } from "react";

const TruncatedText = ({ text }) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const maxLength = 24;

  const toggleTruncation = () => {
    setIsTruncated(!isTruncated);
  };

  const displayText =
    isTruncated && text.length > maxLength
      ? text.slice(0, maxLength) + "..."
      : text;

  return (
    <p
      className="cursor-pointer border-b-2 pb-2 text-slate-700 md:border-0 md:pb-0"
      onClick={toggleTruncation}
    >
      {displayText}
    </p>
  );
};

export default TruncatedText;

TruncatedText.propTypes = {
  text: PropTypes.string.isRequired,
};
