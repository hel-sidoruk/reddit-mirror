import React from 'react';
import styles from './textcontent.module.scss';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <svg
            className={styles.avatar}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="#C4C4C4" />
          </svg>
          <a href="#user-url" className={styles.username}>
            Дмитрий Гришин
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>4 часа назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a className={styles.postLink} href="#post-url">
          Реализация намеченных плановых заданий
        </a>
      </h2>
    </div>
  );
}
