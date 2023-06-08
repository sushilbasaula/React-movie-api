import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const MovieCard = ({ movie = {}, func, showDelete, handleOnClear }) => {
  // console.log(movie);

  const { Poster, Title, Year, imdbRating, imdbID } = movie;
  return (
    <Card style={{ width: "18rem", marginTop: "10px " }} className="movie-card">
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
          <div>Released: {Year}</div>
          <div>Rating: {imdbRating}</div>
        </Card.Text>
        {showDelete ? (
          <div className="d-grid">
            <Button onClick={() => func(imdbID)} variant="danger">
              Delete
            </Button>
          </div>
        ) : (
          <div className="d-flex justify-content-between ">
            <Button onClick={() => func("happy")} variant="danger">
              Happy
            </Button>
            <span className="icon">
              <i
                className="fa-solid fa-circle-xmark text-danger"
                // style={{ zoom: "200%", cursor: "pointer" }}
                onClick={handleOnClear}
              ></i>
            </span>

            <Button onClick={() => func("lazy")} variant="info">
              lazy
            </Button>

            {/* <div className="d-grid">
            <Button variant="danger">Delete</Button>
          </div> */}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
