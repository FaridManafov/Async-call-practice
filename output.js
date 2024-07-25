let movieTitle = 'maze runner'


const getMovieTitles = (substr) => {
    fetch(`https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=${substr}`);
} 

getMovieTitles(movieTitle)