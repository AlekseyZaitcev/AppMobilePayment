import React from "react";
import { OperatorListItemProps } from "../interfaces/interfaces";
import OperatorListItemButton from "../styles/components/button/OperatorListItemButton";

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
    <li>
      <OperatorListItemButton type="button" onClick={getData}>
        {item.name_operator}
      </OperatorListItemButton>
    </li>
  );
};

export default OperatorListItem;
