// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Navbar } from './Navbar/Navbar';
// import Actor from './Component/Actor';
// import Home from './Component/Home'
// import Director from './Component/Director';
// import Reviewer from './Component/Reviewer';
// import Movie from './Component/Movie';
// import Genres from './Component/Genres';
// import MovieCast from './Component/MovieCast';
// import Search from './Component/Seach';
// import Rating from './Component/Rating';
// import MovieDirection from './Component/MovieDirection';
// import MovieGenres from './Component/MovieGenres';
// import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from '@mui/icons-material/Search';
// import PersonIcon from '@mui/icons-material/Person';
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
// import MovieIcon from '@mui/icons-material/Movie';
// import CategoryIcon from '@mui/icons-material/Category';
// import CastForEducationIcon from '@mui/icons-material/CastForEducation';
// import GradeIcon from '@mui/icons-material/Grade';
// import MovieCreationIcon from '@mui/icons-material/MovieCreation';
// import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

// const App = () => {
//   const components = [
//     { label: 'Home', to: '/', icon: <HomeIcon />, component: <Home /> },
//     { label: 'Search', to: '/search', icon: <SearchIcon />, component: <Search /> },
//     { label: 'Actor', to: '/actor', icon: <PersonIcon />, component: <Actor /> },
//     { label: 'Director', to: '/director', icon: <SupervisorAccountIcon />, component: <Director /> },
//     { label: 'Reviewer', to: '/reviewer', icon: <GradeIcon />, component: <Reviewer /> },
//     { label: 'Movie', to: '/movie', icon: <MovieIcon />, component: <Movie /> },
//     { label: 'Genres', to: '/genres', icon: <CategoryIcon />, component: <Genres /> },
//     { label: 'Movie Cast', to: '/moviecast', icon: <CastForEducationIcon />, component: <MovieCast /> },
//     { label: 'Rating', to: '/rating', icon: <GradeIcon />, component: <Rating /> },
//     { label: 'Movie Direction', to: '/moviedirection', icon: <MovieCreationIcon />, component: <MovieDirection /> },
//     { label: 'Movie Genres', to: '/moviegenres', icon: <LocalMoviesIcon />, component: <MovieGenres /> },
//   ];

//   return (
//     <Router>
//       <div>
//         <Navbar components={components} />
//         <Routes>
//           {components.map((component) => (
//             <Route
//               key={component.to}
//               path={component.to}
//               element={component.component}
//             />
//           ))}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Actor from './Component/Actor';
import Home from './Component/Home'
import Director from './Component/Director';
import Reviewer from './Component/Reviewer';
import Movie from './Component/Movie';
import Genres from './Component/Genres';
import MovieCast from './Component/MovieCast';
import Search from './Component/Seach';
import Rating from './Component/Rating';
import MovieDirection from './Component/MovieDirection';
import MovieGenres from './Component/MovieGenres';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import MovieIcon from '@mui/icons-material/Movie';
import CategoryIcon from '@mui/icons-material/Category';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import GradeIcon from '@mui/icons-material/Grade';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

const App = () => {
  const components = [
    { label: 'Home', to: '/', icon: <HomeIcon />, component: <Home /> },
    { label: 'Search', to: '/search', icon: <SearchIcon />, component: <Search /> },
    { label: 'Actor', to: '/actor', icon: <PersonIcon />, component: <Actor /> },
    { label: 'Director', to: '/director', icon: <SupervisorAccountIcon />, component: <Director /> },
    { label: 'Reviewer', to: '/reviewer', icon: <GradeIcon />, component: <Reviewer /> },
    { label: 'Movie', to: '/movie', icon: <MovieIcon />, component: <Movie /> },
    { label: 'Genres', to: '/genres', icon: <CategoryIcon />, component: <Genres /> },
    { label: 'Movie Cast', to: '/moviecast', icon: <CastForEducationIcon />, component: <MovieCast /> },
    { label: 'Rating', to: '/rating', icon: <GradeIcon />, component: <Rating /> },
    { label: 'Movie Direction', to: '/moviedirection', icon: <MovieCreationIcon />, component: <MovieDirection /> },
    { label: 'Movie Genres', to: '/moviegenres', icon: <LocalMoviesIcon />, component: <MovieGenres /> },
  ];

  return (
    <Router>
      <div>
        <Navbar components={components} />
        <Routes>
          {components.map((component) => (
            <Route
              key={component.to}
              path={component.to}
              element={component.component}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;



