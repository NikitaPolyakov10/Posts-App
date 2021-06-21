import "./App.css";
import React from "react";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import { ThemeProvider } from "./context/ThemeContext";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
import PostDetails from "./components/PostDetails/PostDetails";
import Users from "./components/Users/Users";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider>
          <Wrapper>
            <header className="header-links">
              <NavLink className="link" to="/posts/" activeClassName="selected">
                Posts
              </NavLink>
              <NavLink className="link" to="/users" activeClassName="selected">
                Users
              </NavLink>
            </header>
            <Switch>
              <Route path="/posts" component={PostsContainer} exact />
              <Route path="/users" component={Users} />
              <Route path="/posts/:postId/comments" component={PostDetails} />
              <Redirect to="/users" />
            </Switch>
          </Wrapper>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
