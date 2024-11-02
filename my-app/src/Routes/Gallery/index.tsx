import { FC } from "react";
import { Link } from "react-router-dom";

const Gallery: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Gallery;
