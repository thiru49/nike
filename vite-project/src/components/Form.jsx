import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function Form({ setdata }) {
  const { register, handleSubmit, reset, getValues, formState, setValue } =
    useForm();
  const navigate = useNavigate();

  const { errors } = formState;
  console.log(errors);

  const submit = (data) => {
    setdata(data);
    navigate("/user");
  };
  const handleDepartmentChange = (e) => {
    setValue("department", e.target.value);
  };

  return (
    <form
      className="space-y-6 shadow-xl rounded-md"
      onSubmit={handleSubmit(submit)}
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          {...register("name", {
            required: "The Field is required",
            pattern: {
              value: /^[a-zA-Z\s]*$/,
              message: "Name must contain only letters",
            },
          })}
        />
        {errors?.name?.message && <p>{errors?.name?.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          {...register("email", {
            required: "The Field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors?.email?.message && <p>{errors?.email?.message}</p>}
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          {...register("phone", {
            required: "The Field is required",
          })}
        />
        {errors?.phone?.message && <p>{errors?.phone?.message}</p>}
      </div>
      <div>
        <label>Department</label>
        <select
          id="department"
          name="department"
          className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          {...register("department", {
            required: "The Field is required",
          })}
          onChange={handleDepartmentChange}
        >
          <option value="engineering">Engineering</option>
          <option value="sales">Sales</option>
          <option value="marketing">Marketing</option>
          <option value="hr">Human Resources</option>
        </select>
        {errors?.department?.message && <p>{errors?.department?.message}</p>}
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
