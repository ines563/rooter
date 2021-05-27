import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const Description = ({ movieList, match }) => {
        const movie = movieList.find((el) => el.id.toString() === match.params.id);
        console.log(match);
        console.log(movie);
             
        return (
          <Card style={{ width: '60rem', height:'40rem', marginTop:'5rem', marginLeft:'18rem'}} className="d-flex flex-row ">
            <Card.Img variant="top" src={movie.posterUrl} style={{ width: '30rem', height:'40rem' }} />
            <Card.Body style={{ width: '30rem', height:'40rem', marginTop:'10rem'}}>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.description}</Card.Text>
              <Card.Text><a href={movie.trailer}>Trailer</a></Card.Text>

              <Link to="/">
                <Button variant="primary">Go Back</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      };


export default Description