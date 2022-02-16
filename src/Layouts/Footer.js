import React from 'react';

function Footer(props) {
    return (
        <footer className=" footer">
        <div className="footer-copyright">
          <div className="container">
          © {new Date().getFullYear()} Fortnite
          <a className=" text-lighten-4 right material-icons" href="google.com">3d_rotation</a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;