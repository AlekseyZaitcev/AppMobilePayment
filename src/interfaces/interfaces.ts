export interface settingsMobilePayData {
  id_operator: number;
  name_operator: string;
}

export interface OperatorListProps {
  operators: settingsMobilePayData[];
  title: string;
}

export interface OperatorListItemProps {
  item: { id_operator: number; name_operator: string };
  switchPages: (fc: boolean) => void;
  getDataUser: (fc: {
    id_operator: number;
    name_operator: string;
    user_id: number;
  }) => void;
}

export interface FormPayProps {
  switchPages: (fc: boolean) => void;
  sendData: { id_operator: number; name_operator: string; user_id: number };
}

export interface ResultSendProps {
  pool: {
    phoneNumber: string;
    pay: string;
    id_operator: number;
    name_operator: string;
    user_id: number;
  };
}
