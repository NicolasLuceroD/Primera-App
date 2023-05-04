import React from "react";

const Footer = (props) => {
  const correo = "nicolucero20@outlook.es";
  console.log(props);
  return (
    <div>
      <p className="prf">
        MI CORREO:<br></br>
      </p>
      <p className="correo">{correo}</p>
      <footer className="pie-pagina">
        <div className="img-container">
          <a href="https://web.facebook.com/" target="blank">
            <img src="facebookLogo.png" alt="" width={40} height={40} />
          </a>
          <a href="https://www.instagram.com/" target="blank">
            <img src="instagramLogo.png" alt="" width={40} height={40} />
          </a>
          <a href="https://github.com/" target="blank">
            <img src="logoGithub.png" alt="" width={40} height={40} />
          </a>
          <a href="https://www.linkedin.com/feed/" target="blank">
            <img src="logoLinkedin.png" alt="" width={40} height={40} />
          </a>
          <a href="https://outlook.live.com/mail/0/" target="blank">
            <img src="logoCorreo.png" alt="" width={40} height={40} />
          </a>
          <h10>{props.saludar()}</h10>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
