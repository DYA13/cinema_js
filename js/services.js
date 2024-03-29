const API_KEY = '34209e36acbda6206801d426290fe015';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

// trending/all/day?api_key=<<api_key>>

const getData = async (url) => {
    try {
        const response = await fetch(url);
    
        if (response.ok) {
            return response.json();
        }
        throw new Error(`Error ${response.status}`);
    } catch (error) {
        console.error(error);
    }
};


export const getTrends = async (type ='all', period = 'week', page = 1) => {
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
   return await getData(url);

};


export const getTop = async (type, page = 1) => {
    const url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
return await getData(url)
};


export const getPopular = async(type, page = 1) => {
    const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url)

};


export const getVideo = async (id, type)=> {
    const url = `${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}${LANGUAGE}`;
    return await getData(url);
  
}



