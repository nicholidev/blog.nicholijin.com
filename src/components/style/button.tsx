import styled from "styled-components";
import Link from "@docusaurus/Link";

interface Props {
    type?: "primary" | "outlined";
    shape?: "circle" | "square";
    large?: "large" | "small";
}

const Button = styled(Link)<Props>`
  font-size: 12px;
  padding: 12px 24px;
  cursor: pointer;
  font-weight: bold;
  background-color: ${props => props.type === 'outlined' ? 'transparent' : "var(--button-bg)"};
  color: ${props => props.type === 'outlined' ? 'var(--button-bg)' : "#ffffff"};
  border: 1px solid var(--button-bg);
  border-radius: ${props => props.shape === 'circle' ? '100px' : 0};

  ${props => props.size === "large" && ({
     padding: "12px 40px",
    fontSize: "18px",
  })}
  transition: all 0.5s;
  
  :hover, :active, :focus {
    background-color: ${props => props.type === 'outlined' ? 'transparent' : "var(--button-bg-hover)"};
    color: ${props => props.type === 'outlined' ? 'var(--button-bg-hover)' : "#ffffff"};
    border: 1px solid var(--button-bg-hover);
    transition: all 0.5s;
    text-decoration: none;
  }
`

export default Button
