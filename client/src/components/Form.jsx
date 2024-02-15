import React from "react";

export default function Form({ uploadFile }) {
  return (
    <form style={{ marginTop: 3, marginBottom: 3 }}>
      <label
        style={{
          padding: "5px",
          marginBottom: "10px",
        }}
      >
        Upload your video here!
      </label>
      <input
        type="file"
        accept="video/mp4"
        style={{
          border: "1px solid #ccc",
          padding: "5px",
          borderRadius: "5px",
        }}
        onChange={(e) => uploadFile(e)}
      />
    </form>
  );
}
