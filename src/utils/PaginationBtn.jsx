/* eslint-disable react/prop-types */
const PaginationBtn = ({ itemsLength, page, setPage }) => {
  let N = Math.ceil(itemsLength / 15);
  const arr = Array.from({ length: N }, (_, index) => index + 1);

  return (
    <div className="pagination-container">
      <div className="pagination">
        {arr.map((i) => {
          return (
            <div key={i} className="pagination-btns">
              <button
                className={page == i ? "active" : "not-active"}
                onClick={() => setPage(i)}
              >
                {i}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaginationBtn;
