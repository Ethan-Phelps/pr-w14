import React from 'react';
import Movie from './Movie';

export default class MovieList extends React.Component {
    render(){
        return (
            <div className="col-12 h-100 justify-content-center d-flex align-items-center">
                <div id="primary" className="row">
                    <Movie 
                    Ratin="5" 
                    Title="Hollow Knight"    
                    Synop="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                    Image="https://m.media-amazon.com/images/M/MV5BYTljYjM2OGYtNzU5NC00ODBiLTk4Y2ItMmE0ZDUxMzJmYWU4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg"/>
                    <Movie 
                    Ratin="5" 
                    Title="Celeste"          
                    Synop="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                    Image="https://m.media-amazon.com/images/M/MV5BM2VjODEzODItNGEwYi00ZDVmLWI2MmYtNDkxMGRhN2ZiZjk3XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg"/>
                    <Movie 
                    Ratin="4" 
                    Title="Myst"             
                    Synop="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                    Image="https://m.media-amazon.com/images/M/MV5BNWNhYjVkOTEtYjI5NC00MzUyLTk5ZTktZjgwZmU2ZmIyOTkyXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_.jpg"/>
                    <Movie 
                    Ratin="4" 
                    Title="Inscryption"      
                    Synop="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                    Image="https://m.media-amazon.com/images/M/MV5BMjE0YzI5NGItMmQ4MC00YTU4LTgxYmItNmQ3YjQ5MjY0MjZmXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg"/>
                </div>
            </div>
        );
    }
}