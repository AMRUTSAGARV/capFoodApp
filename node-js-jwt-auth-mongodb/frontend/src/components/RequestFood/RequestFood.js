import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBValidation,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
//import Chip from '@material-ui/core/chip';
//import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createHello } from "../../redux/features/RequestSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
//import { yellow } from "@mui/material/colors";
import "./Request.css";
import Header from "../Header.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const initialState = {
  title: "",
  quantity: "",
  Address: "",
};
const RequestFood = () => {
  const [helloData, setHelloData] = useState(initialState);
  const { error } = useSelector((state) => ({ ...state.hello }));
  //const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, quantity, Address } = helloData;

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && quantity && Address) {
      const updatedHelloData = { ...helloData };
      dispatch(createHello({ updatedHelloData, navigate, toast }));

      handleClear();
    }
  };
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setHelloData({ ...helloData, [name]: value });
  };

  const handleClear = () => {
    setHelloData({ title: "", quantity: "", Address: "" });
  };
  return (
    <div className="back">
      <Header />
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
        }}
        className="container"
      >
        <MDBCard alignment="center">
          <h5 className="name">Request Food</h5>
          <MDBCardBody>
            <MDBValidation
              onSubmit={handleSubmit}
              className="row g-3"
              noValidate
            >
              <div className="col-md-12">
                <span className="type">Name(Ngo,Old age home,ect)</span>
                <MDBInput
                  placeholder="Enter Name"
                  type="text"
                  value={title}
                  name="title"
                  onChange={onInputChange}
                  className="form-control"
                  required
                  invalid
                  validation="Please provide Name"
                />
              </div>
              <div className="col-md-12">
                <span className="quality">Quantity</span>
                <MDBInput
                  placeholder="Enter quantity"
                  type="text"
                  value={quantity}
                  name="quantity"
                  onChange={onInputChange}
                  className="form-control"
                  required
                  invalid
                  validation="Please provide quantity"
                />
              </div>

              <div className="cal-md-23">
                <span className="quality1">Address</span>
                <MDBInput
                  placeholder="Enter Address"
                  type="text"
                  value={Address}
                  name="Address"
                  onChange={onInputChange}
                  className="form-control"
                  required
                  invalid
                  validation="Please provide Address"
                />
              </div>
              <div className="col-12">
                <MDBBtn style={{ width: "100%" }}>Submit</MDBBtn>
                <MDBBtn
                  style={{ width: "100%" }}
                  className="mt-2"
                  color="danger"
                  onClick={handleClear}
                >
                  Clear
                </MDBBtn>
              </div>
            </MDBValidation>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

export default RequestFood;
