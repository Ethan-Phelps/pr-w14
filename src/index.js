import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MovieList from './components/MovieList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
Using what you’ve learned this week, create a page of an application that enables users to vote and leave reviews on movies.
You should include at least the following components: 
-/  MovieList: 
        A container for all the Movie components and their data.
-/  Movie: 
        A component that represents movie data (i.e. image, synopsis, rating, etc…)
    Stars: 
        A one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)
-/  ReviewList: 
        A container inside of a Movie that houses Review components.
    Review: 
        A text review a user can leave on a movie.
    ReviewForm: 
        A form at the bottom of a Movie component that allows users to leave reviews. 
        When submitted, the review should be added to the movie. 
        All this data can be stored in an array, no networking or database needed for this assignment.
*/