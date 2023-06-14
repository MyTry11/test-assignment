import { Form, Formik } from "formik";
import { schema } from "./schema";
import { useState } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";

// const onSubmit = async (values, actions) => {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   actions.resetForm();
// };

export interface iData {
  phone: string;
  email: string;
  nickName: string;
  name: string;
  surName: string;
  advantages1: string;
  advantages2: string;
  advantages3: string;
  about: string;
}

const MyForm = () => {
  const [data, setData] = useState<iData>({
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

  const handleNextStep = (newData: iData): void => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData: iData): void => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  return <>{steps[currentStep]}</>;
};
export default MyForm;
