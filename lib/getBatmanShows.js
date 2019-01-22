import fetch from 'isomorphic-unfetch';

const getData = async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    
    return data;
}

export default getData;