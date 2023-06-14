import { Form, Formik, Field } from "formik";

export const StepTwo = () => {
  return (
    // @ts-ignore
    <Formik>
      {() => (
        <Form>
          <p>Nickname</p>
          <Field name="nickName" />
          <p>Name</p>
          <Field name="name"></Field>
          <p>Surname</p>
          <Field name="surname" />

          {/* checkbox */}
          <div>
            <button type="button">Назад</button>
            <button type="submit">Далее</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
