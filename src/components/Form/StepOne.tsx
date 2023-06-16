import { Form, Formik, Field } from "formik";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setData } from "../../store/dataSlice";
import { useNavigate } from "react-router-dom";
import { IInputs } from "../../store/dataSlice";
import { Sex } from "../../store/dataSlice";
interface Props {
  next(arg: IInputs): void;
  prev(arg: IInputs): void;
  // data: iData;
}

export const StepOne = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const data = useAppSelector((state) => state.data.value);
  const handleSubmit = (values: IInputs) => {
    props.next(values);
  };
  const openMain = () => {
    navigate("/");
  };
  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <p>Nickname</p>
          <Field name="nickName" />
          <p>Name</p>
          <Field name="name"></Field>
          <p>Surname</p>
          <Field name="surName" />

          <div>
            <button onClick={openMain}>Назад</button>
            <button type="submit">Далее</button>
          </div>
          <div className="flex flex-col">
            <label htmlFor="location">Sex</label>
            <Field name="sex" as="select" className="my-select w-[300px]">
              <option value={Sex.default}>{Sex.default}</option>
              <option value={Sex.man}>{Sex.man}</option>
              <option value={Sex.woman}>{Sex.woman}</option>
            </Field>
          </div>
        </Form>
      )}
    </Formik>
  );
};
