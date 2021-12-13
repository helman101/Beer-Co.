import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage, nextPage, previousPage } from "../slice/beer/beerSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, fullList, beersPerPage } = useSelector(
    (state) => state.beers
  );
  const maxPages = Math.ceil(fullList.length / beersPerPage);
  let pageNumbers = [];

  if (currentPage < 3) {
    pageNumbers = [currentPage, currentPage + 1, currentPage + 2];
  } else if (currentPage === maxPages) {
    pageNumbers = [currentPage - 2, currentPage - 1, currentPage];
  } else {
    pageNumbers = [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ];
  }

  return (
    <nav className="d-flex pagination align-items-center">
      <div className="page-nums d-flex">
        {currentPage > 1 && (
          <div className="page-item" onClick={() => dispatch(previousPage())}>
            {"< Previous"}
          </div>
        )}
        {pageNumbers.map(
          (number) =>
            number <= maxPages && (
              <div
                onClick={() => dispatch(changePage(number))}
                key={number}
                className="page-item"
              >
                {number}
              </div>
            )
        )}
        {currentPage !== maxPages && (
          <div className="page-item" onClick={() => dispatch(nextPage())}>
            {"Next >"}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Pagination;
