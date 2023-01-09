import React from "react";
import "./home.css";
import image from "./1.png";
const Card = (props) => {
  return (
    <>
      <section>
        <div className="rightHome">
          <img
            className="imgaes"
            src={props.image ? props.image : image}
            alt="Please add image"
          />
        </div>
        <div className="leftHome">
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <div>
            <button
              className="allbtns"
              onClick={() => {
                props.onDelete(props._id);
              }}
            >
              Delete
            </button>
            <button
              className="allbtns"
              onClick={() => {
                props.update(
                  props._id,
                  props.title,
                  props.content,
                  props.onDelete
                );
              }}
            >
              Update
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Card;
