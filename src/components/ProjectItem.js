import { useRef } from "react";
import "../css/projectItem.css";
import useClickOutside from "../helpers/clickOutside";

export default function ProjectItem(props) {
  const el = useRef(null);
  useClickOutside(el, () => {
    props.setCardVisible(props.iniBooleans);
  });
  return (
    <div className="blur">
      <div className={`project-item-wrapper ${props.index}`} ref={el}>
        <div className="text-wrapper">
          <div className="title">
            {props.name}
            <div className="tools">
              <span>Created Using: </span>
              {props.tools.map((value, index) => {
                return <div className="tool">{value}</div>;
              })}
            </div>
          </div>

          <div className="description">
            <pre>{props.description}</pre>
          </div>
        </div>
        <div className="buttons">
          <a href={props.link} target="_blank">
            View
          </a>
          <div
            onClick={() => {
              props.setCardVisible(props.iniBooleans);
            }}
          >
            Back
          </div>
        </div>
      </div>
    </div>
  );
}
