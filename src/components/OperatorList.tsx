import React, { useState } from "react";
import OperatorListItem from "./OperatorListItem";
import FormPay from "./FormPay";
import { OperatorListProps } from "../interfaces/interfaces";

const OperatorList: React.FC<OperatorListProps> = ({ title, operators }) => {
  const [pages, setPages] = useState(false);
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

  if (!pages) {
    return (
      <section className="section-mobile-pay">
        <div className="section-mobile-pay__title">
          <h2>{title}</h2>
        </div>
        <ul className="section-mobile-pay-list">
          {operators.map((item) => (
            <OperatorListItem
              switchPages={setPages}
              item={item}
              key={item.id_operator}
              getDataUser={getDataUser}
            />
          ))}
        </ul>
      </section>
    );
  } else {
    return <FormPay sendData={dataUser} switchPages={setPages}></FormPay>;
  }
};

export default OperatorList;
