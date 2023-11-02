import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Redirect, Route, Switch } from "react-router-dom";
import Exprience from "./components/Experience";
import Book from "./components/Book";
import Awards from "./components/Awards";
import Work from "./components/Work";
import Magzines from "./components/Magzines";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/experience" component={Exprience} />
        <Route exact path="/book" component={Book} />
        <Route exact path="/awards" component={Awards} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/magzines" component={Magzines} />
        <Route exact path="/" component={Portfolio} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
