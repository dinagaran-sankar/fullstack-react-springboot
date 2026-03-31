import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinHearts } from "@fortawesome/free-solid-svg-icons";

// const H1 = styled.h1`
// textAlign: "center",
// color: "brown"
// `;

const Footer = () => {
  //inline styling
  //const isActive = Math.random>0.5;
  return (
    <>
      {/* <H1>Demo Project</H1>
   <EasyButton $primary>Submit</EasyButton> */}
      {/* inline styling */}
      {/* <h1 className={`${styles['my-heading']} ${isActive ? styles["primary-color"] : styles["secondary-color"]} ${isActive ? "primary-color": "secondary-color"}`}>Demo Project</h1> */}
      {/* <h1 style={isActive ? {backgroundColor: 'blue',textAlign:'center'} : {backgroundColor: 'yellow',textAlign:'center'} }>demo project</h1> */}
      <footer className="font-serif flex justify-center items-center py-4 text-shadow-taupe-700 [&_a]:!no-underline [&_a:hover]:!underline [&_a]:!text-taupe-600">
        Build With
        <FontAwesomeIcon
          icon={faFaceGrinHearts}
          className="text-red-700 mx-1 animate-pulse"
          aria-hidden="true"
        />
        by
        <a
          href="https://fontawesome.com/icons/motorcycle?f=classic&s=solid"
          className=" visited:text-red-700 px-2 font-semibold"
          target="_blank"
          rel="noreferrer"
        >
          Nelli Groups
        </a>
      </footer>
    </>
  );
};

export default Footer;
