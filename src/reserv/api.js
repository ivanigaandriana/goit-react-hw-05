import axios from 'axios';
export const searchMovies = async (searchQuery) => {
    const url = `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&page=1&include_adult=false&language=en-US&page=1`;
        
    const options = {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjlhMTIzYmYwY2RmMjZjYzNiNmM0YWE1NDJkN2NkOSIsInN1YiI6IjY2MWU0NDFlN2FlY2M2MDE2MzZiMjRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J2jbcZYlqO_WxQjCt2_yolgOJr76O5F4Gxao2HDE9ys',
         },
        }
    try {
        const response = await axios.get(url, options);
        console.log(response.data.results);
        return response.data.results;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
 export const trendingMovies = async () => {
     const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
     const options = {
         headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjlhMTIzYmYwY2RmMjZjYzNiNmM0YWE1NDJkN2NkOSIsInN1YiI6IjY2MWU0NDFlN2FlY2M2MDE2MzZiMjRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J2jbcZYlqO_WxQjCt2_yolgOJr76O5F4Gxao2HDE9ys',
         },
 } 
 try {
     const response = await axios.get(url, options);
     return response.data.results;
     
 } catch (error) {
     console.log(error);
     throw error;
 }
 }
 export const moviesDetails = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const options = {
        headers: {
           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjlhMTIzYmYwY2RmMjZjYzNiNmM0YWE1NDJkN2NkOSIsInN1YiI6IjY2MWU0NDFlN2FlY2M2MDE2MzZiMjRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J2jbcZYlqO_WxQjCt2_yolgOJr76O5F4Gxao2HDE9ys',
        },
    };
    try {
        const response = await axios.get(url, options);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const moviesCredits = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
    const options = {
      headers: {
        Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjlhMTIzYmYwY2RmMjZjYzNiNmM0YWE1NDJkN2NkOSIsInN1YiI6IjY2MWU0NDFlN2FlY2M2MDE2MzZiMjRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J2jbcZYlqO_WxQjCt2_yolgOJr76O5F4Gxao2HDE9ys',
    },
    }
    try {
      const response = await axios.get(url, options)
      return response.data;
    } catch (error) {
      console.error('Error fetching movies credits:', error)
      throw error
    }
  }

export const moviesReviews = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
    const options = {
        headers: {
           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjlhMTIzYmYwY2RmMjZjYzNiNmM0YWE1NDJkN2NkOSIsInN1YiI6IjY2MWU0NDFlN2FlY2M2MDE2MzZiMjRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J2jbcZYlqO_WxQjCt2_yolgOJr76O5F4Gxao2HDE9ys',
        },
    };
    try {
        const response = await axios.get(url, options);
        return response.data;
    } catch (error) {
        console.error('Error fetching movies reviews:', error)
        throw error;
    }
};