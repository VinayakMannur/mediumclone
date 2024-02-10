"use client";

import React from "react";
import styles from "./pagination.module.css";

const Pagination = ({handlePageChange, page, hasPrev, hasNext }) => {

  const goToPage = (page) => {
    // console.log(page);
    handlePageChange(page);
  };
  

  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        className={styles.button}
        onClick={() => goToPage(parseInt(page) )}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={() => goToPage(parseInt(page) + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
