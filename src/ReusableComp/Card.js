import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  const { data } = props;
  //console.log(data.position);

  const renderFooter = () => {
    if (data.position !== "Notyet")
      return (
        <Link to={data.position} className="btn btn-dark">
          Check me
        </Link>
      );
    else return <div className="card-footer text-muted" />;
  };

  const renderHeader = () => {
    if (data.position !== "Notyet")
      return <Link to={data.position}>{data.title}</Link>;
    else return <div>{data.title}</div>;
  };
  const RenderExplanation = () => {
    if (data.Explanation)
      return (
        <>
          <p className="h2 text-dark">How to Use</p>
          <p className="h4 text-dark">{data.Explanation}</p>
        </>
      );
  };

  return (
    <div className="card">
      <h5 className="card-header" />
      <img className="card-img-top" src={data.src} alt="" />
      <div className="card-body">
        <div className="fontifyHeader">{renderHeader()}</div>
        <div className="card-text fontify">
          <div className="h4">{data.description}</div>
          {
              RenderExplanation()
          }
        </div>
        {props.Footer ? renderFooter() : null}
      </div>
    </div>
  );
};

export default Card;
