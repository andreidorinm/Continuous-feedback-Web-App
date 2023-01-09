import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SignupProfessorScreen = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="message"
          autoComplete="off"
          {...register("message", {
            required: "Required",
          })}
        />
        {errors.message && errors.message.message}
        <input type="submit" />
      </form>
    </div>
  );
}

export default SignupProfessorScreen;
