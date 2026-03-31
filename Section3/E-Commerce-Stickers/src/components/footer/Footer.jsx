import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinHearts } from "@fortawesome/free-solid-svg-icons";
import styles from  "./footer.module.css";
import styled from "styled-components";
import EasyButton from "../EasyButton";

// const H1 = styled.h1`
// textAlign: "center",
// color: "brown"
// `;

const Footer = ()=>{
   //inline styling
   //const isActive = Math.random>0.5;
return (
   <>      
   {/* <H1>Demo Project</H1>
   <EasyButton $primary>Submit</EasyButton> */}
    {/* inline styling */}
     {/* <h1 className={`${styles['my-heading']} ${isActive ? styles["primary-color"] : styles["secondary-color"]} ${isActive ? "primary-color": "secondary-color"}`}>Demo Project</h1> */}
    {/* <h1 style={isActive ? {backgroundColor: 'blue',textAlign:'center'} : {backgroundColor: 'yellow',textAlign:'center'} }>demo project</h1> */}
   <footer className={styles.footer}>
     Build With 
      <FontAwesomeIcon icon={faFaceGrinHearts} className={styles["footer-icon"]} aria-hidden='true' />
      by
      <a href="https://fontawesome.com/icons/motorcycle?f=classic&s=solid" target="_blank" rel="noreferrer">
      Font Styling
      </a>
   </footer>
   </>
);
}

export default Footer;