import React from "react";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import pic from "./lighr.jpg";
import "./AdminHeader.css"

const UserHeader = () => {
  let { user, logoutAdmin } = useContext(AuthContext);
  let navigate = useNavigate();
  return (
    <div>
      <nav
        className="d-flex navbar-light navbar py-3"
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <div>
          {/* {user &&   <p>Hello {user.username}</p>} */}
          <h5>Welcome Admin</h5>
        </div>
        <div className="">
          <h2>
            <img src={pic} className="logo"></img>
          </h2>
        </div>
        <div className="d-flex">
          <h5
            className="px-2 cp"
            onClick={() => {
              navigate("/admin");
            }}
          >
            Home
          </h5>

          {user ? (
            <h5 className="px-2 cp" onClick={logoutAdmin}>
              Logout
            </h5>
          ) : (
            <h5
              className="px-2 cp"
              onClick={() => {
                navigate("/admin/login");
              }}
            >
              Login
            </h5>
          )}
        </div>
      </nav>
    </div>
  );
};

export default UserHeader;
