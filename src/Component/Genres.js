
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllDirectors,addDirectorAsync,deleteDirectorAsync,updateDirectorAsync } from "../Slices/Genres/genresSlice";

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
const MovieGenres = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres.genreses); 
  const status = useSelector((state) => state.genres.status);
  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [formDataAdd, setFormDataAdd] = useState({
    gen_Title: '',
  });

  const [updateActorId, setUpdateActorId] = useState(0);
  const [formDataUpdate, setFormDataUpdate] = useState({
    id: 0,
    gen_Title: '',
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
      gen_Title: '',
    });
  };

  const handleUpdateActor = () => {
    dispatch(updateDirectorAsync(formDataUpdate));
    setUpdateActorId(0);
    setFormDataUpdate({
      id: 0,
      gen_Title: '',
    });
  };

  const handleDeleteActor = (id) => {
    dispatch(deleteDirectorAsync(id));
  };

  const handleUpdateButtonClick = (id) => {
    setUpdateActorId(id);
    const selectedActor = genres.find((actor) => actor.id === id);
    setFormDataUpdate(selectedActor);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(genres)) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div>
      <h2>Genres</h2>

      <Button onClick={() => setAddFormVisible(!isAddFormVisible)} variant="contained">Add Genres</Button>

      {isAddFormVisible && (
        <div>
          <h3>Add Genres</h3>
          <form>
            <TextField 
              label="Genres Type"
              name="gen_Title" 
              value={formDataAdd.gen_Title} 
              onChange={handleInputChangeAdd} 
            />
            <Button type="button" onClick={handleAddActor}>
              Add Genres
            </Button>
          </form>
        </div>
      )}

      <h3>Genres List</h3>
      <TableContainer>
        <Table border="1">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Genres Type</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {genres.map((genre) => (
              <TableRow key={genre.id}>
                <TableCell>{genre.id}</TableCell>
                <TableCell>{genre.gen_Title}</TableCell>
                <TableCell>
                  <Button onClick={() => handleUpdateButtonClick(genre.id)}variant="outlined">Update</Button>
                  <Button onClick={() => handleDeleteActor(genre.id)}variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {updateActorId !== 0 && (
        <div>
          <h3>Update Genres</h3>
          <form>
            <TextField 
              label="Genres Type"
              name="gen_Title" 
              value={formDataUpdate.gen_Title} 
              onChange={handleInputChangeUpdate} 
            />
            <Button type="button" onClick={handleUpdateActor}>
              Update Genres
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MovieGenres;



