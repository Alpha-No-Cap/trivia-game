// import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import { Button } from "reactstrap";

// class Header extends Component {
//   render() {
//     const {
//       logged_in,
//       current_user,
//       new_user_route,
//       sign_in_route,
//       sign_out_route
//     } = this.props

//     return (
//       <>
//         { !logged_in &&
//         <a href="/users/sign_in">
//           <Button >
//               Sign In
//           </Button>
//         </a>
//         }
//         { logged_in &&
//         <a href="/users/sign_out">
//           <Button >
//               Sign Out
//           </Button>
//         </a>
//         }
//         { !logged_in &&
//         <a href="/users/sign_up">
//           <Button >
//               Sign Up
//           </Button>
//         </a>
//         }
//       </>
//     )
//   }
// }

//     export default Header;