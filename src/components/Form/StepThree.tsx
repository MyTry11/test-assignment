import { Form, Formik, Field } from "formik";
import { IInputs, setData } from "../../store/dataSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";
interface Props {
  next(): void;
  // data: IInputs;
  prev(): void;
}

export const StepThree = (props: Props) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.value);
  const handleSubmit = () => {
    props.next();
  };
  const handleChange = (e: any) => {
    const { name, value } = e.currentTarget;
    dispatch(setData({ [name]: value }));
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
            onChange={handleChange}
            value={data.about}
          />

          <div>
            <button type="button" onClick={() => props.prev()}>
              Назад
            </button>
            <button type="submit">Отправить</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
