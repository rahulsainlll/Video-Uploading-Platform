import React from "react";

export default function Container({children}) {
  return (
    <div style={{ width: "700px", marginTop: 50, margin: "0 auto" }}>
      {children}
    </div>
  );
}
