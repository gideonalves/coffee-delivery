import { FooterContainer } from "./styles";

import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";

import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <FooterContainer>
      <a
        href="https://github.com/gideonalves"
        target="_blank"
        rel="noreferrer"
      >
        <VscGithub />
      </a>

      <img src={logo} alt="Coffee Delivery" />

      <a 
        href="https://www.linkedin.com/in/gideon-alves/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
    </FooterContainer>
  );
}
