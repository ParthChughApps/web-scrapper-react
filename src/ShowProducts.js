import React from "react";
import styles from "./styles";

export default function ShowProducts({ products }) {
  return (
    <div className="form-web-scrape">
      {products.map((el) => (
        <span style={styles.colorWhite}>{el.name} </span>
      ))}
    </div>
  );
}
