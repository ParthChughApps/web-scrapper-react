import React, { useState } from "react";
import "./App.css";
import ParticlesJS from "./Particles";
import Layout from "./Layout";
import { useForm } from "react-hook-form";
import styles from "./styles";
import { getProducts } from "./helper";
import ShowProducts from "./ShowProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (props) => {
    setLoader(true);
    const data = await getProducts(props);
    console.log("data313131", data);
    setProducts(data?.products || []);
    setLoader(false);
  };

  const showForm = () => {
    return (
      <form className="form-web-scrape" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <span style={styles.heading}>
          Making web data extraction easy and accessible for everyone
        </span>
        <div className="input-field-container">
          <label style={styles.label}>URL</label>
          <input
            className="input-text"
            defaultValue="https://whsmith-headless-pwa-sit.mobify-storefront.com/books/celebrity-and-artistic-culture-biographies/bks00002/"
            placeholder="Enter the webiste which you want to scrape"
            {...register("url", {
              required: true,
              pattern: {
                value:
                  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
              },
            })}
          />
          {errors.url ? (
            <span style={styles.errorMessage}>Please enter Valid URL</span>
          ) : (
            <span style={styles.errorMessage}>
              <br />
            </span>
          )}
        </div>
        <div className="input-field-container">
          <label style={styles.label}>Main Class</label>
          <input
            className="input-text"
            style={{ marginTop: 10 }}
            defaultValue="t-product-list__container-items"
            placeholder={"Main class"}
            {...register("main_class", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.main_class ? (
            <span style={styles.errorMessage}>This field is required</span>
          ) : (
            <span style={styles.errorMessage}>
              <br />
            </span>
          )}
        </div>
        <div className="input-field-container">
          <label style={styles.label}>Sub Class</label>
          <input
            className="input-text"
            defaultValue="product-tile-info"
            style={{ marginTop: 10 }}
            placeholder={"Sub class"}
            {...register("sub_class", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.sub_class ? (
            <span style={styles.errorMessage}>This field is required</span>
          ) : (
            <span style={styles.errorMessage}>
              <br />
            </span>
          )}
        </div>

        <div className="input-field-container">
          <label style={styles.label}>Product Name class</label>
          <input
            className="input-text"
            style={{ marginTop: 10 }}
            defaultValue="pw-link name-link m-cmp_loaded"
            placeholder={"Product Name class"}
            {...register("product_name_class", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.product_name_class ? (
            <span style={styles.errorMessage}>This field is required</span>
          ) : (
            <span style={styles.errorMessage}>
              <br />
            </span>
          )}
        </div>
        {loader ? (
          <div class="loader"></div>
        ) : (
          <button
            className="btn-blue"
            type="submit"
            value="Log In And Checkout"
            name="dwfrm_login_login"
            aria-label="checkout"
          >
            Submit
          </button>
        )}
      </form>
    );
  };
  return (
    <div>
      <ParticlesJS />
      <Layout>
        {products.length > 0 ? (
          <ShowProducts 
            products={products} 
            setProducts={setProducts}
          />
        ) : (
          showForm()
        )}
      </Layout>
    </div>
  );
}

export default App;
