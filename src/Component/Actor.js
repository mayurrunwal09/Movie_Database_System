


// // src/Component/Actor.js
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchActors, addActorAsync, updateActorAsync, deleteActorAsync } from '../Slices/Actor/actorSlice';

// const Actor = () => {
//   const dispatch = useDispatch();
//   const actors = useSelector((state) => state.actor.actors);
//   const status = useSelector((state) => state.actor.status);

//   const [isAddFormVisible, setAddFormVisible] = useState(false);
//   const [formDataAdd, setFormDataAdd] = useState({
//     firstName: '',
//     lastName: '',
//     gender: '',
//     dob: '2023-12-26T07:30:34.465Z',
//   });

//   const [updateActorId, setUpdateActorId] = useState(0);
//   const [formDataUpdate, setFormDataUpdate] = useState({
//     id: 0,
//     firstName: '',
//     lastName: '',
//     gender: '',
//     dob: '2023-12-26T07:30:34.465Z',
//   });

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchActors());
//     }
//   }, [status, dispatch]);

//   const handleInputChangeAdd = (e) => {
//     setFormDataAdd({ ...formDataAdd, [e.target.name]: e.target.value });
//   };

//   const handleInputChangeUpdate = (e) => {
//     setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
//   };

//   const handleAddActor = () => {
//     dispatch(addActorAsync(formDataAdd));
//     setAddFormVisible(false);
//     setFormDataAdd({
//       firstName: '',
//       lastName: '',
//       gender: '',
//       dob: '2023-12-26T07:30:34.465Z',
//     });
//   };

//   const handleUpdateActor = () => {
//     dispatch(updateActorAsync(formDataUpdate));
//     setUpdateActorId(0);
//     setFormDataUpdate({
//       id: 0,
//       firstName: '',
//       lastName: '',
//       gender: '',
//       dob: '2023-12-26T07:30:34.465Z',
//     });
//   };

//   const handleDeleteActor = (id) => {
//     dispatch(deleteActorAsync(id));
//   };

//   const handleUpdateButtonClick = (id) => {
//     setUpdateActorId(id);
//     const selectedActor = actors.find((actor) => actor.id === id);
//     setFormDataUpdate(selectedActor);
//   };

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (!Array.isArray(actors)) {
//     return <div>Error: Unable to fetch data</div>;
//   }

//   return (
//     <div>
//       <h2>Actor Component</h2>

//       <button onClick={() => setAddFormVisible(!isAddFormVisible)}>Add Actor</button>

//       {isAddFormVisible && (
//         <div>
//           <h3>Add Actor</h3>
//           <form>
//             <label>
//               First Name:
//               <input type="text" name="firstName" value={formDataAdd.firstName} onChange={handleInputChangeAdd} />
//             </label>
//             <label>
//               Last Name:
//               <input type="text" name="lastName" value={formDataAdd.lastName} onChange={handleInputChangeAdd} />
//             </label>
//             <label>
//               Gender:
//               <input type="text" name="gender" value={formDataAdd.gender} onChange={handleInputChangeAdd} />
//             </label>
//             <label>
//               Date of Birth:
//               <input type="date" name="dob" value={formDataAdd.dob} onChange={handleInputChangeAdd} />
//             </label>
//             <button type="button" onClick={handleAddActor}>
//               Add Actor
//             </button>
//           </form>
//         </div>
//       )}

//       <h3>Actor List</h3>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Gender</th>
//             <th>Date of Birth</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {actors.map((actor) => (
//             <tr key={actor.id}>
//               <td>{actor.id}</td>
//               <td>{actor.firstName}</td>
//               <td>{actor.lastName}</td>
//               <td>{actor.gender}</td>
//               <td>{actor.dob}</td>
//               <td>
//                 <button onClick={() => handleUpdateButtonClick(actor.id)}>Update</button>
//                 <button onClick={() => handleDeleteActor(actor.id)}>Delete</button>
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
//               First Name:
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formDataUpdate.firstName}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//               Last Name:
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formDataUpdate.lastName}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//               Gender:
//               <input
//                 type="text"
//                 name="gender"
//                 value={formDataUpdate.gender}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//               Date of Birth:
//               <input type="text" name="dob" value={formDataUpdate.dob} onChange={handleInputChangeUpdate} />
//             </label>
//             <button type="button" onClick={handleUpdateActor}>
//               Update Actor
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Actor;



// src/Component/Actor.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchActors,
  addActorAsync,
  updateActorAsync,
  deleteActorAsync,
} from '../Slices/Actor/actorSlice';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const Actor = () => {
  const dispatch = useDispatch();
  const actors = useSelector((state) => state.actor.actors);
  const status = useSelector((state) => state.actor.status);

  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [formDataAdd, setFormDataAdd] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '2023-12-26',
  });

  const [updateActorId, setUpdateActorId] = useState(0);
  const [formDataUpdate, setFormDataUpdate] = useState({
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
    dob: '2023-12-26',
  });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchActors());
    }
  }, [status, dispatch]);

  const handleInputChangeAdd = (e) => {
    setFormDataAdd({ ...formDataAdd, [e.target.name]: e.target.value });
  };

  const handleInputChangeUpdate = (e) => {
    setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
  };

  const handleAddActor = () => {
    dispatch(addActorAsync(formDataAdd));
    setAddFormVisible(false);
    setFormDataAdd({
      firstName: '',
      lastName: '',
      gender: '',
      dob: '2023-12-26',
    });
  };

  const handleUpdateActor = () => {
    dispatch(updateActorAsync(formDataUpdate));
    setUpdateActorId(0);
    setFormDataUpdate({
      id: 0,
      firstName: '',
      lastName: '',
      gender: '',
      dob: '2023-12-26',
    });
  };

  const handleDeleteActor = (id) => {
    dispatch(deleteActorAsync(id));
  };

  const handleUpdateButtonClick = (id) => {
    setUpdateActorId(id);
    const selectedActor = actors.find((actor) => actor.id === id);
    setFormDataUpdate(selectedActor);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(actors)) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div>
      <h2>Actor Component</h2>

      <Button onClick={() => setAddFormVisible(!isAddFormVisible)} variant="contained" color="primary">
        Add Actor
      </Button>

      {isAddFormVisible && (
        <Dialog open={isAddFormVisible} onClose={() => setAddFormVisible(false)}>
          <DialogTitle>Add Actor</DialogTitle>
          <DialogContent>
            <TextField
              label="First Name"
              name="firstName"
              value={formDataAdd.firstName}
              onChange={handleInputChangeAdd}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formDataAdd.lastName}
              onChange={handleInputChangeAdd}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Gender"
              name="gender"
              value={formDataAdd.gender}
              onChange={handleInputChangeAdd}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Date of Birth"
              name="dob"
              type="date"
              value={formDataAdd.dob}
              onChange={handleInputChangeAdd}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAddActor} variant="contained" color="primary">
              Add Actor
            </Button>
          </DialogActions>
        </Dialog>
      )}

      <h3>Actor List</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {actors.map((actor) => (
              <TableRow key={actor.id}>
                <TableCell>{actor.id}</TableCell>
                <TableCell>{actor.firstName}</TableCell>
                <TableCell>{actor.lastName}</TableCell>
                <TableCell>{actor.gender}</TableCell>
                <TableCell>{actor.dob}</TableCell>
                <TableCell>
                  <Button onClick={() => handleUpdateButtonClick(actor.id)} variant="outlined" color="primary">
                    Update
                  </Button>
                  <Button onClick={() => handleDeleteActor(actor.id)} variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {updateActorId !== 0 && (
        <Dialog open={updateActorId !== 0} onClose={() => setUpdateActorId(0)}>
          <DialogTitle>Update Actor</DialogTitle>
          <DialogContent>
            <TextField
              label="First Name"
              name="firstName"
              value={formDataUpdate.firstName}
              onChange={handleInputChangeUpdate}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formDataUpdate.lastName}
              onChange={handleInputChangeUpdate}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Gender"
              name="gender"
              value={formDataUpdate.gender}
              onChange={handleInputChangeUpdate}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Date of Birth"
              name="dob"
              type="date"
              value={formDataUpdate.dob}
              onChange={handleInputChangeUpdate}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleUpdateActor} variant="contained" color="primary">
              Update Actor
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Actor;
