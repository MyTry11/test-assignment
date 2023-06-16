import { Form, Formik, Field } from "formik";
import { iData } from "./Form/MyForm";
import { useRef } from "react";
import { IMaskInput, IMaskMixin } from "react-imask";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";

export const Main = () => {
  const data = useAppSelector((state) => state.dataR.value);
  const navigate = useNavigate();
  const handleSubmit = (values: iData) => {
    navigate("/form");
  };

  const ref = useRef(null);
  const inputRef = useRef(null);
  const MaskedField = IMaskMixin(({ inputRef, ...props }) => (
    <Field {...props} innerRef={inputRef} />
  ));
  return (
    <>
      <div>
        <img
          src="https://img.hhcdn.ru/photo/724820809.jpeg?t=1686933313&h=sr28heR1j1E1FegyWF0G9w"
          alt=""
        />
        <div>
          <h1>Арслан Валиев</h1>
          <ul>
            <li>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_2161_4084)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.71002 1.96935L3.08181 0.524489C3.15733 0.444944 3.26221 0.399902 3.37189 0.399902H5.83441C5.9405 0.399902 6.04224 0.442045 6.11725 0.51706L7.48294 1.88275C7.55795 1.95776 7.6597 1.9999 7.76578 1.9999H13.4344C13.5405 1.9999 13.6422 2.04205 13.7173 2.11706L14.2829 2.68275C14.358 2.75776 14.4001 2.8595 14.4001 2.96559V10.6342C14.4001 10.7403 14.358 10.842 14.2829 10.9171L13.7173 11.4827C13.6422 11.5578 13.5405 11.5999 13.4344 11.5999H2.59C2.46983 11.5999 2.35602 11.5459 2.28005 11.4528L1.69015 10.7296C1.63191 10.6582 1.6001 10.5689 1.6001 10.4768V2.24476C1.6001 2.14227 1.63944 2.04368 1.71002 1.96935Z"
                    fill="#CCCCCC"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_2161_4084"
                    x="-2.3999"
                    y="0.399902"
                    width="20.7998"
                    height="19.2"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2161_4084"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2161_4084"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <a href="https://t.me/my_try">Telegram</a>
            </li>
            <li>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_2161_4084)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.71002 1.96935L3.08181 0.524489C3.15733 0.444944 3.26221 0.399902 3.37189 0.399902H5.83441C5.9405 0.399902 6.04224 0.442045 6.11725 0.51706L7.48294 1.88275C7.55795 1.95776 7.6597 1.9999 7.76578 1.9999H13.4344C13.5405 1.9999 13.6422 2.04205 13.7173 2.11706L14.2829 2.68275C14.358 2.75776 14.4001 2.8595 14.4001 2.96559V10.6342C14.4001 10.7403 14.358 10.842 14.2829 10.9171L13.7173 11.4827C13.6422 11.5578 13.5405 11.5999 13.4344 11.5999H2.59C2.46983 11.5999 2.35602 11.5459 2.28005 11.4528L1.69015 10.7296C1.63191 10.6582 1.6001 10.5689 1.6001 10.4768V2.24476C1.6001 2.14227 1.63944 2.04368 1.71002 1.96935Z"
                    fill="#CCCCCC"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_2161_4084"
                    x="-2.3999"
                    y="0.399902"
                    width="20.7998"
                    height="19.2"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2161_4084"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2161_4084"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <a href="https://github.com/MyTry11">Github</a>
            </li>
            <li>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_2161_4084)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.71002 1.96935L3.08181 0.524489C3.15733 0.444944 3.26221 0.399902 3.37189 0.399902H5.83441C5.9405 0.399902 6.04224 0.442045 6.11725 0.51706L7.48294 1.88275C7.55795 1.95776 7.6597 1.9999 7.76578 1.9999H13.4344C13.5405 1.9999 13.6422 2.04205 13.7173 2.11706L14.2829 2.68275C14.358 2.75776 14.4001 2.8595 14.4001 2.96559V10.6342C14.4001 10.7403 14.358 10.842 14.2829 10.9171L13.7173 11.4827C13.6422 11.5578 13.5405 11.5999 13.4344 11.5999H2.59C2.46983 11.5999 2.35602 11.5459 2.28005 11.4528L1.69015 10.7296C1.63191 10.6582 1.6001 10.5689 1.6001 10.4768V2.24476C1.6001 2.14227 1.63944 2.04368 1.71002 1.96935Z"
                    fill="#CCCCCC"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_2161_4084"
                    x="-2.3999"
                    y="0.399902"
                    width="20.7998"
                    height="19.2"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2161_4084"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2161_4084"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <a href="https://kazan.hh.ru/resume/9d4d7a5cff0bfb8b1e0039ed1f6373794b5874">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Formik initialValues={data} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <p>Номер телефона</p>
            <MaskedField
              mask="+7 000 000-00-00"
              value="999 162 73 57"
              name="phone"
              disabled={true}
            />
            <p>Email</p>
            <Field
              name="email"
              disabled
              value="valiev.arslan.k@gmail.com"
            ></Field>
            <button id="button-start" type="submit">
              Начать
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
