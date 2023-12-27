 
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FetchAllMovies, addMovieAsync, deleteMovieAsync, updateMovieAsync } from "../Slices/Movie/movieSlice";
// import { Deletemovie } from "../BaseUrl/BaseUrl";


// const Reviewer = () => {
//   const dispatch = useDispatch();
//   const movies = useSelector((state) => state.movie.movies); 
//   const status = useSelector((state) => state.reviewer.status);

//   const [isAddFormVisible, setAddFormVisible] = useState(false);
//   const [formDataAdd, setFormDataAdd] = useState({
//     title: '',
//     movieYear: '',
//     movieTime: '',
//     movieLanguage: '',
//     releaseDate: '',
//     movie_Relase_Country: '',
//   });

//   const [updateActorId, setUpdateActorId] = useState(0);
//   const [formDataUpdate, setFormDataUpdate] = useState({
//     id: 0,
//     movieYear: '',
//     movieTime: '',
//     movieLanguage: '',
//     releaseDate: '',
//     movie_Relase_Country: '',
//   });

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(FetchAllMovies());
//     }
//   }, [status, dispatch]);
//   const handleInputChangeAdd = (e) => {
//     setFormDataAdd({ ...formDataAdd, [e.target.name]: e.target.value });
//   };

//   const handleInputChangeUpdate = (e) => {
//     setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
//   };

//   const handleAddActor = () => {
//     dispatch(addMovieAsync(formDataAdd));
//     setAddFormVisible(false);
//     setFormDataAdd({
//         title: '',
//         movieYear: '',
//         movieTime: '',
//         movieLanguage: '',
//         releaseDate: '',
//         movie_Relase_Country: '',
//     });
//   };

//   const handleUpdateActor = () => {
//     dispatch(updateMovieAsync(formDataUpdate));
//     setUpdateActorId(0);
//     setFormDataUpdate({
//         id: 0,
//         movieYear: '',
//         movieTime: '',
//         movieLanguage: '',
//         releaseDate: '',
//         movie_Relase_Country: '',
//     });
//   };

//   const handleDeleteActor = (id) => {
//     dispatch(deleteMovieAsync(id));
//   };

//   const handleUpdateButtonClick = (id) => {
//     setUpdateActorId(id);
//     const selectedActor = movies.find((actor) => actor.id === id);
//     setFormDataUpdate(selectedActor);
//   };
//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }
//   if (!Array.isArray(movies)) {
//     return <div>Error: Unable to fetch data</div>;
//   }

//   return (
//     <div>
//              <h2>Movies</h2>

// <button onClick={() => setAddFormVisible(!isAddFormVisible)}>Add Actor</button>

// {isAddFormVisible && (
//   <div>
//     <h3>Add Movie</h3>
//     <form>
//       <label>
//         Title Name:
//         <input type="text" name="title" value={formDataAdd.title} onChange={handleInputChangeAdd} />
//       </label>
//       <label>
//         Movie Year:
//         <input type="text" name="movieYear" value={formDataAdd.movieYear} onChange={handleInputChangeAdd} />
//       </label>
//       <label>
//         movie Time:
//         <input type="text" name="movieTime" value={formDataAdd.movieTime} onChange={handleInputChangeAdd} />
//       </label>
//       <label>
//         Movie language:
//         <input type="text" name="movieLanguage" value={formDataAdd.movieLanguage} onChange={handleInputChangeAdd} />
//       </label>
//       <label>
//         Movie Release Data:
//         <input type="date" name="releaseDate" value={formDataAdd.releaseDate} onChange={handleInputChangeAdd} />
//       </label>
//       <label>
//         Movie Release in Country:
//         <input type="text" name="movie_Relase_Country" value={formDataAdd.movie_Relase_Country} onChange={handleInputChangeAdd} />
//       </label>
//       <button type="button" onClick={handleAddActor}>
//         Add Actor
//       </button>
//     </form>
//   </div>
// )}

//         <h3>Movie List</h3>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>title Name</th>
//             <th>Movie Year</th>
//             <th>Movie Time</th>
//             <th>Movie language</th>
//             <th>Release Data</th>
//             <th>Release in Country</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {movies.map((movie) => (
//             <tr key={movie.id}>
//               <td>{movie.id}</td>
//               <td>{movie.title}</td>
//               <td>{movie.movieYear}</td>
//               <td>{movie.movieTime}</td>
//               <td>{movie.movieLanguage}</td>
//               <td>{movie.releaseDate}</td>
//               <td>{movie.movie_Relase_Country}</td>
//               <td>
//                 <button onClick={() => handleUpdateButtonClick(movie.id)}>Update</button>
//                 <button onClick={() => handleDeleteActor(movie.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {updateActorId !== 0 && (
//         <div>
//           <h3>Update Actor</h3>
//           <form>
//             <label>
//               Title Name:
//               <input
//                 type="text"
//                 name="title"
//                 value={formDataUpdate.title}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//             Movie Year:
//               <input
//                 type="text"
//                 name="movieYear"
//                 value={formDataUpdate.movieYear}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//               Movie Time:
//               <input
//                 type="text"
//                 name="movieTime"
//                 value={formDataUpdate.movieTime}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//               Movie language:
//               <input type="text" name="movieLanguage" 
//               value={formDataUpdate.movieLanguage}
//                onChange={handleInputChangeUpdate}
//              />
//             </label>
//             <label>
//               Movie Release Date:
//               <input type="text" name="releaseDate" 
//               value={formDataUpdate.releaseDate}
//                onChange={handleInputChangeUpdate}
//              />
//             </label>
//             <label>
//               Movie Release in country:
//               <input type="text" name="movie_Relase_Country" 
//               value={formDataUpdate.movie_Relase_Country}
//                onChange={handleInputChangeUpdate}
//              />
//             </label>
//             <button type="button" onClick={handleUpdateActor}>
//               Update Actor
//             </button>
//           </form>
//         </div>
//       )}
//       {/* <h2>Movie List</h2>
//       <pre>{JSON.stringify(movies, null, 2)}</pre> */}
//     </div>
//   );
// };

// export default Reviewer;





import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  FetchAllMovies, 
  addMovieAsync, 
  deleteMovieAsync, 
  updateMovieAsync 
} from "../Slices/Movie/movieSlice";
import { 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TextField 
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
const Movie = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies); 
  const status = useSelector((state) => state.movie.status);

  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [formDataAdd, setFormDataAdd] = useState({
    title: '',
    movieYear: '',
    movieTime: '',
    movieLanguage: '',
    releaseDate: '',
    movie_Relase_Country: '',
  });

  const [updateActorId, setUpdateActorId] = useState(0);
  const [formDataUpdate, setFormDataUpdate] = useState({
    id: 0,
    movieYear: '',
    movieTime: '',
    movieLanguage: '',
    releaseDate: '',
    movie_Relase_Country: '',
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(FetchAllMovies());
    }
  }, [status, dispatch]);

  const handleInputChangeAdd = (e) => {
    setFormDataAdd({ ...formDataAdd, [e.target.name]: e.target.value });
  };

  const handleInputChangeUpdate = (e) => {
    setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
  };

  const handleAddActor = () => {
    dispatch(addMovieAsync(formDataAdd));
    setAddFormVisible(false);
    setFormDataAdd({
      title: '',
      movieYear: '',
      movieTime: '',
      movieLanguage: '',
      releaseDate: '',
      movie_Relase_Country: '',
    });
  };

  const handleUpdateActor = () => {
    dispatch(updateMovieAsync(formDataUpdate));
    setUpdateActorId(0);
    setFormDataUpdate({
      id: 0,
      movieYear: '',
      movieTime: '',
      movieLanguage: '',
      releaseDate: '',
      movie_Relase_Country: '',
    });
  };

  const handleDeleteActor = (id) => {
    dispatch(deleteMovieAsync(id));
  };

  const handleUpdateButtonClick = (id) => {
    setUpdateActorId(id);
    const selectedActor = movies.find((actor) => actor.id === id);
    setFormDataUpdate(selectedActor);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(movies)) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div>
      <h2>Movies</h2>

      <Button onClick={() => setAddFormVisible(!isAddFormVisible)} variant="contained">Add Movie</Button>

      {isAddFormVisible && (
        <div>
          <h3>Add Movie</h3>
          <form>
            <TextField 
              label="Title Name"
              name="title" 
              value={formDataAdd.title} 
              onChange={handleInputChangeAdd} 
            />
            <TextField 
              label="Movie Year"
              name="movieYear" 
              value={formDataAdd.movieYear} 
              onChange={handleInputChangeAdd} 
            />
            <TextField 
              label="Movie Time"
              name="movieTime" 
              value={formDataAdd.movieTime} 
              onChange={handleInputChangeAdd} 
            />
            <TextField 
              label="Movie Language"
              name="movieLanguage" 
              value={formDataAdd.movieLanguage} 
              onChange={handleInputChangeAdd} 
            />
            <TextField 
              label="Release Date" 
              name="releaseDate" 
              type="date" 
              value={formDataAdd.releaseDate} 
              onChange={handleInputChangeAdd} 
            />
            <TextField 
              label="Release in Country"
              name="movie_Relase_Country" 
              value={formDataAdd.movie_Relase_Country} 
              onChange={handleInputChangeAdd} 
            />
            <Button type="button" onClick={handleAddActor}>
              Add Movie
            </Button>
          </form>
        </div>
      )}

      <h3>Movie List</h3>
      <TableContainer>
        <Table border="1">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title Name</TableCell>
              <TableCell>Movie Year</TableCell>
              <TableCell>Movie Time</TableCell>
              <TableCell>Movie Language</TableCell>
              <TableCell>Release Date</TableCell>
              <TableCell>Release in Country</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((movie) => (
              <TableRow key={movie.id}>
                <TableCell>{movie.id}</TableCell>
                <TableCell>{movie.title}</TableCell>
                <TableCell>{movie.movieYear}</TableCell>
                <TableCell>{movie.movieTime}</TableCell>
                <TableCell>{movie.movieLanguage}</TableCell>
                <TableCell>{movie.releaseDate}</TableCell>
                <TableCell>{movie.movie_Relase_Country}</TableCell>
                <TableCell>
                  <Button onClick={() => handleUpdateButtonClick(movie.id)} variant="outlined">Update</Button>
                  <Button onClick={() => handleDeleteActor(movie.id)} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {updateActorId !== 0 && (
        <div>
          <h3>Update Movie</h3>
          <form>
            <TextField 
              label="Title Name"
              name="title" 
              value={formDataUpdate.title} 
              onChange={handleInputChangeUpdate} 
            />
            <TextField 
              label="Movie Year"
              name="movieYear" 
              value={formDataUpdate.movieYear} 
              onChange={handleInputChangeUpdate} 
            />
            <TextField 
              label="Movie Time"
              name="movieTime" 
              value={formDataUpdate.movieTime} 
              onChange={handleInputChangeUpdate} 
            />
            <TextField 
              label="Movie Language"
              name="movieLanguage" 
              value={formDataUpdate.movieLanguage} 
              onChange={handleInputChangeUpdate} 
            />
            <TextField 
              label="Release Date" 
              name="releaseDate" 
              type="date" 
              value={formDataUpdate.releaseDate} 
              onChange={handleInputChangeUpdate} 
            />
            <TextField 
              label="Release in Country"
              name="movie_Relase_Country" 
              value={formDataUpdate.movie_Relase_Country} 
              onChange={handleInputChangeUpdate} 
            />
            <Button type="button" onClick={handleUpdateActor}>
              Update Movie
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Movie;
