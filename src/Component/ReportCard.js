import React from 'react';

const ReportCard = (props) => {
    const names = Object.keys(props.info);
    const values = Object.values(props.info);

    const Module = values.map((item,index)=>{
        return(<li key={index}>{names[index]}:{item}</li>)
    })  ;
    const classIne=(props.big)?"col-xl-12":"col-lg-6 col-md-6 col-sm-12 col-xs-12";
    return (
        <div className={classIne}>
            <div className=" border-primary bg-dark m-1 fontify">
                <div className="card-header">{props.title}</div>
                <div className="card-body text-warning">
                    <div className="card-title h4">{props.name}</div>
                    <ul>
                    {Module}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ReportCard;
