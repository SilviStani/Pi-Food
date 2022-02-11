import React from 'react';
import styles from './Pagination.module.css';

export default function Pagination({recipesPagination, allRecipes, pagination}) {
    const pageNumbers = [];
    for (let i= 1; i < Math.ceil(allRecipes / recipesPagination); i++){
        pageNumbers.push(i);
    }

  return (
  <nav>
      <ul className={styles.pages}>{
          pageNumbers?.map ( number => (
              <li key={number} className={styles.li}>
                  <button className={styles.btn} onClick={() => pagination(number)}>{number}</button>
              </li>
          ))}
      </ul>
  </nav>
  );
}

