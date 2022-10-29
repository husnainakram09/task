import React from "react";
import pp from "./../img/pp.jpg";
import "./style.css";

function SingleComment() {
  return (
    <div>
      <div className="sComment">
      <div>
        <img src={pp} className="pp" width="40px" />
        <div className="userName">
          <h4>Summer</h4>
          <p className="Comment_date">Oct 21, 2022</p>
        </div>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, possimus incidunt vero eum quis provident tempora voluptas qui, quae saepe eius neque, alias ex aspernatur modi sunt soluta praesentium ad?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure similique, eveniet veritatis aperiam, deleniti, optio possimus ab reprehenderit alias error quod cum. Maiores, mollitia. Sapiente voluptatum nulla eaque eveniet deserunt.
        </p>
      </div>
      <div>
        <h4 className="more">More (4)</h4>
      </div>
      </div>
    </div>
  );
}

export default SingleComment;
