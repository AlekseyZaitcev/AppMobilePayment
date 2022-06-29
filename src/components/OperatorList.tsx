import React, { useState } from "react";
import OperatorListItem from "./OperatorListItem";
import FormPay from "./FormPay";
import { OperatorListProps } from "../interfaces/interfaces";
import Title from "../styles/components/title/Title";
import FormMobilePayment from "../styles/components/form/FormMobilePayment";

const OperatorList: React.FC<OperatorListProps> = ({ title, operators }) => {
  const [IsOperatorPageOpen, setIsOperatorPageOpen] = useState(false);

  const [dataUser, setDataUser] = useState({
    id_operator: 0,
    name_operator: "",
    user_id: 0,
  });

  const getDataUser = (data: {
    id_operator: number;
    name_operator: string;
    user_id: number;
  }) => {
    setDataUser(data);
  };

  if (!IsOperatorPageOpen) {
    return (
      <FormMobilePayment>
        <Title>{title}</Title>
        <ul>
          {operators.map((item) => (
            <OperatorListItem
              switchPages={setIsOperatorPageOpen}
              item={item}
              key={item.id_operator}
              getDataUser={getDataUser}
            />
          ))}
        </ul>
      </FormMobilePayment>
    );
  } else {
    return (
      <FormPay
        sendData={dataUser}
        switchPages={setIsOperatorPageOpen}
      ></FormPay>
    );
  }
};

export default OperatorList;
