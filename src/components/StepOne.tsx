import { Form, Formik, Field } from "formik";
import { iData } from "./MyForm";
interface Props {
  next(arg: iData): void;
  data: iData;
}

export const StepOne = (props: Props) => {
  const handleSubmit = (values: iData) => {
    props.next(values);
  };

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
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
