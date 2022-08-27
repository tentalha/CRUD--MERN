import React, { useState } from "react";
import Input from "../Components/Input";
import { useFormik } from "formik";
import formSchema from "../Schema/formSchema";
import axios from "axios";

function FormPage() {
  const initialValue = {
    name: "",
    age: undefined,
    techStack: "",
    currentCompany: undefined,
    experience: "",
    education: "",
    role: "",
  };

  const postRequest = async (values) => {
    try {
      const data = await axios.post(
        "http://localhost:3000/api/developers/",
        values
      );
    } catch (error) {
      console.log(error);
    }
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValue,
      validationSchema: formSchema,
      onSubmit: () => {
        postRequest(values);
      },
    });

  return (
    <div>
      <h1 className="my-3 text-2xl text-white text-center">User Form</h1>
      <form className=" flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-[400px] border border-2 p-2 bg-[#242B2E] text-white rounded-2xl my-2"
          name="name"
          value={values?.name}
          onChange={handleChange}
          onBlur={handleBlur}
          autocomplete="off"
        />
        {errors.name && touched.name ? (
          <p className="text-red-500 text-xs">{errors.name}</p>
        ) : null}
        <input
          type="text"
          placeholder="Enter your tech stack"
          className="w-[400px] border border-2 p-2 bg-[#242B2E] text-white rounded-2xl my-2"
          name="techStack"
          value={values?.techStack}
          onChange={handleChange}
          onBlur={handleBlur}
          autocomplete="off"
        />
        {errors.techStack && touched.techStack ? (
          <p className="text-red-500 text-xs">{errors.techStack}</p>
        ) : null}
        <input
          type="text"
          placeholder="Enter your company"
          className="w-[400px] border border-2 p-2 bg-[#242B2E] text-white rounded-2xl my-2"
          name="currentCompany"
          value={values?.currentCompany}
          onChange={handleChange}
          onBlur={handleBlur}
          autocomplete="off"
        />
        {errors.currentCompany && touched.currentCompany ? (
          <p className="text-red-500 text-xs">{errors.currentCompany}</p>
        ) : null}
        <input
          type="number"
          placeholder="Enter your age"
          name="age"
          className="w-[400px] border border-2 p-2 bg-[#242B2E] text-white rounded-2xl my-2"
          value={values?.age}
          onChange={handleChange}
          onBlur={handleBlur}
          autocomplete="off"
        />
        {errors.age && touched.age ? (
          <p className="text-red-500 text-xs relative">{errors.age}</p>
        ) : null}
        <input
          type="text"
          placeholder="Enter your experience"
          name="experience"
          className="w-[400px] border border-2 p-2 bg-[#242B2E] text-white rounded-2xl my-2"
          value={values?.experience}
          onChange={handleChange}
          onBlur={handleBlur}
          autocomplete="off"
        />
        {errors.experience && touched.experience ? (
          <p className="text-red-500 text-xs relative">{errors.experience}</p>
        ) : null}
        <input
          type="text"
          placeholder="Enter your education"
          className="w-[400px] border p-2 bg-[#242B2E] text-white rounded-2xl my-2"
          name="education"
          value={values?.education}
          onChange={handleChange}
          onBlur={handleBlur}
          autocomplete="off"
        />
        {errors.education && touched.education ? (
          <p className="text-red-500 text-xs relative">{errors.education}</p>
        ) : null}
        <input
          type="text"
          placeholder="Enter your role"
          name="role"
          className="w-[400px] border border-2 p-2 bg-[#242B2E] text-white rounded-2xl my-2"
          value={values?.role}
          onChange={handleChange}
          onBlur={handleBlur}
          autocomplete="off"
        />
        {errors.role && touched.role ? (
          <p className="text-red-500 text-xs relative">{errors.role}</p>
        ) : null}
        <button
          className="w-[400px] bg-blue-300 p-2 mt-2 rounded-xl"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormPage;
