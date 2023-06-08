import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import { MovieCard } from "./MovieCard";
import { BtnGroups } from "./BtnGroups";

export const MovieList = ({ movies, handleOnDelete }) => {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    setDisplay(movies);
  }, [movies]);

  const handleOnFilter = (str) => {
    console.log(str);
    /* if (str === "all") {
      setDisplay(movies);
      return;
    }
    // const filteredArg= movies.filter(item => item.cat ===str )
    setDisplay(movies.filter((item) => item.cat === str)); */

    str === "all"
      ? setDisplay(movies)
      : setDisplay(movies.filter((item) => item.cat === str));
  };

  return (
    <div className="mt-5 bg-dark p-3 rounded">
      <Row className="mt-5 ">
        <Col>
          <BtnGroups handleOnFilter={handleOnFilter} />
          <div className="py-2">{display.length} Movies found</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3 d-flex justify-content-around flex-wrap">
          {display.map((item) => (
            <MovieCard
              key={item.imdbId}
              movie={item}
              showDelete={true}
              func={handleOnDelete}
            />
          ))}
          {/* <MovieCard /> */}
        </Col>
      </Row>
    </div>
  );
};
