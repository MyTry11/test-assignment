import { Form, Formik } from "formik";
import { firstStepSchema, secondStepSchema } from "../schema";
import { useState } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { increaseStep, decreaseStep } from "../../store/currentStepSlice";
import { IInputs } from "../../store/dataSlice";

// const onSubmit = async (values, actions) => {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   actions.resetForm();
// };

const MyForm = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.value);
  const currentStepR = useAppSelector((state) => state.currentStepR.value);

  const handleNextStep = (): void => {
    dispatch(increaseStep());
  };

  const handlePrevStep = (): void => {
    dispatch(decreaseStep());
  };

  const steps = [
    // <StepOne next={handleNextStep} data={data} />,
    <StepOne next={handleNextStep} prev={handlePrevStep} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} />,
    <StepThree next={handleNextStep} prev={handlePrevStep} />,
  ];

  return <>{steps[currentStepR]}</>;
};
export default MyForm;
