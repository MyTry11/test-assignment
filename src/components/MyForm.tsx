import { Form, Formik } from "formik";
import { schema } from "./schema";
import { useState } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
// import CustomCheckbox from "./CustomCheckbox";
// import CustomInput from "./CustomInput";
// import CustomSelect from "./CustomSelect";

// const onSubmit = async (values, actions) => {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   actions.resetForm();
// };

const MyForm = () => {
  const [data, setData] = useState({
    phone: "",
    email: "",
    nickName: "",
    name: "",
    surName: "",
    advantages1: "",
    advantages2: "",
    advantages3: "",
    about: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [<StepOne />, <StepTwo />];

  return <>{steps[currentStep]}</>;
};
export default MyForm;
