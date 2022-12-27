import React from 'react';
import styles from './preview.module.scss';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/userupload/4146185/file/original-5f2456568a56e2587390918f373bca91.jpeg?compress=1&resize=320x240&vertical=top"
        alt="preview"
      />
    </div>
  );
}
