import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";



const NavWrapper = styled.nav`
  >ul{
    background: white;
    display: flex;
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    >li{
      width: 33.3333%;
      text-align: center;
      padding: 6px 0;
      >a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &.selected{
          color: red;
          .icon{
            fill:red;
          }
        }
        .icon{
          width: 24px;
          height: 24px;
        }
      }

    }
  }
`
const Nav=()=>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="charts"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav