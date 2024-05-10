import React from "react";
// import PropTypes from "prop-types";
import _ from "lodash";
import "./Pagination.css";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1 || pageSize == 0) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        <li className="page-button">
          <a className="page-link">&lt;</a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
        <li className="page-button">
          <a className="page-link">&gt;</a>
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
