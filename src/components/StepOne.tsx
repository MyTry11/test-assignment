import { Form, Formik, Field } from "formik";

export const StepOne = () => {
  return (
    // @ts-ignore
    <Formik>
      {() => (
        <Form>
          <p>Номер телефона</p>
          <Field name="phone" />
          <p>Email</p>
          <Field name="email"></Field>

          <button type="submit">Начать</button>
        </Form>
      )}
    </Formik>
  );
};
