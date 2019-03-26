import React from "react";

const ListGroup = props => {
  const {
    items,
    onItemSelect,
    textProperty,
    valueProperty,
    selectedItem
  } = props;
  const Items = items.map(item => {
    //console.log(item);
    return (
      <li
        key={item[valueProperty]}
        className={
          selectedItem[valueProperty] === item[valueProperty]
            ? "list-group-item active cur "
            : "list-group-item cur bg-dark"
        }
        onClick={() => onItemSelect(item)}
      >
        {item[textProperty]}
      </li>
    );
  });
  return (
    <ul className="list-group-horizontal-sm mt-5 f1 d-inline-block ">{Items}</ul>
  );
};
ListGroup.defaultProps = {
  textProperty: "profession",
  valueProperty: "id"
};
export default ListGroup;
