// import React from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardGroup,
// } from "mdb-react-ui-kit";
// //import { Link } from "react-router-dom";

// const CardMeal = ({ quantity, Address, title, name }) => {
//   return (
//     <MDBCardGroup>
//       <MDBCard className="h-100 mt-2 d-sm-flex" style={{ maxWidth: "20rem" }}>
//         <div className="top-left">{name}</div>

//         <MDBCardBody>
//           <MDBCardTitle className="text-start">{title}</MDBCardTitle>
//           <MDBCardText className="text-start">{quantity}</MDBCardText>
//           <MDBCardText className="text-start">{Address}</MDBCardText>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBCardGroup>
//   );
// };

// export default CardMeal;

import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./card.css";
//import { Link } from "react-router-dom";

const CardMeal = ({ quantity, Address, title, name }) => {
  return (
    <MDBCardGroup>
      <MDBCard className="h-100 mt-2 d-sm-flex" style={{ maxWidth: "20rem" }}>
        <div className="top-left">{name}</div>

        <MDBCardBody>
          <MDBCardTitle className="text-start">{title}</MDBCardTitle>
          <MDBCardText className="text-start">{quantity}</MDBCardText>
          <MDBCardText className="text-start">{Address}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
};

export default CardMeal;
