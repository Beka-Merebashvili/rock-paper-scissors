import styled from "styled-components";
import triangle from "../images/bg-triangle.svg";

const StyledGame = styled.div`
  width: 312px;
  height: 282px;
  background-image: url(${triangle});
  background-size: cover;
  background-position: 0 54px;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  gap: 52px;
  flex-wrap: wrap;
  .bg {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .rules {
    width: 128px;
    height: 40px;
    background-color: #13335e;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2.5px;
    color: #ffffff;
    text-transform: uppercase;
    border: 1px solid #ffffff;
    border-radius: 6px;
    position: absolute;
    bottom: 100px;
    cursor: pointer;
  }
  .rules:hover {
    background-color: #0e294b;
    transition: 0.3s;
  }

  @media screen and (min-width: 980px) {
    width: 476px;
    height: 430px;
    background-position: 6px 82px;
    gap: 80px;
    .bg {
      width: 152px;
      height: 152px;
    }
    img {
      width: 50%;
    }
    .rules {
      bottom: 30px;
      right: 30px;
    }
  }
`;

export default StyledGame;
