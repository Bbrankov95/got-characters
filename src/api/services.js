const API_URL = 'https://api.got.show/api/show/characters';


export const fetchData = async () => {
    const res = await fetch(API_URL);
    const json = await res.json();

    return json
  };