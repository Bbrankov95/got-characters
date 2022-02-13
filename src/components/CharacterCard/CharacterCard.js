import React from 'react';
import styles from './CharacterCard.module.scss'

const CharacterCard = ({
  character
}) => {
  return (
    <div className={styles.cardWrapper}>
      <h2>{character.name}</h2>
      <h3>{character.titles[0] ? character.titles[0] : 'N/A'}</h3>
      <img
        className={styles.img}
        src={character.image ? character.image :
        'https://vignette.wikia.nocookie.net/gameofthrones/images/9/96/Oberyn-Martell-house-martell-37118334-2832-4256.jpg/revision/latest/scale-to-width-down/333?cb=20150815065729'}
        alt='Character'>
      </img>
    </div>
  )
}

export default CharacterCard;