 
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FetchAllMovieDirection, addMovieDirection,deleteMovieDirectionAsync,updateMovieDirectionAsync } from "../Slices/MovieDirection/movieDirectionSlice";


// const Genres = () => {
//   const dispatch = useDispatch();
//   const directors = useSelector((state) => state.moviedir.moviedirs); 
//   const status = useSelector((state) => state.director.status);
//   const [isAddFormVisible, setAddFormVisible] = useState(false);
//   const [formDataAdd, setFormDataAdd] = useState({
//     directorFirstName: '',
//     title: '',
   

    
//   });

//   const [updateActorId, setUpdateActorId] = useState(0);
//   const [formDataUpdate, setFormDataUpdate] = useState({
//     id: 0,
//     directorFirstName: '',
//     title: '',
//     directorId:'',
//     movieId:'',


 
//   });

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(FetchAllMovieDirection());
//     }
//   }, [status, dispatch]);

//   const handleInputChangeAdd = (e) => {
//     setFormDataAdd({ ...formDataAdd, [e.target.name]: e.target.value });
//   };

//   const handleInputChangeUpdate = (e) => {
//     setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
//   };

//   const handleAddActor = () => {
//     dispatch(addMovieDirection(formDataAdd));
//     setAddFormVisible(false);
//     setFormDataAdd({
     
//         directorFirstName: '',
//         title: '',
//     });
//   };

//   const handleUpdateActor = () => {
//     dispatch(updateMovieDirectionAsync(formDataUpdate));
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
//     dispatch(deleteMovieDirectionAsync(id));
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
// <h2>Movie Direction</h2>

// <button onClick={() => setAddFormVisible(!isAddFormVisible)}>Add Movie Direction</button>

// {isAddFormVisible && (
//   <div>
//     <h3>Add Direction</h3>
//     <form>
//       <label>
//         Director First Name:
//         <input type="text" name="directorFirstName" value={formDataAdd.directorFirstName} onChange={handleInputChangeAdd} />
//       </label>
//       <label>
//         Movie Title:
//         <input type="text" name="title" value={formDataAdd.title} onChange={handleInputChangeAdd} />
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
//             <th>Director FirstName</th>
//             <th>Director LastName</th>
//             <th>title</th>
//             <th>Action</th>
            
//           </tr>
//         </thead>
//         <tbody>
//           {directors.map((director) => (
//             <tr key={director.id}>
//               <td>{director.id}</td>
//               <td>{director.directorFirstName}</td>
//               <td>{director.directorLastName}</td>
//               <td>{director.title}</td>
           
            
            
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
//               Director First Name:
//               <input
//                 type="text"
//                 name="directorFirstName"
//                 value={formDataUpdate.directorFirstName}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//               Movie Title Name:
//               <input
//                 type="text"
//                 name="title"
//                 value={formDataUpdate.title}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//               Director ID:
//               <input
//                 type="text"
//                 name="directorId"
//                 value={formDataUpdate.directorId}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//             Movie ID:
//               <input
//                 type="text"
//                 name="movieId"
//                 value={formDataUpdate.movieId}
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
  FetchAllMovieDirection,
  addMovieDirection,
  deleteMovieDirectionAsync,
  updateMovieDirectionAsync,
} from "../Slices/MovieDirection/movieDirectionSlice";
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
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
const MovieDirection = () => {
  const dispatch = useDispatch();
  const directors = useSelector((state) => state.moviedir.moviedirs);
  const status = useSelector((state) => state.director.status);
  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [formDataAdd, setFormDataAdd] = useState({
    directorFirstName: "",
    title: "",
  });

  const [updateActorId, setUpdateActorId] = useState(0);
  const [formDataUpdate, setFormDataUpdate] = useState({
    id: 0,
    directorFirstName: "",
    title: "",
    directorId: "",
    movieId: "",
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(FetchAllMovieDirection());
    }
  }, [status, dispatch]);

  const handleInputChangeAdd = (e) => {
    setFormDataAdd({ ...formDataAdd, [e.target.name]: e.target.value });
  };

  const handleInputChangeUpdate = (e) => {
    setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
  };

  const handleAddDirector = () => {
    dispatch(addMovieDirection(formDataAdd));
    setAddFormVisible(false);
    setFormDataAdd({
      directorFirstName: "",
      title: "",
    });
  };

  const handleUpdateDirector = () => {
    dispatch(updateMovieDirectionAsync(formDataUpdate));
    setUpdateActorId(0);
    setFormDataUpdate({
      id: 0,
      directorFirstName: "",
      title: "",
      directorId: "",
      movieId: "",
    });
  };

  const handleDeleteDirector = (id) => {
    dispatch(deleteMovieDirectionAsync(id));
  };

  const handleUpdateButtonClick = (id) => {
    setUpdateActorId(id);
    const selectedDirector = directors.find((director) => director.id === id);
    setFormDataUpdate(selectedDirector);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(directors)) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div>
      <h2>Movie Direction</h2>

      <Button onClick={() => setAddFormVisible(!isAddFormVisible)} variant="contained">
        Add Movie Direction
      </Button>

      {isAddFormVisible && (
        <div>
          <h3>Add Direction</h3>
          <form>
            <TextField
              label="Director First Name"
              name="directorFirstName"
              value={formDataAdd.directorFirstName}
              onChange={handleInputChangeAdd}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Movie Title"
              name="title"
              value={formDataAdd.title}
              onChange={handleInputChangeAdd}
              fullWidth
              margin="normal"
            />
            <Button type="button" onClick={handleAddDirector}>
              Add
            </Button>
          </form>
        </div>
      )}
      <h3>Movie Direction List</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Director First Name</TableCell>
              <TableCell>Director Last Name</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {directors.map((director) => (
              <TableRow key={director.id}>
                <TableCell>{director.id}</TableCell>
                <TableCell>{director.directorFirstName}</TableCell>
                <TableCell>{director.directorLastName}</TableCell>
                <TableCell>{director.title}</TableCell>
                <TableCell>
                  <Button onClick={() => handleUpdateButtonClick(director.id)} variant="outlined">
                    Update
                  </Button>
                  <Button onClick={() => handleDeleteDirector(director.id)} variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {updateActorId !== 0 && (
        <div>
          <h3>Update Director</h3>
          <form>
            <TextField
              label="Director First Name"
              name="directorFirstName"
              value={formDataUpdate.directorFirstName}
              onChange={handleInputChangeUpdate}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Movie Title"
              name="title"
              value={formDataUpdate.title}
              onChange={handleInputChangeUpdate}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Director ID"
              name="directorId"
              value={formDataUpdate.directorId}
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
            <Button type="button" onClick={handleUpdateDirector}>
              Update Movie Direction
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MovieDirection;
