 
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FetchAllDirectors, addDirectorAsync, deleteDirectorAsync, updateDirectorAsync } from "../Slices/Director/directorSlice";

// const Director = () => {
//   const dispatch = useDispatch();
//   const directors = useSelector((state) => state.director.directors); 
//   const status = useSelector((state) => state.director.status);
//   const [isAddFormVisible, setAddFormVisible] = useState(false);
//   const [formDataAdd, setFormDataAdd] = useState({
//     firstName: '',
//     lastName: '',

//     dob: '2023-12-26T07:30:34.465Z',
//   });

//   const [updateActorId, setUpdateActorId] = useState(0);
//   const [formDataUpdate, setFormDataUpdate] = useState({
//     id: 0,
//     firstName: '',
//     lastName: '',

//     dob: '2023-12-26T07:30:34.465Z',
//   });

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(FetchAllDirectors());
//     }
//   }, [status, dispatch]);

//   const handleInputChangeAdd = (e) => {
//     setFormDataAdd({ ...formDataAdd, [e.target.name]: e.target.value });
//   };

//   const handleInputChangeUpdate = (e) => {
//     setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
//   };

//   const handleAddActor = () => {
//     dispatch(addDirectorAsync(formDataAdd));
//     setAddFormVisible(false);
//     setFormDataAdd({
//       firstName: '',
//       lastName: '',

//       dob: '2023-12-26T07:30:34.465Z',
//     });
//   };

//   const handleUpdateActor = () => {
//     dispatch(updateDirectorAsync(formDataUpdate));
//     setUpdateActorId(0);
//     setFormDataUpdate({
//       id: 0,
//       firstName: '',
//       lastName: '',
 
//       dob: '2023-12-26T07:30:34.465Z',
//     });
//   };

//   const handleDeleteActor = (id) => {
//     dispatch(deleteDirectorAsync(id));
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
// <h2>Director</h2>

// <button onClick={() => setAddFormVisible(!isAddFormVisible)}>Add Director</button>

// {isAddFormVisible && (
//   <div>
//     <h3>Add Actor</h3>
//     <form>
//       <label>
//         First Name:
//         <input type="text" name="firstName" value={formDataAdd.firstName} onChange={handleInputChangeAdd} />
//       </label>
//       <label>
//         Last Name:
//         <input type="text" name="lastName" value={formDataAdd.lastName} onChange={handleInputChangeAdd} />
//       </label>
    
//       <label>
//         Date of Birth:
//         <input type="date" name="dob" value={formDataAdd.dob} onChange={handleInputChangeAdd} />
//       </label>
//       <button type="button" onClick={handleAddActor}>
//         Add Actor
//       </button>
//     </form>
//   </div>
// )}
// <h3>Director List</h3>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Gender</th>
         
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {directors.map((director) => (
//             <tr key={director.id}>
//               <td>{director.id}</td>
//               <td>{director.firstName}</td>
//               <td>{director.lastName}</td>
            
//               <td>{director.dob}</td>
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
//               Date of Birth:
//               <input type="text" name="dob" value={formDataUpdate.dob} onChange={handleInputChangeUpdate} />
//             </label>
//             <button type="button" onClick={handleUpdateActor}>
//               Update Actor
//             </button>
//           </form>
//         </div>
//       )}
//       {/* <h2>Director List</h2>
//       <pre>{JSON.stringify(directors, null, 2)}</pre> */}
//     </div>
//   );
// };

// export default Director;




// Import necessary Material-UI components and icons
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  FetchAllDirectors, 
  addDirectorAsync, 
  deleteDirectorAsync, 
  updateDirectorAsync 
} from "../Slices/Director/directorSlice";
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
const Director = () => {
  const dispatch = useDispatch();
  const directors = useSelector((state) => state.director.directors); 
  const status = useSelector((state) => state.director.status);
  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [formDataAdd, setFormDataAdd] = useState({
    firstName: '',
    lastName: '',
    dob: '2023-12-26T07:30:34.465Z',
  });

  const [updateActorId, setUpdateActorId] = useState(0);
  const [formDataUpdate, setFormDataUpdate] = useState({
    id: 0,
    firstName: '',
    lastName: '',
    dob: '2023-12-26T07:30:34.465Z',
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(FetchAllDirectors());
    }
  }, [status, dispatch]);

  const handleInputChangeAdd = (e) => {
    setFormDataAdd({ ...formDataAdd, [e.target.name]: e.target.value });
  };

  const handleInputChangeUpdate = (e) => {
    setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
  };

  const handleAddActor = () => {
    dispatch(addDirectorAsync(formDataAdd));
    setAddFormVisible(false);
    setFormDataAdd({
      firstName: '',
      lastName: '',
      dob: '2023-12-26T07:30:34.465Z',
    });
  };

  const handleUpdateActor = () => {
    dispatch(updateDirectorAsync(formDataUpdate));
    setUpdateActorId(0);
    setFormDataUpdate({
      id: 0,
      firstName: '',
      lastName: '',
      dob: '2023-12-26T07:30:34.465Z',
    });
  };

  const handleDeleteActor = (id) => {
    dispatch(deleteDirectorAsync(id));
  };

  const handleUpdateButtonClick = (id) => {
    setUpdateActorId(id);
    const selectedActor = directors.find((actor) => actor.id === id);
    setFormDataUpdate(selectedActor);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(directors)) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div>
      <h2>Director</h2>

      <Button onClick={() => setAddFormVisible(!isAddFormVisible)} variant="contained">Add Director</Button>

      {isAddFormVisible && (
        <div>
          <h3>Add Director</h3>
          <form>
            <TextField 
              label="First Name"
              name="firstName" 
              value={formDataAdd.firstName} 
              onChange={handleInputChangeAdd} 
            />
            <TextField 
              label="Last Name" 
              name="lastName" 
              value={formDataAdd.lastName} 
              onChange={handleInputChangeAdd} 
            />
            <TextField 
              label="Date of Birth" 
              name="dob" 
              type="date" 
              value={formDataAdd.dob} 
              onChange={handleInputChangeAdd} 
            />
            <Button type="button" onClick={handleAddActor} >
              Add Director
            </Button>
          </form>
        </div>
      )}

      <h3>Director List</h3>
      <TableContainer>
        <Table border="1">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {directors.map((director) => (
              <TableRow key={director.id}>
                <TableCell>{director.id}</TableCell>
                <TableCell>{director.firstName}</TableCell>
                <TableCell>{director.lastName}</TableCell>
                <TableCell>{director.dob}</TableCell>
                <TableCell>
                  <Button onClick={() => handleUpdateButtonClick(director.id)} variant="outlined">Update</Button>
                  <Button onClick={() => handleDeleteActor(director.id)} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {updateActorId !== 0 && (
        <div>
          <h3>Update Actor</h3>
          <form>
            <TextField 
              label="First Name"
              name="firstName" 
              value={formDataUpdate.firstName} 
              onChange={handleInputChangeUpdate} 
            />
            <TextField 
              label="Last Name" 
              name="lastName" 
              value={formDataUpdate.lastName} 
              onChange={handleInputChangeUpdate} 
            />
            <TextField 
              label="Date of Birth" 
              name="dob" 
              type="date" 
              value={formDataUpdate.dob} 
              onChange={handleInputChangeUpdate} 
            />
            <Button type="button" onClick={handleUpdateActor}>
              Update Actor
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Director;
