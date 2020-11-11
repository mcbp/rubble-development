import React from 'react';
import classNames from 'classnames';
import { FaInstagram } from "react-icons/fa";

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
        <li className="social-lg">
          <a href="https://www.instagram.com/rubbledev" target="_blank">
            Follow us on Instagram <FaInstagram style={{marginLeft: "12px", fontSize: "18px"}}/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;
