// import logo from './logo.svg';
// import 'bulma/css/bulma.css';
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import CreateBlog from "./components/create/createBlogs";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateBlog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
