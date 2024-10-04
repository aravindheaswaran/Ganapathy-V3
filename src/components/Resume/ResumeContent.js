import React from "react";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      {props.title && <h5 className="resume-title">{props.title}</h5>}
      {props.date && (
        <p>
          <em>{props.date}</em>
        </p>
      )}
      <ul>
        {props.content.map((value, index) => (
          <li key={index}>‣ {value}</li>
        ))}
      </ul>
      {/* Conditionally render image if imgPath is provided */}
      {props.imgPath && (
        <div style={{ textAlign: "center", paddingTop: "10px" }}>
          <img
            src={props.imgPath}
            alt="section-img"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
}

export default ResumeContent;
