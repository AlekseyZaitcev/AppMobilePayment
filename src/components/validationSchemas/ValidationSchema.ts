import * as yup from "yup";

const validationShema = yup.object().shape({
  phoneNumber: yup
    .number()
    .typeError("Некорректный номер телефона")
    .required("Обязательно для заполнения"),
  pay: yup
    .number()
    .min(1, "Минимальная сумма пополнения 1 р.")
    .max(1000, "Максимальная сумма пополнения 1000 р.")
    .typeError("Некорректная сумма оплаты")
    .required("Обязательно для заполнения"),
});

export default validationShema;
