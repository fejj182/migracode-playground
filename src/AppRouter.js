import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Index = () => {
  return <h2>Home</h2>;
};

const About = () => {
  return <h2>About</h2>;
};

const Users = ({ names }) => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {names.map(name => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
              <a href="/users">Users</a>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route
          path="/users/"
          render={() => <Users names={["Raresh", "Nate"]} />}
        />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter
