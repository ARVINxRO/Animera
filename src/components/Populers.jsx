/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { pagination } from "../utils/pagination";
import { useState } from "react";

const Populers = ({ items, page }) => {
  const [currentItems, setCurrentItems] = useState();
  useEffect(() => {
    items && pagination(items, page, setCurrentItems, items.length);
  }, [page, items]);
  return (
    <div className="animes-container">
      {currentItems && currentItems.length !== 0 ? (
        currentItems.map((i) => {
          return (
            <div className={"anime-item"} key={i.mal_id}>
              <img src={i.images.jpg.image_url} />
              <p className="centered">{i.title}</p>
            </div>
          );
        })
      ) : (
        <h1>ANIME NOT FOUND</h1>
      )}
    </div>
  );
};

export default Populers;
