import { TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const TextFields = () => {
  const { handleSubmit, reset, setValue, control } = useForm({});
  const handleFinalSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit((data) => handleFinalSubmit(data))}>
      <section>
        <Controller
          render={({ field }) => (
            <TextField {...field} size="small" sx={{ paddingTop: "10px" }} />
          )}
          name="Contractor"
          control={control}
        />
      </section>
    </form>
  );
};

export default TextFields;
