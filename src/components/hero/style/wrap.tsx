import styled from "styled-components";

const HeroWrap = styled.section`
  height: 550px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  
  h1 {
    font-size: 52px;
  }
  
  img {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
`

export default HeroWrap
