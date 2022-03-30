import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";

import { getHellos } from "../../redux/features/RequestSlice";

import CardMeal from "../CardMeal";

import "./Home.css";

const HomeRequest = () => {
  const { hellos, loading } = useSelector((state) => ({ ...state.hello }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHellos());
  }, []);

  if (loading) {
    return <h2>Loading..</h2>;
  }
  return (
    <div className="back">
      <div //inline styling
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "1200px",
          alignContent: "space-around",
        }}
      >
        <MDBRow className="mt-5">
          {hellos.length === 0 && (
            <MDBTypography className="text-center mb-0" tag="h2">
              No Request Found
            </MDBTypography>
          )}

          <MDBCol>
            <MDBContainer>
              <MDBRow className="row-cols-1 row-cols-md-3 g-2">
                {hellos &&
                  hellos.map((item, index) => (
                    <CardMeal key={index} {...item} />
                  ))}
              </MDBRow>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};

export default HomeRequest;
