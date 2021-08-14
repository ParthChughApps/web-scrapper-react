import React from "react";
import "./App.css";
import ParticlesJS from "./Particles";
import Layout from "./Layout";
import { useForm } from "react-hook-form";
import styles from './styles'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <ParticlesJS />
      <Layout>
        <form className="form-web-scrape" onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <span style={styles.heading}>Making web data extraction easy and accessible for everyone</span>
          <input
            className="input-text"
            defaultValue="test"
            placeholder="Enter the webiste which you want to scrape"
            {...register("example", { required: true })}
          />
          {errors.example ? (
            <span style={styles.errorMessage}>This field is required</span>
          ): <span style={styles.errorMessage}><br/></span>} 
          {/* include validation with required or other standard HTML validation rules */}
          <input
            className="input-text"
            style={{ marginTop: 10 }}
            placeholder={"Enter the webiste which you want to scrape"}
            {...register("exampleRequired", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired ? (
            <span style={styles.errorMessage}>This field is required</span>
          ): <span style={styles.errorMessage}><br/></span>} 

          <input type="submit" />
        </form>
      </Layout>
    </div>
  );
}

export default App;
