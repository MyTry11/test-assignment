import { Form, Formik, Field } from "formik";
import { IInputs } from "../../store/dataSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";
interface Props {
  next(arg: IInputs): void;
  // data: IInputs;
  prev(arg: IInputs): void;
}

export const StepTwo = (props: Props) => {
  const dispatch = useAppDispatch;
  const data = useAppSelector((state) => state.data.value);
  const handleSubmit = (values: IInputs) => {
    props.next(values);
  };
  const removeInput = () => {};

  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <p>Advantages</p>
          {data.advantages.map((advantageField, index) => (
            <div>
              <Field
                name={data.advantages[index]}
                className="block"
                placeholder="Placeholder"
              />
              <button onClick={removeInput}>Remove</button>
            </div>
          ))}
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
