import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../api/services'
import { deleteCharacters, loadCharacters, toggleLoading } from '../../store/actions/actions'
import Button from '../Button/Button'
import styles from './Header.module.scss';

const mapState = state => {
  return {
    chars: state.chars
  }
}

const mapDispatch = {
  deleteCharacters,
  loadCharacters,
  toggleLoading
}

const Header = ({
  chars,
  deleteCharacters,
  loadCharacters,
  toggleLoading
}) => {
  const onGetData = async () => {
    if (chars?.length <= 0) {
      toggleLoading()
      const data = await fetchData();
      loadCharacters(data)
      toggleLoading()
    }
  }


  return (
    <header className={styles.navbar}>
      <label>Game of Thrones Characters</label>
      <nav className={styles.nav}>
        <Button msg={'get Data'} onClick={onGetData} />
        <Button msg={'remove Data'} onClick={deleteCharacters} />
      </nav>
      {chars.length > 0 ? <h2>Total results found: {chars.length}</h2> : ''}
    </header>
  )
}


export default connect(mapState, mapDispatch)(Header);