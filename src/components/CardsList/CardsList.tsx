import React from 'react';
import { Card } from './Card';
import styles from './cardslist.module.scss';

export function CardsList() {
  return (
    <ul className={styles.cardsList}>
      <Card />
    </ul>
  );
}
