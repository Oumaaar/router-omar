import './App.css';
import MoviesList from  './Components/MoviesList';
import MovieCard from './Components/MovieCard';
import Filter from './Components/Filter';
import Navbar from './Components/Navbar';
import Description from './Components/Description';
import BandeAnnonce from './Components/BandeAnnonce';
import React, {useState} from 'react';
import {Route,Routes} from 'react-router-dom'
function App() {
  const[movies,setMovies] = useState([
    { id: Math.random(), 
      Title: "Love",
      Description :"Murphy, an American living in Paris, enters an emotionally charged relationship with Electra, who happens to be unstable. To spice up their relationship, they invite a third partner, their neighbour.",
      PosterURL : "https://iegybest.co:2096/egybest/%D9%81%D9%8A%D9%84%D9%85-love/",
      rating : "5",
      ImageMovies : "https://www.mauvais-genres.com/15201-thickbox_default/love-french-movie-poster-15x21-2015-gaspar-noe-aomi-muyock.jpg",
      Annonces: "https://www.youtube.com/embed/OsTSh2zjRYA"
  }, 

        { id:  Math.random(), 
          Title: " Enter the void",
          Description :"This psychedelic tour of life after death is seen entirely from the point of view of Oscar (Nathaniel Brown), a young American drug dealer and addict living in Tokyo with his prostitute sister, Linda (Paz de la Huerta). When Oscar is killed by police during a bust gone bad, his spirit journeys from the past -- where he sees his parents before their deaths -- to the present -- where he witnesses his own autopsy -- and then to the future, where he looks out for his sister from beyond the grave.",
          PosterURL : "https://eg.egybest.com/movie/enter-the-void-2009/",
          rating : "5",
          ImageMovies: "https://www.mauvais-genres.com/20123-large_default/enter-the-void-movie-poster-15x21-in-2010-gaspar-no%C3%A9-paz-de-la-huerta.jpg",
          Annonces : "https://www.youtube.com/embed/JJkPLYmUyzg"

          },

            { id:  Math.random(), 
              Title: "Fight Club",
              Description :"Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.",
              PosterURL : "https://epco.egybest.run/movie/fight-club-1999/",
              rating : "5",
              ImageMovies: "https://image.posterlounge.com/img/products/670000/669300/669300_poster_l.jpg",
              Annonces : "https://www.youtube.com/embed/qtRKdVHc-cE"
              }, 
              
  ]);

        const [movie, setMovie] = useState({
          Title: "",
          ImageMovies: "",
          Descreption: "",
          PosterURL: "",
          Rating:""
        });

      const addMovie = (movieAdd) => {
        setMovies([...movies, movieAdd]);
      };

      const handleSearch= (Title,rating) =>{
        const mv = movies.filter((item) => (item.Title.includes(Title) ) && (item.rating >= rating)) 
        setMovies(mv)
      }

      const handleChange = (e) =>{
        setMovie({...movie, [e.target.name]: e.target.value})
      }

      const handleSubmit = (e) =>{
        e.preventDefault()
        addMovie({...movie})
      };
  return (
    <div className="App"> 
        <Navbar addMovie={addMovie} handleSearch={handleSearch} />
        <Routes>
        <Route exact path='/Description/:description' element={<Description movies={movies}/>}>
        <Route path='' element={<BandeAnnonce movies={movies}/>}/>
        </Route>
        <Route path='/' element={<><MoviesList  movies={movies}/> <MovieCard handleChange={handleChange} handleSubmit={handleSubmit}/> </>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
