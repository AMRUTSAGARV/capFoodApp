// // This is a public page that shows public content. People don’t need to log in to view this page.
// import React, { useEffect } from "react";
// // import UserService from "../services/user.service";
// // import "./Header.css";
// import { useDispatch, useSelector } from "react-redux";
// import { getFoods } from "../../redux/features/foodSlice.js";
// import CardFood from "../CardFood";
// import "./Home.css";
// import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
// // import { Link } from "react-router-dom";

// const Home = () => {
//   // const [content, setContent] = useState("");
//   // useEffect(() => {
//   //   UserService.getUserBoard().then(
//   //     (response) => {
//   //       setContent(response.data);
//   //     },
//   //     (error) => {
//   //       const _content =
//   //         (error.response && error.response.data) ||
//   //         error.message ||
//   //         error.toString();
//   //       setContent(_content);
//   //     }
//   //   );
//   // }, []);
//   // const { foods, loading } = useSelector((state) => ({ ...state.food }));
//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(getFoods());
//   // }, []);

//   // if (loading) {
//   //   return <h2>Loading..</h2>;
//   // }
//   return (
//     <div>
//       <img
//         className="Home-image"
//         src="https://b.zmtcdn.com/data/o2_assets/b90ed7f7c7f06ce7a5b94b967d4ce3eb1621255947.png"
//         alt=""
//       />
//     </div>
//     // <div className="back">
//     //   <div //inline styling
//     //     style={{
//     //       margin: "auto",
//     //       padding: "15px",
//     //       maxWidth: "1000px",
//     //       alignContent: "center",
//     //     }}
//     //   >
//     //     <MDBRow className="mt-5">
//     //       {foods.length === 0 && (
//     //         <MDBTypography className="text-center mb-0" tag="h2">
//     //           No foods Found
//     //         </MDBTypography>
//     //       )}

//     //       <MDBCol>
//     //         <MDBContainer>
//     //           <MDBRow className="row-cols-1 row-cols-md-3 g-2">
//     //             {foods &&
//     //               foods.map((item, index) => (
//     //                 <CardFood key={index} {...item} />
//     //               ))}
//     //           </MDBRow>
//     //         </MDBContainer>
//     //       </MDBCol>
//     //     </MDBRow>
//     //   </div>
//     // </div>
//   );
// };
// export default Home;

import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../redux/features/foodSlice.js";
import CardFood from "../CardFood";
import "./Home.css";

const Home = () => {
  const { foods, loading } = useSelector((state) => ({ ...state.food }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoods());
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
          maxWidth: "1000px",
          alignContent: "center",
        }}
      >
        <MDBRow className="mt-5">
          {foods.length === 0 && (
            <MDBTypography className="text-center mb-0" tag="h2">
              No foods Found
            </MDBTypography>
          )}

          <MDBCol>
            <MDBContainer>
              <MDBRow className="row-cols-1 row-cols-md-3 g-2">
                {foods &&
                  foods.map((item, index) => (
                    <CardFood key={index} {...item} />
                  ))}
              </MDBRow>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};

export default Home;
