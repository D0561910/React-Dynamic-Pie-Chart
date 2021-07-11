import React from "react";
import "./Questions.css";

const Questions = ({ slices ,selectScore}) => {
  let questions = Object.keys(slices).map((questionKey, i) => (
    <li key={i}>
      <p>{slices[questionKey].question}</p>
      <div className="Answer">
        <input
          onChange={selectScore(questionKey)}
          type="range"
          min="1"
          max="10"
          value={
            slices[questionKey].transform === "1"
              ? "10"
              : slices[questionKey].transform.replace("0.", "")
          }
          className="rangeInput"
          style={{ background: slices[questionKey].fill }}
        />
        <span
          className="Score"
          style={{ backgroundColor: slices[questionKey].fill }}
        >
          <div
            className="leftArrow"
            style={{
              borderRight: "5px solid " + slices[questionKey].fill,
            }}
          ></div>
          {slices[questionKey].transform === "1"
            ? "10"
            : slices[questionKey].transform.replace("0.", "")}
        </span>
      </div>
    </li>
  ));
  return <>{questions}</>;
};

export default Questions;
