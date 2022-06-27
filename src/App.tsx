import React from "react";
import OperatorList from "./components/OperatorList";
import { settingsMobilePayData } from "./interfaces/interfaces";
import Container from "./styles/global/Container";

const App: React.FC = () => {
  const operators: Array<settingsMobilePayData> = [
    { id_operator: 1, name_operator: "Билайн" },
    { id_operator: 2, name_operator: "МТС" },
    { id_operator: 3, name_operator: "Мегафон" },
  ];

  return (
    <div className="App">
      <Container>
        <OperatorList title="Выберите оператора" operators={operators} />
      </Container>
    </div>
  );
};

export default App;
