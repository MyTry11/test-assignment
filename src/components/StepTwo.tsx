import { Form, Formik, Field } from "formik";
import { iData } from "./MyForm";
interface Props {
  next(arg: iData): void;
  prev(arg: iData): void;
  data: iData;
}

export const StepTwo = (props: Props) => {
  const handleSubmit = (values: iData) => {
    props.next(values);
  };
  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <p>Nickname</p>
          <Field name="nickName" />
          <p>Name</p>
          <Field name="name"></Field>
          <p>Surname</p>
          <Field name="surname" />

          {/* checkbox */}
          <div>
            <button type="button" onClick={() => props.prev(values)}>
              Назад
            </button>
            <button type="submit">Далее</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
