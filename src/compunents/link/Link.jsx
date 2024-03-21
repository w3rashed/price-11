import React from "react";

const Link = ({ route }) => {
  return (
    <li className="hover:bg-green-500 px-4">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
