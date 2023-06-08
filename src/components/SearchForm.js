import { Alert, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import { fetchData } from "../utilities/axiosHelpers";
import { randomChar } from "../utilities/randomGenerator";

export const SearchForm = ({ addMovieToList }) => {
  const [form, setForm] = useState("");
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    // generate random char
    const char = randomChar();
    // console.log(char);
    // and call fetch api

    getMovieFromApi(char);
  }, []);

  const getMovieFromApi = async (str) => {
    try {
      const resp = await fetchData(str);
      // console.log(resp.data);
      if (resp.data.Response === "True") {
        setMovie(resp.data);
      } else {
        setError(resp.data.Error);
      }
    } catch (error) {
      console.log(error);
      setError("Error occured, please try again later ");
    }
  };

  //1. get the form data when typing
  const handleOnChange = (e) => {
    const { value } = e.target;
    setForm(value);
    // console.log(value);
  };
  // 2. when form is submitted, call the api with the searched data and get the movie details

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    error && setError("");
    movie.imdbID && setMovie({});
    getMovieFromApi(form);

    // const resp = fetchData(form);
    // console.log(resp);
  };

  const handleOnAddToList = (cat) => {
    // console.log(cat);
    addMovieToList({ ...movie, cat });
    setMovie({});
    setForm("");
  };
  const handleOnClear = () => {
    setMovie({});
  };

  return (
    <Form className="py-3" onSubmit={handleOnSubmit}>
      <Row>
        <Col></Col>
        <Col>
          <Form.Control
            value={form}
            placeholder="Movie name ..."
            onChange={handleOnChange}
            required
          />
        </Col>
        <Col>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
      <Row className="py-3 d-flex justify-content-center">
        {movie.imdbID && (
          <MovieCard
            movie={movie}
            func={handleOnAddToList}
            handleOnClear={handleOnClear}
          />
        )}
        {error && <Alert variant="danger">{error}</Alert>}
      </Row>
    </Form>
  );
};
