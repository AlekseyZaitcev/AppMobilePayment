import * as yup from "yup";

const validationShema = yup.object().shape({
  phoneInput: yup
    .number()
    .required("Обязательно для заполнения")
    .typeError("Некорректный номер телефона"),
  payInput: yup
    .number()
    .min(1, "Минимальная сумма оплаты 1р")
    .max(1000, "Максимальная сумма пополнения 1000р")
    .typeError("Некорректная сумма оплаты")
    .required("Обязательно для заполнения"),
});

export default validationShema;
