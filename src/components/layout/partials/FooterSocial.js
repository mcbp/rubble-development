import React from 'react';
import classNames from 'classnames';
import { FaInstagram, FaYoutube } from "react-icons/fa";

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li className="social-lg" style={{marginLeft: "12px;", marginRight: "12px"}}>
          <a href="https://www.instagram.com/rubbledev" target="_blank" rel="noopener noreferrer">
            <FaInstagram/>
          </a>
        </li>
        <li className="social-lg" style={{marginLeft: "12px;", marginRight: "12px"}}>
          <a href="https://www.youtube.com/channel/UCnfOz_B12FHZd0WjOK7ZI3g/featured" target="_blank" rel="noopener noreferrer">
            <FaYoutube/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;
