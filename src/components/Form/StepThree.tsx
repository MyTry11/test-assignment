import { Form, Formik, Field } from "formik";
import { IInputs } from "../../store/dataSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";
interface Props {
  next(arg: IInputs): void;
  // data: IInputs;
  prev(arg: IInputs): void;
}

export const StepThree = (props: Props) => {
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
          <p>About</p>
          <Field
            name="about"
            placeholder="Placeholder"
            className="w-[680px] h-[84px]"
          />

          <div>
            <button type="button" onClick={() => props.prev(values)}>
              Назад
            </button>
            <button type="submit">Отправить</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
