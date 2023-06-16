import { Form, Formik } from "formik";
import { firstStepSchema, secondStepSchema } from "../schema";
import { useState } from "react";
// import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setDataR } from "../../store/dataSlice";
import { increaseStep, decreaseStep } from "../../store/currentStepSlice";

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
  advantages: string[];
  about: string;
}

const MyForm = () => {
  const dispatch = useAppDispatch();
  const dataR = useAppSelector((state) => state.dataR.value);
  const currentStepR = useAppSelector((state) => state.currentStepR.value);

  const handleNextStep = (newData: iData): void => {
    dispatch(setDataR(newData));
    dispatch(increaseStep());
    // console.log(dataR);
  };

  const handlePrevStep = (newData: iData): void => {
    dispatch(setDataR(newData));
    dispatch(decreaseStep());
    // console.log(dataR);
  };

  const steps = [
    // <StepOne next={handleNextStep} dataR={dataR} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} dataR={dataR} />,
    <StepThree next={handleNextStep} prev={handlePrevStep} dataR={dataR} />,
  ];

  return <>{steps[currentStepR]}</>;
};
export default MyForm;
