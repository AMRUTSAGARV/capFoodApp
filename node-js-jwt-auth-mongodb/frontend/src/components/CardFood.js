import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardGroup,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./card.css";

const CardFood = ({ image, quantity, Address, title, name }) => {
  return (
    <MDBCardGroup>
      <MDBCard className="h-100 mt-2 d-sm-flex" style={{ maxWidth: "20rem" }}>
        <MDBCardImage
          src={image}
          alt={title}
          position="top"
          style={{ maxWidth: "100%", height: "180px" }}
        />
        <div className="top-left">{name}</div>

        <MDBCardBody>
          <MDBCardTitle className="text-start">{title}</MDBCardTitle>
          <MDBCardText className="text-start">
            <span className="qua">Quantity</span> ~ {quantity}
          </MDBCardText>
          <MDBCardText className="text-start">
            <span className="Add">Address</span> ~ {Address}
          </MDBCardText>
          <MDBBtn>Conform</MDBBtn>
          <MDBBtn className="help">help</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
};

export default CardFood;
