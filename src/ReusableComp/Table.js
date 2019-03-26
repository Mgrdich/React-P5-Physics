import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = (props) => {
    return (
        <table className="table table-sm table-condensed mt-5 ml-4 col-4">
            <TableHead columns={props.columns} />
            <TableBody columns={props.columns} data={props.data} />
        </table>
    );
};

export default Table;
