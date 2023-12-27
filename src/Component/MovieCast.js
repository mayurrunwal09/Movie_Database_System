 
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FetchAllMovieCast, addMovieCastAsync, deleteMovieCastAsync, updateMovieCastAsync } from "../Slices/MovieCast/moviecastSlice";


// const MovieCast = () => {
//   const dispatch = useDispatch();
//   const moviecasts = useSelector((state) => state.moviecast.moviecasts); 
//   const status = useSelector((state) => state.reviewer.status);

//   const [isAddFormVisible, setAddFormVisible] = useState(false);
//   const [formDataAdd, setFormDataAdd] = useState({
//     movieTitleName: '',
//     actorFirstName: '',
//     role: '',

//   });

//   const [updateActorId, setUpdateActorId] = useState(0);
//   const [formDataUpdate, setFormDataUpdate] = useState({
//     id: 0,
//     movieTitleName: '',
//     actorFirstName: '',
//     role: '',
//   });

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(FetchAllMovieCast());
//     }
//   }, [status, dispatch]);
//   const handleInputChangeAdd = (e) => {
//     setFormDataAdd({ ...formDataAdd, [e.target.name]: e.target.value });
//   };

//   const handleInputChangeUpdate = (e) => {
//     setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
//   };

//   const handleAddActor = () => {
//     dispatch(addMovieCastAsync(formDataAdd));
//     setAddFormVisible(false);
//     setFormDataAdd({
//         movieTitleName: '',
//         actorFirstName: '',
//         role: '',
//     });
//   };

//   const handleUpdateActor = () => {
//     dispatch(updateMovieCastAsync(formDataUpdate));
//     setUpdateActorId(0);
//     setFormDataUpdate({
//         id: 0,
//         movieTitleName: '',
//         actorFirstName: '',
//         role: '',
//     });
//   };

//   const handleDeleteActor = (id) => {
//     dispatch(deleteMovieCastAsync(id));
//   };

//   const handleUpdateButtonClick = (id) => {
//     setUpdateActorId(id);
//     const selectedActor = moviecasts.find((actor) => actor.id === id);
//     setFormDataUpdate(selectedActor);
//   };
//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }
//   if (!Array.isArray(moviecasts)) {
//     return <div>Error: Unable to fetch data</div>;
//   }

//   return (
//     <div>
//              <h2>Movies</h2>

// <button onClick={() => setAddFormVisible(!isAddFormVisible)}>Add Actor</button>

// {isAddFormVisible && (
//   <div>
//     <h3>Add Movie Cast</h3>
//     <form>
//       <label>
//         Title Name:
//         <input type="text" name="movieTitleName" value={formDataAdd.movieTitleName} onChange={handleInputChangeAdd} />
//       </label>
//       <label>
//         Actor firstName:
//         <input type="text" name="actorFirstName" value={formDataAdd.actorFirstName} onChange={handleInputChangeAdd} />
//       </label>
//       <label>
//        Role:
//         <input type="text" name="role" value={formDataAdd.role} onChange={handleInputChangeAdd} />
//       </label>
     
//       <button type="button" onClick={handleAddActor}>
//         Add Movie Cast
//       </button>
//     </form>
//   </div>
// )}

//         <h3>Movie Cast List</h3>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>title Name</th>
//             <th>Role</th>
           
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {moviecasts.map((moviecast) => (
//             <tr key={moviecast.id}>
//               <td>{moviecast.id}</td>
//               <td>{moviecast.firstName}</td>
//               <td>{moviecast.lastName}</td>
//               <td>{moviecast.title}</td>
//               <td>{moviecast.role}</td>
//               <td>
//                 <button onClick={() => handleUpdateButtonClick(moviecast.id)}>Update</button>
//                 <button onClick={() => handleDeleteActor(moviecast.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {updateActorId !== 0 && (
//         <div>
//           <h3>Update Movie Cast</h3>
//           <form>
//             <label>
//               Title Name:
//               <input
//                 type="text"
//                 name="movieTitleName"
//                 value={formDataUpdate.movieTitleName}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//             Actor Name:
//               <input
//                 type="text"
//                 name="actorFirstName"
//                 value={formDataUpdate.actorFirstName}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//               Role:
//               <input
//                 type="text"
//                 name="role"
//                 value={formDataUpdate.role}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
           
//             <button type="button" onClick={handleUpdateActor}>
//               Update Movie Cast
//             </button>
//           </form>
//         </div>
//       )}
//       {/* <h2>Movie List</h2>
//       <pre>{JSON.stringify(movies, null, 2)}</pre> */}
//     </div>
//   );
// };

// export default MovieCast;



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  FetchAllMovieCast, 
  addMovieCastAsync, 
  deleteMovieCastAsync, 
  updateMovieCastAsync 
} from "../Slices/MovieCast/moviecastSlice";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
const MovieCast = () => {
  const dispatch = useDispatch();
  const moviecasts = useSelector((state) => state.moviecast.moviecasts); 
  const status = useSelector((state) => state.reviewer.status);

  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [formDataAdd, setFormDataAdd] = useState({
    movieTitleName: '',
    actorFirstName: '',
    role: '',
  });

  const [updateActorId, setUpdateActorId] = useState(0);
  const [formDataUpdate, setFormDataUpdate] = useState({
    id: 0,
    movieTitleName: '',
    actorFirstName: '',
    role: '',
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(FetchAllMovieCast());
    }
  }, [status, dispatch]);

  const handleInputChangeAdd = (e) => {
    setFormDataAdd({ ...formDataAdd, [e.target.name]: e.target.value });
  };

  const handleInputChangeUpdate = (e) => {
    setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
  };

  const handleAddActor = () => {
    dispatch(addMovieCastAsync(formDataAdd));
    setAddFormVisible(false);
    setFormDataAdd({
      movieTitleName: '',
      actorFirstName: '',
      role: '',
    });
  };

  const handleUpdateActor = () => {
    dispatch(updateMovieCastAsync(formDataUpdate));
    setUpdateActorId(0);
    setFormDataUpdate({
      id: 0,
      movieTitleName: '',
      actorFirstName: '',
      role: '',
    });
  };

  const handleDeleteActor = (id) => {
    dispatch(deleteMovieCastAsync(id));
  };

  const handleUpdateButtonClick = (id) => {
    setUpdateActorId(id);
    const selectedActor = moviecasts.find((actor) => actor.id === id);
    setFormDataUpdate(selectedActor);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(moviecasts)) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div>
      <h2>Movies</h2>

      <Button onClick={() => setAddFormVisible(!isAddFormVisible)} variant="contained">Add Movie Cast</Button>

      {isAddFormVisible && (
        <Dialog open={isAddFormVisible} onClose={() => setAddFormVisible(false)}>
          <DialogTitle>Add Movie Cast</DialogTitle>
          <DialogContent>
            <TextField
              label="Title Name"
              name="movieTitleName"
              value={formDataAdd.movieTitleName}
              onChange={handleInputChangeAdd}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Actor Name"
              name="actorFirstName"
              value={formDataAdd.actorFirstName}
              onChange={handleInputChangeAdd}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Role"
              name="role"
              value={formDataAdd.role}
              onChange={handleInputChangeAdd}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAddActor}>Add Movie Cast</Button>
          </DialogActions>
        </Dialog>
      )}

      <h3>Movie Cast List</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Actor First Name</TableCell>
              <TableCell>Actor last Name</TableCell>
              <TableCell>Movie Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {moviecasts.map((moviecast) => (
              <TableRow key={moviecast.id}>
                <TableCell>{moviecast.id}</TableCell>
                <TableCell>{moviecast.firstName}</TableCell>
                <TableCell>{moviecast.lastName}</TableCell>
                <TableCell>{moviecast.title}</TableCell>
                <TableCell>{moviecast.role}</TableCell>
                <TableCell>
                  <Button onClick={() => handleUpdateButtonClick(moviecast.id)}variant="outlined">Update</Button>
                  <Button onClick={() => handleDeleteActor(moviecast.id)}variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {updateActorId !== 0 && (
        <Dialog open={updateActorId !== 0} onClose={() => setUpdateActorId(0)}>
          <DialogTitle>Update Movie Cast</DialogTitle>
          <DialogContent>
            <TextField
              label="Title Name"
              name="movieTitleName"
              value={formDataUpdate.movieTitleName}
              onChange={handleInputChangeUpdate}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Actor Name"
              name="actorFirstName"
              value={formDataUpdate.actorFirstName}
              onChange={handleInputChangeUpdate}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Role"
              name="role"
              value={formDataUpdate.role}
              onChange={handleInputChangeUpdate}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleUpdateActor}>Update Movie Cast</Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default MovieCast;
