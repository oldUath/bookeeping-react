import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
require('icon/charts.svg')
require('icon/tag.svg')
require('icon/money.svg')

const NavWrapper = styled.nav`
  >ul{
    display: flex;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    >li{
      width: 33.3333%;
      text-align: center;
      display: flex;
      padding: 6px 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon{
        width: 24px;
        height: 24px;

      }
    }
  }
`
const Nav=()=>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <svg className="icon" >
            <use xlinkHref="#tag"/>
          </svg>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <svg className="icon"  >
            <use xlinkHref="#money"/>
          </svg>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <svg className="icon"  >
            <use xlinkHref="#charts"/>
          </svg>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav