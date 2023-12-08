import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Magazine from "./components/Magazine";
import Contact from "./components/Contact";
import { Redirect, Route, Switch } from "react-router-dom";
// import Exprience from "./components/Experience";
import Books from "./components/Books";
import BookIn from "./components/BookIn";
// import Awards from "./components/Awards";
import Work from "./components/Work";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Table from "./components/Table";
// import Demoblog from "./components/Demoblog";
import HomeBlog from "./components/Blogdemo/pages/homePage/HomeBlog";
import Posts from "./components/Blogdemo/components/posts/Posts";
import Write from "./components/Blogdemo/pages/write/Write";
import Single from "./components/Blogdemo/pages/single/Single";
import Setting from "./components/Blogdemo/pages/settings/Setting";
import Login from "./components/Blogdemo/pages/login/Login";
import Register from "./components/Blogdemo/pages/register/Register";
import EditPost from "./components/Blogdemo/pages/editPost/EditPost";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/experience" component={Exprience} /> */}
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/bookin" component={BookIn} />
        <Route exact path="/blog" component={Blog} />
        {/* <Route exact path="/demoblog" component={Demoblog} /> */}
        <Route exact path="/blog/homeblog" component={HomeBlog} />
        <Route exact path="/blog/posts" component={Posts} />
        <Route exact path="/blog/write" component={Write} />
        <Route exact path="/blog/post/:postId" component={Single} />
        <Route exact path="/blog/editPost/:postId/" component={EditPost} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* <Route exact path="/awards" component={Awards} /> */}
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/table" component={Table} />
        <Route exact path="/magazine" component={Magazine} />
        <Route exact path="/" component={Portfolio} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
