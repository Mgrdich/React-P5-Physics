import React from 'react';

const FormButton = ({start,onClickS,onClickR,reset,error}) => {
        //console.log(Object.values(error).length);
    if(Object.keys(error).length===0) {
        return (
            <form>
                <button
                    className="btn btn-dark btn-large m-2"
                    type="button"
                    name="start"
                    value={start}
                    onClick={onClickS}
                    disabled={start}
                >
                    Start
                </button>
                <button
                    className={start ? "btn  btn-primary m-2" : "btn btn-dark m-2"}
                    type="button"
                    name="reset"
                    value={reset}
                    onClick={onClickR}
                >
                    Reset
                </button>
            </form>
        );
    }else return(
        <span className="badge badge-pill badge-danger">{error[Object.keys(error)[0]]}</span>
    )
};


export default FormButton;
