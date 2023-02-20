import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundBlock.module.scss";

console.log(styles);
const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Not found
      </h1>
      <p className={styles.description}>
        This page is not available in our web-site
      </p>
      <Link to="/">
        {" "}
        <button>go back</button>
      </Link>
    </div>
  );
};

export default NotFoundBlock;
