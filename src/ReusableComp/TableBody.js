import React from "react";

const TableBody = props => {
  const { data, columns } = props;
  return (
    <>
      <tbody>
        {data.map((item, index) => {
        // console.log(item.key);

          return (
            <tr key={index}>
              {columns.map(column => {
                return <td className="fontifyS" key={CreateKey(item,column)}>{(column.key)?column.content(item):item[column.path]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </>
  );

};

const CreateKey = function(item, column) {
    return (item._id + (column.path || column.key));
};

export default TableBody;
