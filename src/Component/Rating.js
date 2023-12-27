

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllRatings, addRatings } from "../Slices/Rating/ratingSlice";
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
  Typography,
  Rating as MuiRating,
} from "@mui/material";

const Reviewer = () => {
  const dispatch = useDispatch();
  const ratings = useSelector((state) => state.rating.ratings);
  const status = useSelector((state) => state.reviewer.status);

  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [formDataAdd, setFormDataAdd] = useState({
    title: "",
    name: "",
    reviewerStar: 0, // Initial value for stars
    no_Of_Ratings: "0",
    feedBack: "",
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(FetchAllRatings());
    }
  }, [status, dispatch]);

  const handleInputChangeAdd = (e) => {
    setFormDataAdd({ ...formDataAdd, [e.target.name]: e.target.value });
  };

  const handleAddRating = () => {
    dispatch(addRatings(formDataAdd));
    setAddFormVisible(false);
    setFormDataAdd({
      title: "",
      name: "",
      reviewerStar: 0,
      no_Of_Ratings: "0",
      feedBack: "",
    });
  };

  return (
    <div>
      <h2>Ratings</h2>

      <Button onClick={() => setAddFormVisible(!isAddFormVisible)}>
        Insert Rating
      </Button>

      {isAddFormVisible && (
        <div>
          <h3>Insert Rating</h3>
          <form>
            <TextField
              label="Title Name"
              name="title"
              value={formDataAdd.title}
              onChange={handleInputChangeAdd}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Reviewer Name"
              name="name"
              value={formDataAdd.name}
              onChange={handleInputChangeAdd}
              fullWidth
              margin="normal"
            />
            <Typography component="legend">Ratings</Typography>
            <MuiRating
              name="reviewerStar"
              value={formDataAdd.reviewerStar}
              onChange={(event, newValue) => {
                setFormDataAdd({ ...formDataAdd, reviewerStar: newValue });
              }}
            />
            <TextField
              label="Feedback"
              name="feedBack"
              value={formDataAdd.feedBack}
              onChange={handleInputChangeAdd}
              fullWidth
              margin="normal"
            />
            <Button type="button" onClick={handleAddRating}>
              Insert Rating
            </Button>
          </form>
        </div>
      )}

<h3>Ratings List</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Reviewer Star</TableCell>
              <TableCell>Movie Name</TableCell>
              <TableCell>Reviewer Name</TableCell>
              <TableCell>Feedback</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ratings.map((rating) => (
              <TableRow key={rating.id}>
                <TableCell>{rating.id}</TableCell>
                <TableCell>
                  <MuiRating
                    name={`reviewerStar-${rating.id}`}
                    value={rating.reviewerStar}
                    readOnly
                  />
                </TableCell>
                <TableCell>{rating.movie_Title}</TableCell>
                <TableCell>{rating.reviewer_Name}</TableCell>
                <TableCell>{rating.feedBack}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Reviewer;
