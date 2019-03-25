import React from "react";

const TableHead = props => {
  // console.log(props.columns);

  const { columns } = props;
  return (
    <>
      <thead className="table-dark">
        <tr>
          {columns.map(it => {
            return <td  className="fontifyr" key={it.label || it.key}>{(it.label)?it.label:null}</td>;
          })}
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
