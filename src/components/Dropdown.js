import { useState } from "react";
import {
    BiBookmark,
    BiChevronDown,
    BiChevronUp,
    BiCog,
    BiLockAlt,
    BiLogOut,
    BiNotification,
    BiPurchaseTagAlt,
    BiUser,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import avatar from "../Avatar.jpg";

export default function Dropdown() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const upArrowBtn = openDropdown ? <BiChevronUp /> : <BiChevronDown />;

  return (
    <div className="Container">
      <ul>
        <li className="Nav-items Hover-li">
          <Link to="/" className="Items">
            <i>
              <BiBookmark />
            </i>
          </Link>
        </li>
        <li className="Nav-items Hover-li">
          <Link to="/" className="Items">
            <i>
              <BiNotification />
            </i>
          </Link>
        </li>
        <li>
          <img onClick={toggleDropdown} src={avatar} alt="avatar"></img>
          <span className="Down-arrow">
            <i onClick={toggleDropdown}>
              {upArrowBtn}
            </i>
          </span>
          <ul className={`Sub-items ${openDropdown ? "Open" : ""} `}>
            <li>
              <Link to="/">
                <i>
                  <BiUser />
                </i>
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i>
                  <BiPurchaseTagAlt />
                </i>
                <span>Tags</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i>
                  <BiLockAlt />
                </i>
                <span>Privacy</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i>
                  <BiCog />
                </i>
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i>
                  <BiLogOut />
                </i>
                <span>Log Out</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
