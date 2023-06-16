import { Form, Formik, Field } from "formik";
import { iData } from "./MyForm";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setDataR } from "../../store/dataSlice";
import { useNavigate } from "react-router-dom";
interface Props {
  next(arg: iData): void;
  prev(arg: iData): void;
  dataR: iData;
}

export const StepTwo = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const dataR = useAppSelector((state) => state.dataR.value);
  const handleSubmit = (values: iData) => {
    props.next(values);
  };
  const openMain = () => {
    navigate("/");
  };
  return (
    <Formik initialValues={dataR} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <p>Nickname</p>
          <Field name="nickName" />
          <p>Name</p>
          <Field name="name"></Field>
          <p>Surname</p>
          <Field name="surName" />

          {/* checkbox */}
          <div>
            <button onClick={openMain}>Назад</button>

            <button type="submit">Далее</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
