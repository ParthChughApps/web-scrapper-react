import React from "react";
import styles from "./styles";

export default function ShowProducts({ products, setProducts }) {
  return (
    <div>
      <a style={styles.back} onClick={() => {setProducts([])}}>Go back</a>
      <div className="form-web-scrape">
        {products.map((el) => (
          <span style={styles.colorWhite}>{el.name} </span>
        ))}
      </div>
    </div>
    
  );
}
