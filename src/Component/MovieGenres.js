 
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FetchAllMoviegenres, addMoviegenresAsync, deleteMoviegenresAsync, updateMoviegenresAsync } from "../Slices/MovieGenres/moviegenresSlice";


// const Genres = () => {
//   const dispatch = useDispatch();
//   const directors = useSelector((state) => state.moviegenres.moviegenreses); 
//   const status = useSelector((state) => state.director.status);
//   const [isAddFormVisible, setAddFormVisible] = useState(false);
//   const [formDataAdd, setFormDataAdd] = useState({
//     movieTitle: '',
//     gen_Title: '',
   

    
//   });

//   const [updateActorId, setUpdateActorId] = useState(0);
//   const [formDataUpdate, setFormDataUpdate] = useState({
//     id: 0,
//     movieTitle: '',
//     gen_Title: '',
//     movieId:'',
//     genresId:'',


 
//   });

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(FetchAllMoviegenres());
//     }
//   }, [status, dispatch]);

//   const handleInputChangeAdd = (e) => {
//     setFormDataAdd({ ...formDataAdd, [e.target.name]: e.target.value });
//   };

//   const handleInputChangeUpdate = (e) => {
//     setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
//   };

//   const handleAddActor = () => {
//     dispatch(addMoviegenresAsync(formDataAdd));
//     setAddFormVisible(false);
//     setFormDataAdd({
     
//         movieTitle: '',
//         gen_Title: '',
//     });
//   };

//   const handleUpdateActor = () => {
//     dispatch(updateMoviegenresAsync(formDataUpdate));
//     setUpdateActorId(0);
//     setFormDataUpdate({
//         id: 0,
//         directorFirstName: '',
//         title: '',
//         directorId:'',
//         movieId:'',
//     });
//   };

//   const handleDeleteActor = (id) => {
//     dispatch(deleteMoviegenresAsync(id));
//   };

//   const handleUpdateButtonClick = (id) => {
//     setUpdateActorId(id);
//     const selectedActor = directors.find((actor) => actor.id === id);
//     setFormDataUpdate(selectedActor);
//   };

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }


//   if (!Array.isArray(directors)) {
//     return <div>Error: Unable to fetch data</div>;
//   }

//   return (
//     <div>
// <h2>Movie Genres</h2>

// <button onClick={() => setAddFormVisible(!isAddFormVisible)}>Add Movie Genres</button>

// {isAddFormVisible && (
//   <div>
//     <h3>Add Genres</h3>
//     <form>
//       <label>
//         Movie Title Name:
//         <input type="text" name="movieTitle" value={formDataAdd.movieTitle} onChange={handleInputChangeAdd} />
//       </label>
//       <label>
//         Genres Title Name:
//         <input type="text" name="gen_Title" value={formDataAdd.gen_Title} onChange={handleInputChangeAdd} />
//       </label>
     
//       <button type="button" onClick={handleAddActor}>
//         Add 
//       </button>
//     </form>
//   </div>
// )}
// <h3>Movie Direction List</h3>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>movieTitle</th>
//             <th>gen_Title</th>
          
//             <th>Action</th>
            
//           </tr>
//         </thead>
//         <tbody>
//           {directors.map((director) => (
//             <tr key={director.id}>
//               <td>{director.id}</td>
//               <td>{director.movieTitle}</td>
//               <td>{director.gen_Title}</td>      
//               <td>
//                 <button onClick={() => handleUpdateButtonClick(director.id)}>Update</button>
//                 <button onClick={() => handleDeleteActor(director.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {updateActorId !== 0 && (
//         <div>
//           <h3>Update </h3>
//           <form>
//             <label>
//               Movie Title Name:
//               <input
//                 type="text"
//                 name="movieTitle"
//                 value={formDataUpdate.movieTitle}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//               Genres Title Name:
//               <input
//                 type="text"
//                 name="gen_Title"
//                 value={formDataUpdate.gen_Title}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//               Movie ID:
//               <input
//                 type="text"
//                 name="movieId"
//                 value={formDataUpdate.movieId}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//             Genres ID:
//               <input
//                 type="text"
//                 name="genresId"
//                 value={formDataUpdate.genresId}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <button type="button" onClick={handleUpdateActor}>
//               Update Genres
//             </button>
//           </form>
//         </div>
//       )}
//       {/* <h2>Director List</h2>
//       <pre>{JSON.stringify(directors, null, 2)}</pre> */}
//     </div>
//   );
// };

// export default Genres;








import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchAllMoviegenres,
  addMoviegenresAsync,
  deleteMoviegenresAsync,
  updateMoviegenresAsync,
} from "../Slices/MovieGenres/moviegenresSlice";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
const Genres = () => {
  const dispatch = useDispatch();
  const movieGenres = useSelector((state) => state.moviegenres.moviegenreses);
  const status = useSelector((state) => state.director.status);
  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [formDataAdd, setFormDataAdd] = useState({
    movieTitle: "",
    gen_Title: "",
  });

  const [updateActorId, setUpdateActorId] = useState(0);
  const [formDataUpdate, setFormDataUpdate] = useState({
    id: 0,
    movieTitle: "",
    gen_Title: "",
    movieId: "",
    genresId: "",
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(FetchAllMoviegenres());
    }
  }, [status, dispatch]);

  const handleInputChangeAdd = (e) => {
    setFormDataAdd({ ...formDataAdd, [e.target.name]: e.target.value });
  };

  const handleInputChangeUpdate = (e) => {
    setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
  };

  const handleAddMovieGenres = () => {
    dispatch(addMoviegenresAsync(formDataAdd));
    setAddFormVisible(false);
    setFormDataAdd({
      movieTitle: "",
      gen_Title: "",
    });
  };

  const handleUpdateMovieGenres = () => {
    dispatch(updateMoviegenresAsync(formDataUpdate));
    setUpdateActorId(0);
    setFormDataUpdate({
      id: 0,
      movieTitle: "",
      gen_Title: "",
      movieId: "",
      genresId: "",
    });
  };

  const handleDeleteMovieGenres = (id) => {
    dispatch(deleteMoviegenresAsync(id));
  };

  const handleUpdateButtonClick = (id) => {
    setUpdateActorId(id);
    const selectedMovieGenre = movieGenres.find((genre) => genre.id === id);
    setFormDataUpdate(selectedMovieGenre);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(movieGenres)) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div>
      <h2>Movie Genres</h2>

      <Button onClick={() => setAddFormVisible(!isAddFormVisible)} variant="contained">Add Movie Genres</Button>

      {isAddFormVisible && (
        <div>
          <h3>Add Genres</h3>
          <form>
            <TextField
              label="Movie Title Name"
              name="movieTitle"
              value={formDataAdd.movieTitle}
              onChange={handleInputChangeAdd}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Genres Title Name"
              name="gen_Title"
              value={formDataAdd.gen_Title}
              onChange={handleInputChangeAdd}
              fullWidth
              margin="normal"
            />
            <Button type="button" onClick={handleAddMovieGenres}>
              Add
            </Button>
          </form>
        </div>
      )}
      <h3>Movie Genres List</h3>
      <TableContainer>
        <Table border="1">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Movie Title</TableCell>
              <TableCell>Genres Title</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movieGenres.map((movieGenre) => (
              <TableRow key={movieGenre.id}>
                <TableCell>{movieGenre.id}</TableCell>
                <TableCell>{movieGenre.movieTitle}</TableCell>
                <TableCell>{movieGenre.gen_Title}</TableCell>
                <TableCell>
                  <Button onClick={() => handleUpdateButtonClick(movieGenre.id)} variant="outlined">Update</Button>
                  <Button onClick={() => handleDeleteMovieGenres(movieGenre.id)} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {updateActorId !== 0 && (
        <div>
          <h3>Update Movie Genres</h3>
          <form>
            <TextField
              label="Movie Title Name"
              name="movieTitle"
              value={formDataUpdate.movieTitle}
              onChange={handleInputChangeUpdate}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Genres Title Name"
              name="gen_Title"
              value={formDataUpdate.gen_Title}
              onChange={handleInputChangeUpdate}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Movie ID"
              name="movieId"
              value={formDataUpdate.movieId}
              onChange={handleInputChangeUpdate}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Genres ID"
              name="genresId"
              value={formDataUpdate.genresId}
              onChange={handleInputChangeUpdate}
              fullWidth
              margin="normal"
            />
            <Button type="button" onClick={handleUpdateMovieGenres}>
              Update Genres
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Genres;
