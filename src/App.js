import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.scss";
import Header from "./components/header/header.component";
import AboutPage from "./pages/about-page/about-page.component";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
