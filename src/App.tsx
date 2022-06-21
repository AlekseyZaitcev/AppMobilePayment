import React from "react";
import OperatorList from "./components/OperatorList";
import { settingsMobilePayData } from "./interfaces/interfaces";
import "./styles/App.css";

const App: React.FC = () => {
  const operators: Array<settingsMobilePayData> = [
    { id_operator: 1, name_operator: "Билайн" },
    { id_operator: 2, name_operator: "МТС" },
    { id_operator: 3, name_operator: "Мегафон" },
  ];

  return (
    <div className="App">
      <div className="container">
        <OperatorList title="Выберите оператора" operators={operators} />
      </div>
    </div>
  );
};

export default App;
