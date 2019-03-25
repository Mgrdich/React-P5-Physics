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
    else return <div className="card-footer text-muted">Comming Soon</div>;
  };

  const renderHeader = () => {
      if (data.position !== "Notyet")
          return ( <Link to={data.position}>{data.title}</Link>);
      else
          return <div >{data.title}</div>
  };

  return (
    <div className="card">
      <h5 className="card-header" />
      <div className="card-body">
        <div className="fontifyHeader">
            {renderHeader()}
        </div>
        <p className="card-text fontify">{data.description}</p>
        {renderFooter()}
      </div>
    </div>
  );
};

export default Card;