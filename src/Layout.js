import React from "react";

export default function Layout(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {props.children}
    </div>
  );
}
