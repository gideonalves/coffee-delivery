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
        {/* <VscGithub /> */}
        <VscGithub size={24} color="#000" />
      </a>

      <img src={logo} alt="Coffee Delivery" />

      <a 
        href="https://www.linkedin.com/in/gideon-alves/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {/* <BsLinkedin /> */}
        <BsLinkedin size={24} color="#0077b5" />
      </a>
    </FooterContainer>
  );
}
