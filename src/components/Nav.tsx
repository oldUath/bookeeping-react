import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const NavWrapper = styled.nav`
  line-height: 24px;
  >ul{
    display: flex;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    >li{
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }
`
const Nav=()=>{
  return(
    <NavWrapper>
      <ul>
        <li><Link to="/tags">Home</Link></li>
        <li><Link to="/money">About</Link></li>
        <li><Link to="/statistics">User</Link></li>
      </ul>
    </NavWrapper>
  )
}
export default Nav