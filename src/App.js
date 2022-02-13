import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import CharacterCard from './components/CharacterCard/CharacterCard';
import Header from './components/Header/Header';
import { fetchData } from './api/services';
import { loadCharacters, toggleLoading } from './store/actions/actions';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

const mapDispatch = {
  loadCharacters,
  toggleLoading
}

const mapState = state => {
  return {
    chars: state.chars,
    isLoading: state.isLoading
  }
}

function App({
  chars,
  isLoading,
  loadCharacters,
  toggleLoading
}) {
  useEffect(() => {
    (async () => {
      toggleLoading()
      const data = await fetchData();
      loadCharacters(data)
      toggleLoading()
    })()
  }, [loadCharacters, toggleLoading])

  return (
    <div className="App">
      <Header />
      <div className='characters'>
        {isLoading ? <LoadingSpinner/> : chars?.map(c => <CharacterCard key={c._id} character={c} />)}
      </div>
    </div>
  );
}

export default connect(mapState, mapDispatch)(App);
