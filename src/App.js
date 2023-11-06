import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Magazine from "./components/Magazine";
import Contact from "./components/Contact";
import { Redirect, Route, Switch } from "react-router-dom";
// import Exprience from "./components/Experience";
import Books from "./components/Books";
// import Awards from "./components/Awards";
import Work from "./components/Work";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/experience" component={Exprience} /> */}
        <Route exact path="/books" component={Books} />
        <Route exact path="/blog" component={Blog} />
        {/* <Route exact path="/awards" component={Awards} /> */}
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/magazine" component={Magazine} />
        <Route exact path="/" component={Portfolio} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
