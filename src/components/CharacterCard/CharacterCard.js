import React from 'react';
import styles from './CharacterCard.module.scss'

const CharacterCard = (character) => {
  return (
    <div className={styles.cardWrapper} key={character._id}>
      <h2>{character.name}</h2>
      <h3>{character.titles[0] ? character.titles[0] : 'N/A'}</h3>
      <img
        className={styles.img}
        src={character.image ? character.image :
          'https://www.litespeedtech.com/support/wiki/lib/exe/fetch.php/litespeed_wiki:config:404.png?w=400&tok=a0557c'} alt='Character'></img>
    </div>
  )
}

export default CharacterCard;
