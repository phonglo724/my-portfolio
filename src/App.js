import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Post from "./components/Post";
import Resume from "./components/Resume";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Project} path="/project" />
        <Route component={SinglePost} path="/blog/:slug" />
        <Route component={Post} path="/blog" />
        <Route component={Resume} path="/resume" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
