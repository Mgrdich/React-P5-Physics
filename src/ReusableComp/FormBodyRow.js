import React from "react";
//the disable button does not need to work for the forth function it can but it is not nessecary
const FormBodyRow = ({OnMyChange,Info,label,name}) => {

  return (
    <tr>
      <td>{label}</td>
      <td>
        <input
          type={Info.type}
          min={Info.min}
          max={Info.max}
          value={Info.value}
          disabled={Info.disable}
          name={name}
          onChange={OnMyChange}
          step={Info.step}
        />
      </td>
      <td>{Info.value}</td>
    </tr>
  );
};

export default FormBodyRow;
