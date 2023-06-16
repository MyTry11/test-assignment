import { Form, Formik, Field } from "formik";
import { iData } from "./MyForm";
import { useAppSelector, useAppDispatch } from "../../hooks";
interface Props {
  next(arg: iData): void;
  dataR: iData;
  prev(arg: iData): void;
}

export const StepThree = (props: Props) => {
  const dispatch = useAppDispatch;
  const dataR = useAppSelector((state) => state.dataR.value);
  const handleSubmit = (values: iData) => {
    props.next(values);
  };

  return (
    <Formik initialValues={dataR} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <p>Advantage1</p>
          <Field name="Advantage1" />
          <p>Advantage2</p>
          <Field name="Advantage2"></Field>
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
