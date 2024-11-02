import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <Link to="/gallery">gallery</Link>
    </div>
  );
};

export default Home;
