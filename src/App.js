import React from "react";
import "./App.css";
import ParticlesJS from "./Particles";
import Layout from './Layout'

function App() {
  return (
    <div>
      <ParticlesJS />
      <Layout>
        <span style={{color: 'yellow'}}>asdqd</span>
      </Layout>
    </div>
  );
}

export default App;
