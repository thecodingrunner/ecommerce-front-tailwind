import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? 'active' : ''}`}
          onClick={() => onPageChange(i)}
        >
          <a className="page-link" href="#">
            {i}
          </a>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <nav className='mx-auto flex'>
      <ul className="flex gap-3 text-3xl mx-auto my-10">{renderPageNumbers()}</ul>
    </nav>
  );
};

export default Pagination;