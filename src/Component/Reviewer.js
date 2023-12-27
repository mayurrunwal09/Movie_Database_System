
 
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { FetchAllReviewer, addReviewerAsync, deleteReviewerAsync, updateReviewerAsync } from "../Slices/Reviewer/reviewerSlice";


// const Reviewer = () => {
//   const dispatch = useDispatch();
//   const reviewers = useSelector((state) => state.reviewer.reviewers); 
//   const status = useSelector((state) => state.reviewer.status);

//   const [isAddFormVisible, setAddFormVisible] = useState(false);
//   const [formDataAdd, setFormDataAdd] = useState({
//     name: '',
//     dob: '2023-12-26T07:30:34.465Z',
//     address: '',
//     country: '',
//     state: '',
//     city: '',
//     pinCode: '',
//     mobileno: '',
//   });

//   const [updateActorId, setUpdateActorId] = useState(0);
//   const [formDataUpdate, setFormDataUpdate] = useState({
//     id: 0,
//     name: '',
//     dob: '2023-12-26T07:30:34.465Z',
//     address: '',
//     country: '',
//     state: '',
//     city: '',
//     pinCode: '',
//     mobileno: '',
//   });
//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(FetchAllReviewer());
//     }
//   }, [status, dispatch]);

//   const handleInputChangeAdd = (e) => {
//     setFormDataAdd({ ...formDataAdd, [e.target.name]: e.target.value });
//   };

//   const handleInputChangeUpdate = (e) => {
//     setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
//   };

//   const handleAddActor = () => {
//     dispatch(addReviewerAsync(formDataAdd));
//     setAddFormVisible(false);
//     setFormDataAdd({
//         name: '',
//         dob: '2023-12-26T07:30:34.465Z',
//         address: '',
//         country: '',
//         state: '',
//         city: '',
//         pinCode: '',
//         mobileno: '',
//     });
//   };

//   const handleUpdateActor = () => {
//     dispatch(updateReviewerAsync(formDataUpdate));
//     setUpdateActorId(0);
//     setFormDataUpdate({
//         id: 0,
//         name: '',
//         dob: '2023-12-26T07:30:34.465Z',
//         address: '',
//         country: '',
//         state: '',
//         city: '',
//         pinCode: '',
//         mobileno: '',
//     });
//   };

//   const handleDeleteActor = (id) => {
//     dispatch(deleteReviewerAsync(id));
//   };

//   const handleUpdateButtonClick = (id) => {
//     setUpdateActorId(id);
//     const selectedActor = reviewers.find((actor) => actor.id === id);
//     setFormDataUpdate(selectedActor);
//   };
//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (!Array.isArray(reviewers)) {
//     return <div>Error: Unable to fetch data</div>;
//   }

//   return (
//     <div>
//          <h2>Reviewer Component</h2>

// <button onClick={() => setAddFormVisible(!isAddFormVisible)}>Add Reviewer</button>

// {isAddFormVisible && (
//   <div>
//     <h3>Add Actor</h3>
//     <form>
//       <label>
//          Name:
//         <input type="text" name="name" value={formDataAdd.name} onChange={handleInputChangeAdd} />
//       </label>
//       <label>
//         Date of Birth:
//         <input type="date" name="dob" value={formDataAdd.dob} onChange={handleInputChangeAdd} />
//       </label>
//       <label>
//         Address
//         <input type="text" name="address" value={formDataAdd.address} onChange={handleInputChangeAdd} />
//       </label>
//       <label>
//         Country
//         <input type="text" name="country" value={formDataAdd.country} onChange={handleInputChangeAdd} />
//       </label>
//       <label>
//         State
//         <input type="text" name="state" value={formDataAdd.state} onChange={handleInputChangeAdd} />
//       </label>
//       <label>
//         City
//         <input type="text" name="city" value={formDataAdd.city} onChange={handleInputChangeAdd} />
//       </label>
//       <label>
//         Pincode 
//         <input type="text" name="pinCode" value={formDataAdd.pinCode} onChange={handleInputChangeAdd} />
//       </label>
//       <label>
//         mobileno
//         <input type="tel" name="mobileno" value={formDataAdd.mobileno} onChange={handleInputChangeAdd} />
//       </label>
      
//       <button type="button" onClick={handleAddActor}>
//         Add Reviewer
//       </button>
//     </form>
//   </div>
// )}
// <h3>Actor List</h3>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th> Name</th>
//             <th>Date of Birth</th>
//             <th>Address</th>
//             <th>Country</th>
//             <th>State</th>
//             <th> City</th>
//             <th> PinCode</th>
//             <th>Mobileno</th>
            
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reviewers.map((reviewer) => (
//             <tr key={reviewer.id}>
//               <td>{reviewer.id}</td>
//               <td>{reviewer.name}</td>
//               <td>{reviewer.dob}</td>
//               <td>{reviewer.address}</td>
//               <td>{reviewer.country}</td>
//               <td>{reviewer.state}</td>
//               <td>{reviewer.city}</td>
//               <td>{reviewer.pinCode}</td>
//               <td>{reviewer.mobileno}</td>
//               <td>
//                 <button onClick={() => handleUpdateButtonClick(reviewer.id)}>Update</button>
//                 <button onClick={() => handleDeleteActor(reviewer.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {updateActorId !== 0 && (
//         <div>
//           <h3>Update Director</h3>
//           <form>
//             <label>
//              Name:
//               <input
//                 type="text"
//                 name="name"
//                 value={formDataUpdate.name}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//               Date of Birth:
//               <input type="text" name="dob" value={formDataUpdate.dob} onChange={handleInputChangeUpdate} />
//             </label>
//             <label>
//               Adddress :
//               <input
//                 type="text"
//                 name="address"
//                 value={formDataUpdate.address}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//               Country :
//               <input
//                 type="text"
//                 name="country"
//                 value={formDataUpdate.country}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//               State :
//               <input
//                 type="text"
//                 name="state"
//                 value={formDataUpdate.state}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//               City :
//               <input
//                 type="text"
//                 name="city"
//                 value={formDataUpdate.city}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//              pincode :
//               <input
//                 type="text"
//                 name="pinCode"
//                 value={formDataUpdate.pinCode}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
//             <label>
//             Mobile no :
//               <input
//                 type="tel"
//                 name="mobileno"
//                 value={formDataUpdate.mobileno}
//                 onChange={handleInputChangeUpdate}
//               />
//             </label>
          
//             <button type="button" onClick={handleUpdateActor}>
//               Update Director
//             </button>
//           </form>
//         </div>
//       )}
//       {/* <h2>Director List</h2>
//       <pre>{JSON.stringify(reviewers, null, 2)}</pre> */}

//     </div>
//   );
// };

// export default Reviewer;







import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  FetchAllReviewer, 
  addReviewerAsync, 
  deleteReviewerAsync, 
  updateReviewerAsync 
} from "../Slices/Reviewer/reviewerSlice";
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
const Reviewer = () => {
  const dispatch = useDispatch();
  const reviewers = useSelector((state) => state.reviewer.reviewers); 
  const status = useSelector((state) => state.reviewer.status);

  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [formDataAdd, setFormDataAdd] = useState({
    name: '',
    dob: '2023-12-26T07:30:34.465Z',
    address: '',
    country: '',
    state: '',
    city: '',
    pinCode: '',
    mobileno: '',
  });

  const [updateActorId, setUpdateActorId] = useState(0);
  const [formDataUpdate, setFormDataUpdate] = useState({
    id: 0,
    name: '',
    dob: '2023-12-26T07:30:34.465Z',
    address: '',
    country: '',
    state: '',
    city: '',
    pinCode: '',
    mobileno: '',
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(FetchAllReviewer());
    }
  }, [status, dispatch]);

  const handleInputChangeAdd = (e) => {
    setFormDataAdd({ ...formDataAdd, [e.target.name]: e.target.value });
  };

  const handleInputChangeUpdate = (e) => {
    setFormDataUpdate({ ...formDataUpdate, [e.target.name]: e.target.value });
  };

  const handleAddActor = () => {
    dispatch(addReviewerAsync(formDataAdd));
    setAddFormVisible(false);
    setFormDataAdd({
      name: '',
      dob: '2023-12-26T07:30:34.465Z',
      address: '',
      country: '',
      state: '',
      city: '',
      pinCode: '',
      mobileno: '',
    });
  };

  const handleUpdateActor = () => {
    dispatch(updateReviewerAsync(formDataUpdate));
    setUpdateActorId(0);
    setFormDataUpdate({
      id: 0,
      name: '',
      dob: '2023-12-26T07:30:34.465Z',
      address: '',
      country: '',
      state: '',
      city: '',
      pinCode: '',
      mobileno: '',
    });
  };

  const handleDeleteActor = (id) => {
    dispatch(deleteReviewerAsync(id));
  };

  const handleUpdateButtonClick = (id) => {
    setUpdateActorId(id);
    const selectedActor = reviewers.find((actor) => actor.id === id);
    setFormDataUpdate(selectedActor);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(reviewers)) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div>
      <h2>Reviewer Component</h2>

      <Button onClick={() => setAddFormVisible(!isAddFormVisible)} variant="contained">Add Reviewer</Button>

      {isAddFormVisible && (
        <div>
          <h3>Add Reviewer</h3>
          <form>
            <TextField 
              label="Name"
              name="name" 
              value={formDataAdd.name} 
              onChange={handleInputChangeAdd} 
            />
            <TextField 
              label="Date of Birth" 
              name="dob" 
              type="date" 
              value={formDataAdd.dob} 
              onChange={handleInputChangeAdd} 
            />
            <TextField 
              label="Address" 
              name="address" 
              value={formDataAdd.address} 
              onChange={handleInputChangeAdd} 
            />
            <TextField 
              label="Country" 
              name="country" 
              value={formDataAdd.country} 
              onChange={handleInputChangeAdd} 
            />
            <TextField 
              label="State" 
              name="state" 
              value={formDataAdd.state} 
              onChange={handleInputChangeAdd} 
            />
            <TextField 
              label="City" 
              name="city" 
              value={formDataAdd.city} 
              onChange={handleInputChangeAdd} 
            />
            <TextField 
              label="PinCode" 
              name="pinCode" 
              value={formDataAdd.pinCode} 
              onChange={handleInputChangeAdd} 
            />
            <TextField 
              label="Mobile No" 
              name="mobileno" 
              type="tel" 
              value={formDataAdd.mobileno} 
              onChange={handleInputChangeAdd} 
            />
            <Button type="button" onClick={handleAddActor}>
              Add Reviewer
            </Button>
          </form>
        </div>
      )}

      <h3>Reviewer List</h3>
      <TableContainer>
        <Table border="1">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>State</TableCell>
              <TableCell>City</TableCell>
              <TableCell>PinCode</TableCell>
              <TableCell>Mobile No</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviewers.map((reviewer) => (
              <TableRow key={reviewer.id}>
                <TableCell>{reviewer.id}</TableCell>
                <TableCell>{reviewer.name}</TableCell>
                <TableCell>{reviewer.dob}</TableCell>
                <TableCell>{reviewer.address}</TableCell>
                <TableCell>{reviewer.country}</TableCell>
                <TableCell>{reviewer.state}</TableCell>
                <TableCell>{reviewer.city}</TableCell>
                <TableCell>{reviewer.pinCode}</TableCell>
                <TableCell>{reviewer.mobileno}</TableCell>
                <TableCell>
                  <Button onClick={() => handleUpdateButtonClick(reviewer.id)} variant="outlined">Update</Button>
                  <Button onClick={() => handleDeleteActor(reviewer.id)} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {updateActorId !== 0 && (
        <div>
          <h3>Update Reviewer</h3>
          <form>
            <TextField 
              label="Name" 
              name="name" 
              value={formDataUpdate.name} 
              onChange={handleInputChangeUpdate} 
            />
            <TextField 
              label="Date of Birth" 
              name="dob" 
              type="date" 
              value={formDataUpdate.dob} 
              onChange={handleInputChangeUpdate} 
            />
            <TextField 
              label="Address" 
              name="address" 
              value={formDataUpdate.address} 
              onChange={handleInputChangeUpdate} 
            />
            <TextField 
              label="Country" 
              name="country" 
              value={formDataUpdate.country} 
              onChange={handleInputChangeUpdate} 
            />
            <TextField 
              label="State" 
              name="state" 
              value={formDataUpdate.state} 
              onChange={handleInputChangeUpdate} 
            />
            <TextField 
              label="City" 
              name="city" 
              value={formDataUpdate.city} 
              onChange={handleInputChangeUpdate} 
            />
            <TextField 
              label="PinCode" 
              name="pinCode" 
              value={formDataUpdate.pinCode} 
              onChange={handleInputChangeUpdate} 
            />
            <TextField 
              label="Mobile No" 
              name="mobileno" 
              type="tel" 
              value={formDataUpdate.mobileno} 
              onChange={handleInputChangeUpdate} 
            />
            <Button type="button" onClick={handleUpdateActor}>
              Update Reviewer
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Reviewer;
