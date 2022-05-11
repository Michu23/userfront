import React, { useEffect } from "react";
import Header from "../../components/header/AdminHeader";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(4, "Name should contain 6 characters")
    .required("Name is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  username: yup
    .string()
    .min(4, "Username should contain 6 characters")
    .required("Userame is required"),
});

const AdminEdit = () => {
  const { userEdit, updateUser, isAdmin } = useContext(AuthContext);

  useEffect(() => {
    isAdmin();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <div className="container-fluid p-0 m-0 " style={{ height: "100vh" }}>
        <Header />
        <div
          className="container w-25 bg-light p-5 text-left"
          style={{
            marginTop: "100px",
            borderRadius: "2px",
            boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px",
          }}
        >
          <form onSubmit={handleSubmit(updateUser)}>
            <h4 className="text-center" style={{}}>
              Update User
            </h4>
            <div className="form-group">
              {console.log(userEdit)}
              <label>Full name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                defaultValue={userEdit?.name}
                aria-describedby="emailHelp"
                placeholder="Enter name"
                {...register("name")}
              />
              <label className="text-danger">{errors.name?.message}</label>
            </div>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                defaultValue={userEdit?.username}
                aria-describedby="emailHelp"
                {...register("username")}
                placeholder="Enter username"
              />
              <label className="text-danger">{errors.username?.message}</label>
            </div>

            <div className="d-flex justify-content-center ">
              <button type="submit" className="btn btn-info mt-3">
                Submit
              </button>
            </div>
            <div className="d-flex justify-content-center ">
              <Link to="/admin">
                <button className="btn btn-light mt-3">Back to homepage</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminEdit;
