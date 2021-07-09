import styled from "styled-components";

const CategorySection = styled.section`
  ul{
    background-color: #ccc;
    display: flex;
    >li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::before{
        content: '';
        display: flex;
        height: 3px;
        background-color: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`

export {CategorySection}