import { Form, Formik, Field } from "formik";
import { IInputs } from "../../store/dataSlice";
import {
  setAdvantages,
  removeAdvantage,
  addAdvantage,
  changeCheckboxValue,
} from "../../store/dataSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";
interface Props {
  next(): void;
  prev(): void;
}

export const StepTwo = (props: Props) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.value);
  const handleSubmit = (values: IInputs) => {
    props.next();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.currentTarget;
    dispatch(setAdvantages({ name, value }));
  };
  const removeInput = (key: any) => {
    dispatch(removeAdvantage(key));
  };
  const addAdvantageFnc = () => {
    dispatch(addAdvantage());
  };
  const checkboxHandleChange = (val: any) => {
    dispatch(changeCheckboxValue(val));
  };

  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className="w-[436px]">
          <p>Advantages</p>
          {data.advantages.map((field) => (
            <div className="flex" key={field.name}>
              <Field
                name={field.name}
                className="block"
                placeholder="Placeholder"
                value={field.value}
                onChange={handleChange}
              />
              <button type="button" onClick={(e) => removeInput(field.name)}>
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addAdvantageFnc}
            className="w-[44px] h-[44px] flex items-center justify-center"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99998 1C6.99998 0.447715 6.55226 0 5.99998 0C5.44769 0 4.99998 0.447715 4.99998 1V4.99998H1C0.447716 4.99998 0 5.44769 0 5.99998C0 6.55226 0.447715 6.99998 1 6.99998H4.99998V11C4.99998 11.5522 5.44769 12 5.99998 12C6.55226 12 6.99998 11.5522 6.99998 11V6.99998H11C11.5522 6.99998 12 6.55226 12 5.99998C12 5.44769 11.5522 4.99998 11 4.99998H6.99998V1Z"
                fill="#5558FA"
              />
            </svg>
          </button>
          <ul>
            {data.checkbox.map((input) => (
              <li key={input.id}>
                <Field
                  type="checkbox"
                  name={input.name}
                  checked={input.value}
                  onClick={(e: any) => checkboxHandleChange(input.name)}
                ></Field>
              </li>
            ))}
            {/* <input type="checkbox" name="checkbox" checked={data.checkbox} /> */}
          </ul>

          <div>
            <button type="button" onClick={() => props.prev()}>
              Назад
            </button>
            <button type="submit">Далее</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
