import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Populers from "./components/Populers";
import PaginationBtn from "./utils/PaginationBtn";
import { showAll } from "./redux/apiCalls";
import FindAnime from "./components/FindAnime";

function App() {
  const [page, setPage] = useState(1);
  //Redux
  const dipatch = useDispatch();
  const items = useSelector((state) => state.animes.currentAnimes);
  useEffect(() => {
    showAll(dipatch);

    //showSearch("demon slayer", dipatch);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      {items ? (
        <>
          <FindAnime resetPage={setPage} />
          <Populers items={items.data} page={page} />
          <PaginationBtn
            itemsLength={items.data.length}
            page={page}
            setPage={setPage}
          />
        </>
      ) : (
        <h1>LOADING...</h1>
      )}
    </>
  );
}

export default App;
