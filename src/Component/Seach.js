

// import React, { useState } from 'react';
// import { searchMoviesByName, searchActorByName, searchDirectorByName, searchGenresByName, searchFeedBackByMoviename } from '../BaseUrl/BaseUrl';
// import {
//   Button,
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,Rating as MuiRating,
// } from '@mui/material';
// import './Search.css';
// const Search = () => {
//   const [movieSearchTerm, setMovieSearchTerm] = useState('');
//   const [actorSearchTerm, setActorSearchTerm] = useState('');
//   const [directorSearchTern, setDirectorSeachTerm] = useState('');
//   const [generesSearchTerm, setGeneresSearchTerm] = useState('');
//   const [feedbackSearchTerm, setfeedbackSearchTerm] = useState('');
//   const [movieSearchResult, setMovieSearchResult] = useState(null);
//   const [actorSearchResult, setActorSearchResult] = useState(null);
//   const [directorSearchResult, setDirectorSearchResult] = useState(null);
//   const [genresSearchResult, setGenresSearchResult] = useState(null);
//   const [feedbackSearchResult, setfeedbackSearchResult] = useState(null);
//   const [error, setError] = useState(null);

//   const handleMovieSearch = async () => {
//     try {
//       const response = await searchMoviesByName(movieSearchTerm);
//       setMovieSearchResult(response);
//       setError(null);
//     } catch (error) {
//       setMovieSearchResult(null);
//       setError('Error fetching movie data. Please try again.');
//     }
//   };

//   const handleActorSearch = async () => {
//     try {
//       const response = await searchActorByName(actorSearchTerm);
//       setActorSearchResult(response);
//       setError(null);
//     } catch (error) {
//       setActorSearchResult(null);
//       setError('Error fetching actor data. Please try again.');
//     }
//   };

//   const handledirectorSearch = async () => {
//     try {
//       const response = await searchDirectorByName(directorSearchTern);
//       setDirectorSearchResult(response);
//       setError(null);
//     } catch (error) {
//       setActorSearchResult(null);
//       setError('Error fetching actor data. Please try again.');
//     }
//   };

//   const handlegeneresSearch = async () => {
//     try {
//       const response = await searchGenresByName(generesSearchTerm);
//       setGenresSearchResult(response);
//       setError(null);
//     } catch (error) {
//       setGenresSearchResult(null);
//       setError('Error fetching actor data. Please try again.');
//     }
//   };

//   const handlefeedbackSearch = async () => {
//     try {
//       const response = await searchFeedBackByMoviename(feedbackSearchTerm);
//       setfeedbackSearchResult(response);
//       setError(null);
//     } catch (error) {
//       setfeedbackSearchResult(null);
//       setError('Error fetching actor data. Please try again.');
//     }
//   };

//   return (
//     <div > 
//       <h2>Search Component</h2>

//       <TextField
//         label="Search Movie Name"
//         variant="outlined"
//         value={movieSearchTerm}
//         onChange={(e) => setMovieSearchTerm(e.target.value)}
//       />
//       <Button variant="contained" color="success"  onClick={handleMovieSearch}>
//         Search Movies
//       </Button>
//       <br />

//       <TextField
//         label="Search Actor Name"
//         variant="outlined"
//         value={actorSearchTerm}
//         onChange={(e) => setActorSearchTerm(e.target.value)}
//       />
//       <Button variant="contained" color="success" onClick={handleActorSearch}>
//         Search Actors
//       </Button>
//       <br />

//       <TextField
//         label="Search Director Name"
//         variant="outlined"
//         value={directorSearchTern}
//         onChange={(e) => setDirectorSeachTerm(e.target.value)}
//       />
//       <Button variant="contained" color="success" onClick={handledirectorSearch}>
//         Search Directors
//       </Button>
//       <br />

//       <TextField
//         label="Search Movie Type"
//         variant="outlined"
//         value={generesSearchTerm}
//         onChange={(e) => setGeneresSearchTerm(e.target.value)}
//       />
//       <Button variant="contained" color="success" onClick={handlegeneresSearch}>
//         Search genres
//       </Button>
//       <br />

//       <TextField
//         label="Search Feedback By movie Name"
//         variant="outlined"
//         value={feedbackSearchTerm}
//         onChange={(e) => setfeedbackSearchTerm(e.target.value)}
//       />
//       <Button variant="contained" color="success" onClick={handlefeedbackSearch}>
//         Search Feedback
//       </Button>

//       {error && <div>{error}</div>}

//       {movieSearchResult && (
//           <div>
//           <h3>Movie Search Result</h3>
//           <TableContainer>
//             <Table border="1">
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Title</TableCell>
//                   <TableCell>Year</TableCell>
//                   <TableCell>Time</TableCell>
//                   <TableCell>Language</TableCell>
//                   <TableCell>Release Date</TableCell>
//                   <TableCell>Release Country</TableCell>
//                   <TableCell>Genres</TableCell>
//                   <TableCell>Directors</TableCell>
//                   <TableCell>Cast</TableCell>
//                   <TableCell>Ratings</TableCell>
//                   <TableCell>Total Reviews</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 <TableRow>
//                   <TableCell>{movieSearchResult.title}</TableCell>
//                   <TableCell>{movieSearchResult.movieYear}</TableCell>
//                   <TableCell>{movieSearchResult.movieTime}</TableCell>
//                   <TableCell>{movieSearchResult.movieLanguage}</TableCell>
//                   <TableCell>{movieSearchResult.releaseDate}</TableCell>
//                   <TableCell>{movieSearchResult.movie_Relase_Country}</TableCell>
//                   <TableCell>
//                     <ul>
//                       {movieSearchResult.genres.map((genre, index) => (
//                         <li key={index}>{genre}</li>
//                       ))}
//                     </ul>
//                   </TableCell>
//                   <TableCell>
//                     <ul>
//                       {movieSearchResult.directors.map((director, index) => (
//                         <li key={index}>{director}</li>
//                       ))}
//                     </ul>
//                   </TableCell>
//                   <TableCell>
//                     <ul>
//                       {movieSearchResult.cast.map((actor, index) => (
//                         <li key={index}>
//                           {actor.firstName} {actor.lastName} - {actor.role}
//                         </li>
//                       ))}
//                     </ul>
//                   </TableCell>
//                   <TableCell>
//                     <MuiRating
//                       name="movieRatings"
//                       value={movieSearchResult.movieRatings}
//                       readOnly
//                     />
//                   </TableCell>
//                   <TableCell>{movieSearchResult.totalReviews}</TableCell>
//                 </TableRow>
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       )}

//       {actorSearchResult && (
//         <div>
//         <h3>Actor Search Result</h3>
//         <TableContainer>
//           <Table border="1">
//             <TableHead>
//               <TableRow>
//                 <TableCell>First Name</TableCell>
//                 <TableCell>Last Name</TableCell>
//                 <TableCell>Gender</TableCell>
//                 <TableCell>Date of Birth</TableCell>
//                 <TableCell>Movies</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               <TableRow>
//                 <TableCell>{actorSearchResult.firstName}</TableCell>
//                 <TableCell>{actorSearchResult.lastName}</TableCell>
//                 <TableCell>{actorSearchResult.gender}</TableCell>
//                 <TableCell>{actorSearchResult.dob}</TableCell>
//                 <TableCell>
//                   <ul>
//                     {actorSearchResult.movies.map((movie, index) => (
//                       <li key={index}>{movie}</li>
//                     ))}
//                   </ul>
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//       )}

//       {directorSearchResult && (
//           <div>
//           <h3>Director Search Result</h3>
//           <TableContainer>
//             <Table border="1">
//               <TableHead>
//                 <TableRow>
//                   <TableCell>First Name</TableCell>
//                   <TableCell>Last Name</TableCell>
//                   <TableCell>Date of Birth</TableCell>
//                   <TableCell>Movies</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 <TableRow>
//                   <TableCell>{directorSearchResult.firstName}</TableCell>
//                   <TableCell>{directorSearchResult.lastName}</TableCell>
//                   <TableCell>{directorSearchResult.dob}</TableCell>
//                   <TableCell>
//                     <ul>
//                       {directorSearchResult.movies.map((movie, index) => (
//                         <li key={index}>{movie}</li>
//                       ))}
//                     </ul>
//                   </TableCell>
//                 </TableRow>
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       )}

//       {genresSearchResult && (
//         <div>
//           <h3>Genres Search Result</h3>
//           <TableContainer>
//             <Table border="1">
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Movie Name</TableCell>
//                   <TableCell>Movie Year</TableCell>
//                   <TableCell>Movie Time</TableCell>
//                   <TableCell>Movie movieLanguage</TableCell>
//                   <TableCell>Movie Movie releaseDate</TableCell>
//                   <TableCell>Movie Release in country</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {genresSearchResult.map((feedback, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{feedback.title}</TableCell>
//                     <TableCell>{feedback.movieYear}</TableCell>
//                     <TableCell>{feedback.movieTime}</TableCell>
//                     <TableCell>{feedback.movieLanguage}</TableCell>
//                     <TableCell>{feedback.releaseDate}</TableCell>
//                     <TableCell>{feedback.movie_Relase_Country}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       )}

//       {feedbackSearchResult && (
//         <div>
//           <h3>Feedback Search Result</h3>
//           <TableContainer>
//             <Table border="1">
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Movie Name</TableCell>
//                   <TableCell>Reviewer Name</TableCell>
//                   <TableCell>Feedback</TableCell>
//                   <TableCell>Reviewer Star</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {feedbackSearchResult.map((feedback, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{feedback.movieName}</TableCell>
//                     <TableCell>{feedback.reviewerName}</TableCell>
//                     <TableCell>{feedback.feedback}</TableCell>
//                     {/* <TableCell>{feedback.reviewerStar}</TableCell> */}
//                     <TableCell>
//                       <MuiRating
//                         name={`reviewerStar-${index}`}
//                         value={feedback.reviewerStar}
//                         readOnly
//                       />
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;

















import React, { useState } from 'react';
import { searchMoviesByName, searchActorByName, searchDirectorByName, searchGenresByName, searchFeedBackByMoviename } from '../BaseUrl/BaseUrl';
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,Rating as MuiRating,
} from '@mui/material';
import './Search.css';
const Search = () => {
  const [movieSearchTerm, setMovieSearchTerm] = useState('');
  const [actorSearchTerm, setActorSearchTerm] = useState('');
  const [directorSearchTern, setDirectorSeachTerm] = useState('');
  const [generesSearchTerm, setGeneresSearchTerm] = useState('');
  const [feedbackSearchTerm, setfeedbackSearchTerm] = useState('');
  const [movieSearchResult, setMovieSearchResult] = useState(null);
  const [actorSearchResult, setActorSearchResult] = useState(null);
  const [directorSearchResult, setDirectorSearchResult] = useState(null);
  const [genresSearchResult, setGenresSearchResult] = useState(null);
  const [feedbackSearchResult, setfeedbackSearchResult] = useState(null);
  const [error, setError] = useState(null);

  const handleMovieSearch = async () => {
    try {
      const response = await searchMoviesByName(movieSearchTerm);
      setMovieSearchResult(response);
      setError(null);
    } catch (error) {
      setMovieSearchResult(null);
      setError('Error fetching movie data. Please try again.');
    }
  };

  const handleActorSearch = async () => {
    try {
      const response = await searchActorByName(actorSearchTerm);
      setActorSearchResult(response);
      setError(null);
    } catch (error) {
      setActorSearchResult(null);
      setError('Error fetching actor data. Please try again.');
    }
  };

  const handledirectorSearch = async () => {
    try {
      const response = await searchDirectorByName(directorSearchTern);
      setDirectorSearchResult(response);
      setError(null);
    } catch (error) {
      setActorSearchResult(null);
      setError('Error fetching actor data. Please try again.');
    }
  };

  const handlegeneresSearch = async () => {
    try {
      const response = await searchGenresByName(generesSearchTerm);
      setGenresSearchResult(response);
      setError(null);
    } catch (error) {
      setGenresSearchResult(null);
      setError('Error fetching actor data. Please try again.');
    }
  };

  const handlefeedbackSearch = async () => {
    try {
      const response = await searchFeedBackByMoviename(feedbackSearchTerm);
      setfeedbackSearchResult(response);
      setError(null);
    } catch (error) {
      setfeedbackSearchResult(null);
      setError('Error fetching actor data. Please try again.');
    }
  };

  return (
    <div > 
      <h2>Search Component</h2>

      <TextField
      
       id="standard-search"
       type="search"
        label="Search Movie Name"
        variant="outlined"
        value={movieSearchTerm}
        onChange={(e) => setMovieSearchTerm(e.target.value)}
      />
      <Button variant="standard" color="success"  onClick={handleMovieSearch}>
        Search Movies
      </Button>
      <br />

      <TextField
       id="standard-search"
       type="search"
        label="Search Actor Name"
        variant="outlined"
        value={actorSearchTerm}
        onChange={(e) => setActorSearchTerm(e.target.value)}
      />
      <Button variant="standard" color="success" onClick={handleActorSearch}>
        Search Actors
      </Button>
      <br />

      <TextField
       id="standard-search"
       type="search"
        label="Search Director Name"
        variant="outlined"
        value={directorSearchTern}
        onChange={(e) => setDirectorSeachTerm(e.target.value)}
      />
      <Button variant="standard" color="success" onClick={handledirectorSearch}>
        Search Directors
      </Button>
      <br />

      <TextField
       id="standard-search"
       type="search"
        label="Search Movie Type"
        variant="outlined"
        value={generesSearchTerm}
        onChange={(e) => setGeneresSearchTerm(e.target.value)}
      />
      <Button variant="standard" color="success" onClick={handlegeneresSearch}>
        Search genres
      </Button>
      <br />

      <TextField
       id="standard-search"
       type="search"
        label="Search Feedback By movie Name"
        variant="outlined"
        value={feedbackSearchTerm}
        onChange={(e) => setfeedbackSearchTerm(e.target.value)}
      />
      <Button variant="standard" color="success" onClick={handlefeedbackSearch}>
        Search Feedback
      </Button>

      {error && <div>{error}</div>}

      {movieSearchResult && (
          <div>
          <h3>Movie Search Result</h3>
          <TableContainer>
            <Table border="1">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Year</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Language</TableCell>
                  <TableCell>Release Date</TableCell>
                  <TableCell>Release Country</TableCell>
                  <TableCell>Genres</TableCell>
                  <TableCell>Directors</TableCell>
                  <TableCell>Cast</TableCell>
                  <TableCell>Ratings</TableCell>
                  <TableCell>Total Reviews</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{movieSearchResult.title}</TableCell>
                  <TableCell>{movieSearchResult.movieYear}</TableCell>
                  <TableCell>{movieSearchResult.movieTime}</TableCell>
                  <TableCell>{movieSearchResult.movieLanguage}</TableCell>
                  <TableCell>{movieSearchResult.releaseDate}</TableCell>
                  <TableCell>{movieSearchResult.movie_Relase_Country}</TableCell>
                  <TableCell>
                    <ul>
                      {movieSearchResult.genres.map((genre, index) => (
                        <li key={index}>{genre}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul>
                      {movieSearchResult.directors.map((director, index) => (
                        <li key={index}>{director}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul>
                      {movieSearchResult.cast.map((actor, index) => (
                        <li key={index}>
                          {actor.firstName} {actor.lastName} - {actor.role}
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <MuiRating
                      name="movieRatings"
                      value={movieSearchResult.movieRatings}
                      readOnly
                    />
                  </TableCell>
                  <TableCell>{movieSearchResult.totalReviews}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}

      {actorSearchResult && (
        <div>
        <h3>Actor Search Result</h3>
        <TableContainer>
          <Table border="1">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Date of Birth</TableCell>
                <TableCell>Movies</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{actorSearchResult.firstName}</TableCell>
                <TableCell>{actorSearchResult.lastName}</TableCell>
                <TableCell>{actorSearchResult.gender}</TableCell>
                <TableCell>{actorSearchResult.dob}</TableCell>
                <TableCell>
                  <ul>
                    {actorSearchResult.movies.map((movie, index) => (
                      <li key={index}>{movie}</li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      )}

      {directorSearchResult && (
          <div>
          <h3>Director Search Result</h3>
          <TableContainer>
            <Table border="1">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Date of Birth</TableCell>
                  <TableCell>Movies</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{directorSearchResult.firstName}</TableCell>
                  <TableCell>{directorSearchResult.lastName}</TableCell>
                  <TableCell>{directorSearchResult.dob}</TableCell>
                  <TableCell>
                    <ul>
                      {directorSearchResult.movies.map((movie, index) => (
                        <li key={index}>{movie}</li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}

      {genresSearchResult && (
        <div>
          <h3>Genres Search Result</h3>
          <TableContainer>
            <Table border="1">
              <TableHead>
                <TableRow>
                  <TableCell>Movie Name</TableCell>
                  <TableCell>Movie Year</TableCell>
                  <TableCell>Movie Time</TableCell>
                  <TableCell>Movie movieLanguage</TableCell>
                  <TableCell>Movie Movie releaseDate</TableCell>
                  <TableCell>Movie Release in country</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {genresSearchResult.map((feedback, index) => (
                  <TableRow key={index}>
                    <TableCell>{feedback.title}</TableCell>
                    <TableCell>{feedback.movieYear}</TableCell>
                    <TableCell>{feedback.movieTime}</TableCell>
                    <TableCell>{feedback.movieLanguage}</TableCell>
                    <TableCell>{feedback.releaseDate}</TableCell>
                    <TableCell>{feedback.movie_Relase_Country}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}

      {feedbackSearchResult && (
        <div>
          <h3>Feedback Search Result</h3>
          <TableContainer>
            <Table border="1">
              <TableHead>
                <TableRow>
                  <TableCell>Movie Name</TableCell>
                  <TableCell>Reviewer Name</TableCell>
                  <TableCell>Feedback</TableCell>
                  <TableCell>Reviewer Star</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {feedbackSearchResult.map((feedback, index) => (
                  <TableRow key={index}>
                    <TableCell>{feedback.movieName}</TableCell>
                    <TableCell>{feedback.reviewerName}</TableCell>
                    <TableCell>{feedback.feedback}</TableCell>
                    {/* <TableCell>{feedback.reviewerStar}</TableCell> */}
                    <TableCell>
                      <MuiRating
                        name={`reviewerStar-${index}`}
                        value={feedback.reviewerStar}
                        readOnly
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default Search;















