import React from "react";
// import PropTypes from "prop-types";
import _ from "lodash";
import "./Pagination.css";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1 || pageSize == 0) return null;
  const pages = _.range(1, pagesCount + 1);

  // return (
  //   <nav>
  //     <ul className="pagination">
  //       <li className="page-button">
  //         <a className="page-link">&lt;</a>
  //       </li>
  //       {pages.map((page) => (
  //         <li
  //           key={page}
  //           className={page === currentPage ? "page-item active" : "page-item"}
  //         >
  //           <a className="page-link" onClick={() => onPageChange(page)}>
  //             {page}
  //           </a>
  //         </li>
  //       ))}
  //       <li className="page-button">
  //         <a className="page-link">&gt;</a>
  //       </li>
  //     </ul>
  //   </nav>
  // );

  const renderPageButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(pagesCount, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <li className={i === currentPage ? "page-item active" : "page-item"}>
        <a className="page-link"
        
          key={i}
          onClick={() => onPageChange(i)}
        >
          {i}
        </a>
        </li>
      );
    }

    return buttons;
  };

  return (
    <nav spacing="0">
      <ul className="pagination">
        <li className="page-button">
        <a className="page-link"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          {"<<"}
        </a>
        </li>
        <li className="page-button">
          <a className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"}
          </a>
        </li>
        {renderPageButtons()}
        <li className="page-button">
        <a className="page-link"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === pagesCount}
        >
          {">"}
        </a>
        </li>
        <li className="page-button">
        <a className="page-link"
          onClick={() => onPageChange(pagesCount)}
          disabled={currentPage === pagesCount}
        >
          {">>"}
        </a>
        </li>
      </ul>
    </nav>
  );
};

// Pagination.propTypes = {
//   itemsCount: PropTypes.number.isRequired,
//   pageSize: PropTypes.number.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired
// };

export default Pagination;
