import PropTypes from "prop-types";
import UrlItem from "./UrlItem";

function UrlList({ urlList, onDeleteUrl }) {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-4">
      {urlList.length > 0 &&
        urlList.map((url) => (
          <UrlItem
            key={url.id}
            url={url}
            onDelete={() => onDeleteUrl(url.id)}
          />
        ))}
    </div>
  );
}

export default UrlList;

UrlList.propTypes = {
  urlList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      original: PropTypes.string.isRequired,
      short: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteUrl: PropTypes.func.isRequired,
};
