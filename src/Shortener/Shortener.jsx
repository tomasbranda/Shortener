import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import UrlForm from "./UrlForm";
import UrlList from "./UrlList";

function Shortener() {
  const [urlList, setUrlList] = useState(
    JSON.parse(localStorage.getItem("urls")) || [],
  );

  const handleAddUrl = (originalUrl, shortUrl) => {
    setUrlList((prevUrlList) => [
      { id: uuidv4(), original: originalUrl, short: shortUrl },
      ...prevUrlList,
    ]);
  };

  const handleDeleteUrl = (id) => {
    const newUrlList = urlList.filter((url) => url.id !== id);
    setUrlList(newUrlList);
  };

  useEffect(() => {
    localStorage.setItem("urls", JSON.stringify(urlList));
  }, [urlList]);

  return (
    <section className="bg-slate-100">
      <div className="relative z-0 mx-auto max-w-screen-xl p-6 pb-24">
        <UrlForm onAddUrl={handleAddUrl} />
        <UrlList urlList={urlList} onDeleteUrl={handleDeleteUrl} />
      </div>
    </section>
  );
}

export default Shortener;
