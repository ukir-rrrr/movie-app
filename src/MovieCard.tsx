import { Link } from "react-router";
import "src/App.css";

type Movie = {
  id: string;
  poster_path: string;
  original_title: string;
};

type Props = {
  movie: Movie;
};

const MovieCard = (props: Props) => {
  const { movie } = props;
  return (
    <Link to={`/movies/${movie.id}`} key={movie.id}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.original_title}
        className="movie-poster"
      />
      <div className="movie-title">{movie.original_title}</div>
    </Link>
  );
};

export default MovieCard;
