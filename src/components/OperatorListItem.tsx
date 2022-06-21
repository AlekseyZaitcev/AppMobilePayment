import React from "react";
import { OperatorListItemProps } from "../interfaces/interfaces";

const OperatorListItem: React.FC<OperatorListItemProps> = ({
  item,
  switchPages,
  getDataUser,
}) => {
  const getData = () => {
    const data = {
      ...item,
      user_id: Date.now(),
    };
    getDataUser(data);
    switchPages(!false);
  };

  return (
    <li className="section-mobile-pay-list__item">
      <button type="button" onClick={getData}>
        {item.name_operator}
      </button>
    </li>
  );
};

export default OperatorListItem;
