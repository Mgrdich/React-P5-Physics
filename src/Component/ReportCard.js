import React from 'react';

const ReportCard = (props) => {
    const names = Object.keys(props.info);
    const values = Object.values(props.info);

    const Module = values.map((item,index)=>{
        return(<li>{names[index]}:{item}</li>)
    })  ;
    return (
        <div className="col-4">
            <div className="card border-primary bg-dark m-5 fontify">
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
