// src/api/api.js
const BASE_URL = "https://localhost:7194";

// Actor module
export const getAllUserType = () => {
  return fetch(`${BASE_URL}/api/Actor/GetAllUserType`)
    .then((response) => response.json())
    .catch((error) => console.error("API Error:", error));
};
export const addActor = (data) => {
  return fetch(`${BASE_URL}/api/Actor/InsertActor`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.error("API Error:", error));
};
export const updateActor = (data) => {
  return fetch(`${BASE_URL}/api/Actor/UpdateActor`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.error("API Error:", error));
};
export const deleteActor = (id) => {
  return fetch(`${BASE_URL}/api/Actor/DeleteActor?Id=${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .catch((error) => console.error("API Error:", error));
};

















// Director Module
export const getAllDirectors = () => {
    return fetch(`${BASE_URL}/api/Director/GetAllDirector`)
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };
  export const addDirector = (data) => {
    return fetch(`${BASE_URL}/api/Director/InsertDirector`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };
  export const updateDirector = (data) => {
    return fetch(`${BASE_URL}/api/Director/UpdateDirector`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };
  export const deleteDirector = (id) => {
    return fetch(`${BASE_URL}/api/Director/DeleteDirector?Id=${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };



















// Reviewer Module
  export const getAllReviewer = () => {
    return fetch(`${BASE_URL}/api/Reviewer/GetAllReviewer`)
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };
  export const addReviewer = (data) => {
    return fetch(`${BASE_URL}/api/Reviewer/InsertReviewer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };
  
  export const updateReviewer = (data) => {
    return fetch(`${BASE_URL}/api/Reviewer/UpdateReviewer`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };
  
  export const deleteReviewer = (id) => {
    return fetch(`${BASE_URL}/api/Reviewer/DeleteReviewer?Id=${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };









// Movie Direction

export const getAllmovieDirection = () => {
  return fetch(`${BASE_URL}/api/MovieDirection/GetAllMovieDirection`)
    .then((response) => response.json())
    .catch((error) => console.error("API Error:", error));
};
export const AddMovieDirection = (data) => {
  return fetch(`${BASE_URL}/api/MovieDirection/InsertMovieDirection`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.error("API Error:", error));
};

export const updateMovieDirection = (data) => {
  return fetch(`${BASE_URL}/api/MovieDirection/UpdateMovieDirection`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.error("API Error:", error));
};

export const deleteMovieDirection = (id) => {
  return fetch(`${BASE_URL}/api/MovieDirection/DeleteMovieDirection?Id=${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .catch((error) => console.error("API Error:", error));
};














// Movie Genres
export const getAllMovieGenres = () => {
  return fetch(`${BASE_URL}/api/MovieGenres/GetAllMovieGenres`)
    .then((response) => response.json())
    .catch((error) => console.error("API Error:", error));
};
export const AddMovieGenres = (data) => {
  return fetch(`${BASE_URL}/api/MovieGenres/InsertMoviegenres`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.error("API Error:", error));
};

export const updateMovieGenres = (data) => {
  return fetch(`${BASE_URL}/api/MovieGenres/UpdateMoviegenres`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.error("API Error:", error));
};

export const deleteMovieGenres = (id) => {
  return fetch(`${BASE_URL}/api/MovieGenres/DeleteMoviegenres?Id=${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .catch((error) => console.error("API Error:", error));
};
















//Movies Module
  export const getAllMovies = () => {
    return fetch(`${BASE_URL}/api/Movie/GetAllMovies`)
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };
  export const AddMovies = (data) => {
    return fetch(`${BASE_URL}/api/Movie/insertMovie`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };
  
  export const UpdateMovies = (data) => {
    return fetch(`${BASE_URL}/api/Movie/Updatemovie`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };
  
  export const Deletemovie = (id) => {
    return fetch(`${BASE_URL}/api/Movie/DeleteMovie?Id=${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };


  








  //Genres module

  export const getAllGenres = () => {
    return fetch(`${BASE_URL}/api/Genres/GetAllGenres`)
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };
  export const AddGenres = (data) => {
    return fetch(`${BASE_URL}/api/Genres/InsertGenres`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };
  
  export const UpdateGenres = (data) => {
    return fetch(`${BASE_URL}/api/Genres/UpdateGenres`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };
  
  export const DeleteGenres = (id) => {
    return fetch(`${BASE_URL}/api/Genres/DeleteGenres?Id=${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };













  
  //Movie Cast module

  export const getAllmovieCast = () => {
    return fetch(`${BASE_URL}/api/MovieCast/GetAllMovieCast`)
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };
  export const AddMovieCast = (data) => {
    return fetch(`${BASE_URL}/api/MovieCast/InsertMovieCast`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };
  
  export const UpdateMovieCast = (data) => {
    return fetch(`${BASE_URL}/api/MovieCast/UpdateMoviecast`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };
  
  export const DeleteMovieCast = (id) => {
    return fetch(`${BASE_URL}/api/MovieCast/DeleteMovieCast?Id=${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };














  // Rating Module
  export const getAllRating = () => {
    return fetch(`${BASE_URL}/api/Rating/GetAllRatings`)
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };
  export const AddRating = (data) => {
    return fetch(`${BASE_URL}/api/Rating/InsertRating`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.error("API Error:", error));
  };














  // Condition
  export const searchMoviesByName = (movieName) => {
    return fetch(`${BASE_URL}/api/Condition/GetMovieDetailsByName?movieName=${movieName}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error("API Error:", error);
        throw error;
      });
  };

  export const searchActorByName = (actorName) => {
    return fetch(`${BASE_URL}/api/Condition/GetActorDetailsByName?actorName=${actorName}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error("API Error:", error);
        throw error;
      });
  };
  export const searchDirectorByName = (directorName) => {
    return fetch(`${BASE_URL}/api/Condition/GetDirectorDetailsByName?actorName=${directorName}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error("API Error:", error);
        throw error;
      });
  };
  export const searchGenresByName = (directorName) => {
    return fetch(`${BASE_URL}/api/Condition/GetMoviesByGenreName?genre=${directorName}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error("API Error:", error);
        throw error;
      });
  };
  export const searchFeedBackByMoviename = (directorName) => {
    return fetch(`${BASE_URL}/api/Condition/GetAllFeedbackByMovieName?movieName=${directorName}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error("API Error:", error);
        throw error;
      });
  };