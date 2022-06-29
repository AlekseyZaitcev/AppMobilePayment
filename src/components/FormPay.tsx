import React from "react";
import { useState } from "react";
import { Formik, Form } from "formik";
import validationSchema from "./validationSchemas/ValidationSchema";
import { FormPayProps } from "../interfaces/interfaces";
import FormButton from "../styles/components/button/FormButton";
import Title from "../styles/components/title/Title";
import Error from "../styles/errors/Error";
import FormMobilePayment from "../styles/components/form/FormMobilePayment";
import SuccessMessage from "../styles/success/SuccessMessage";
import InputForm from "../styles/components/input/MaskedInput";

const FormPay: React.FC<FormPayProps> = ({ switchPages, sendData }) => {
  const [isDataSended, setIsDataSended] = useState<boolean | undefined>();

  const isCorrectOperatorsData =
    !sendData.id_operator ||
    !sendData.name_operator.trim() ||
    !sendData.user_id;

  if (isCorrectOperatorsData) {
    return (
      <FormMobilePayment>
        <Title>Выберите оператора!</Title>
        <FormButton type="button" onClick={() => switchPages(false)}>
          Назад
        </FormButton>
      </FormMobilePayment>
    );
  } else {
    return (
      <FormMobilePayment>
        <Title>{sendData.name_operator}</Title>
        <Formik
          initialValues={{ phoneInput: "", payInput: "" }}
          validateOnBlur
          onSubmit={() => {
            if (Math.floor(Math.random() * 2)) {
              setIsDataSended(true);
              setTimeout(() => {
                switchPages(false);
              }, 2000);
            } else {
              setIsDataSended(false);
            }
          }}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
          }) => (
            <Form>
              <InputForm
                mask={"+7 \\ 999 999 99 99"}
                alwaysShowMask={true}
                type="tel"
                name="phoneInput"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneInput}
                placeholder="Введите номер телефона"
              />
              {touched.phoneInput && errors.phoneInput && (
                <Error>{errors.phoneInput}</Error>
              )}
              <InputForm
                mask={""}
                type="number"
                name="payInput"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.payInput}
                placeholder="Введите сумму от 1Р до 1000Р"
              />
              {touched.payInput && errors.payInput && (
                <Error>{errors.payInput}</Error>
              )}
              <FormButton
                type="submit"
                disabled={!isValid || isDataSended}
                onClick={() => handleSubmit}
              >
                Отправить
              </FormButton>
              <FormButton type="button" onClick={() => switchPages(false)}>
                Назад
              </FormButton>
              {isDataSended === true && (
                <SuccessMessage>Пополнение успешно выполнено!</SuccessMessage>
              )}
              {isDataSended === false && (
                <Error>Ошибка отправки данных. Попробуйте ещё раз!</Error>
              )}
            </Form>
          )}
        </Formik>
      </FormMobilePayment>
    );
  }
};

export default FormPay;
