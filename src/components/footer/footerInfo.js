import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

export const footerInfo = [
  {
    heading: "features",
    listItems: ["Link shortening", "Branded links", "Analytics"],
  },
  {
    heading: "resources",
    listItems: ["Blog", "developers", "support"],
  },
  {
    heading: "Company",
    listItems: ["About", "Our Team", "Careers", "Contact"],
  },
];

export const socialIcons = [
  <FaFacebook size={16} />,
  <FaTwitter size={16} />,
  <FaPinterest size={16} />,
  <FaInstagram size={16}></FaInstagram>,
];
