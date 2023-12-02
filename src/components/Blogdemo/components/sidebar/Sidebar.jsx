import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/blog">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/blog">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/blog">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/blog">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/blog">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/blog">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://www.instagram.com/?hl=en" className="">
            <i className="sidebarIcon fa fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/?hl=en" className="">
            <i class="sidebarIcon fa fa-instagram"></i>
          </a>
          <a href="https://www.instagram.com/?hl=en" className="">
            <i className="sidebarIcon fa fa-pinterest-square"></i>
          </a>
          <a href="https://www.instagram.com/?hl=en" className="">
            <i className="sidebarIcon fa fa-twitter-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
