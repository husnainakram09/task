import React from "react";
import { AiFillStar } from "react-icons/ai";
import BackButton from "./BackButton";
import { LinearProgress } from "@material-ui/core";




function Ratings() {
  return (
    <div>
      <div className="rating">
        <div>
          <h2>
            English reviews <span className="totalComments">1276</span>
          </h2>
        </div>
        <div className="rating_box">
          <input type="checkbox" />
          <AiFillStar className="star" />
          <span>5</span>
          <span>Excellent</span>
          <div className="progressBar">
            <LinearProgress variant="determinate" value={99} />
          </div>
        </div>
        <div className="rating_box">
          <input type="checkbox" />
          <AiFillStar className="star" />
          <span>4</span>
          <span>Very Good</span>
          <div className="progressBar">
            <LinearProgress variant="determinate" value={1} />
          </div>
        </div>
        <div className="rating_box">
          <input type="checkbox" />
          <AiFillStar className="star" />
          <span>3</span>
          <span>Good</span>
          <div className="progressBar">
            <LinearProgress variant="determinate" value={0.1} />
          </div>
        </div>
        <div className="rating_box">
          <input type="checkbox" />
          <AiFillStar className="star" />
          <span>2</span>
          <span>Unsatisfied</span>
          <div className="progressBar">
            <LinearProgress variant="determinate" value={0.1} />
          </div>
        </div>
        <div className="rating_box">
          <input type="checkbox" />
          <AiFillStar className="star" />
          <span>1</span>
          <span>Disappointed</span>
          <div className="progressBar">
            <LinearProgress variant="determinate" value={0.1} />
          </div>
          
        </div>

        <div style={{ marginTop: "20px" }}>
          <BackButton />
        </div>
      </div>
    </div>
  );
}

export default Ratings;
