import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item cursor-pointer ${currentPage === i ? 'border-b-4 border-black px-2' : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <nav className='mx-auto flex'>
      <ul className="flex gap-3 text-4xl mx-auto my-10">{renderPageNumbers()}</ul>
    </nav>
  );
};

export default Pagination;