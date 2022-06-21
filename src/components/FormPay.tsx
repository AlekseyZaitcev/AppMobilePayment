import React from "react";
import { useState } from "react";
import { Formik, Form } from "formik";
import validationSchema from "./validationSchemas/ValidationSchema";
import { FormPayProps } from "../interfaces/interfaces";
import InputMask from "react-input-mask";

const FormPay: React.FC<FormPayProps> = ({ switchPages, sendData }) => {
  const [isDataSended, setIsDataSended] = useState<boolean | undefined>();

  const isCorrectOperatorsData =
    !sendData.id_operator ||
    !sendData.name_operator.trim() ||
    !sendData.user_id;

  if (isCorrectOperatorsData) {
    return (
      <section className="section-mobile-pay">
        <div className="section-form-pay-errors-incorrectTakeData">
          <h2 className="section-form-pay-errors-incorrectTakeData__title">
            Необходимо выбрать оператора!
          </h2>
          <button
            type="button"
            onClick={() => switchPages(false)}
            className="section-form-pay-errors-incorrectTakeData__item"
          >
            Назад
          </button>
        </div>
      </section>
    );
  } else {
    return (
      <section className="section-mobile-pay">
        <div className="section-mobile-pay__title">
          <h2>{sendData.name_operator}</h2>
        </div>
        <div className="section-mobile-pay-form">
          <Formik
            initialValues={{ phoneNumber: "", pay: "" }}
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
                <InputMask
                  mask={"+7\\ 999 999 99 99"}
                  type="tel"
                  name="phoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  placeholder="Введите номер телефона"
                />
                {touched.phoneNumber && errors.phoneNumber && (
                  <p className="errors">{errors.phoneNumber}</p>
                )}
                <input
                  type="text"
                  name="pay"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pay}
                  placeholder="Введите сумму от 1Р до 1000Р"
                />
                {touched.pay && errors.pay && (
                  <p className="errors">{errors.pay}</p>
                )}
                <button
                  className="section-mobile-pay-form-send__item"
                  type="submit"
                  disabled={!isValid || isDataSended}
                  onClick={() => handleSubmit}
                >
                  Отправить
                </button>
                <button
                  className="section-mobile-pay-form-back__item"
                  type="button"
                  onClick={() => switchPages(false)}
                >
                  Назад
                </button>
                {isDataSended === true && (
                  <div className="successMessage__green">
                    Пополнение успешно выполнено!
                  </div>
                )}
                {isDataSended === false && (
                  <div className="notSuccessMessage__red">
                    Ошибка отправки данных. Попробуйте ещё раз!
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </section>
    );
  }
};

export default FormPay;
