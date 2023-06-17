import { Form, Formik, Field } from "formik";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setData } from "../../store/dataSlice";
import { useNavigate } from "react-router-dom";
import { IInputs } from "../../store/dataSlice";
import { Sex } from "../../store/dataSlice";
interface Props {
  next(): void;
  prev(): void;
  // data: iData;
}

export const StepOne = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const data = useAppSelector((state) => state.data.value);
  const handleSubmit = () => {
    props.next();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.currentTarget;
    dispatch(setData({ [name]: value }));
  };

  const openMain = () => {
    navigate("/");
  };
  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className="w-[300px]">
          <p>Nickname</p>
          <Field
            name="nickName"
            onChange={handleChange}
            value={data.nickName}
          />
          <p>Name</p>
          <Field name="name" onChange={handleChange} value={data.name} />
          <p>Surname</p>
          <Field name="surName" onChange={handleChange} value={data.surName} />

          <div>
            <button type="button" onClick={openMain}>
              Назад
            </button>
            <button type="submit">Далее</button>
          </div>
          <div className="flex flex-col">
            <label htmlFor="location">Sex</label>
            <Field
              name="sex"
              as="select"
              className="my-select w-[300px]"
              onChange={handleChange}
              value={data.sex}
            >
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
