import React from "react";
//the disable button does not need to work for the forth function it can but it is not nessecary
const FormBodyRow = ({ OnMyChange, Info, label, name, otherType }) => {
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
          className="form-control"
        />
      </td>
      <td>
        <input
          min={Info.min}
          max={Info.max}
          type="number"
          value={Info.value}
          disabled={Info.disable}
          name={name}
          onChange={OnMyChange}
          step="any"
          size={3}
          className="form-control"
        />
      </td>
    </tr>
  );
};
/*FormBodyRow.defaultProps = {
  type2: "number"
};*/

export default FormBodyRow;
