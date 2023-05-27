import { Box, Button, InputLabel, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const Form = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const currentDate = new Date();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <InputLabel
          htmlFor="day-input"
          error={Boolean(errors.day)}
        >
          DAY
        </InputLabel>
        <TextField
          id="day-input"
          type="number"
          placeholder="DD"
          error={Boolean(errors.day)}
          helperText={Boolean(errors.day) && <span>{errors.day.message}</span>}
          {...register("day", {
            required: "This field is required",
            min: { value: 1, message: "Must be a valid day" },
            max: { value: 31, message: "Must be a valid day" },
          })}
        />
      </Box>

      <Box>
        <InputLabel
          htmlFor="month-input"
          error={Boolean(errors.month)}
        >
          MONTH
        </InputLabel>
        <TextField
          id="month-input"
          type="number"
          placeholder="MM"
          error={Boolean(errors.month)}
          helperText={
            Boolean(errors.month) && <span>{errors.month.message}</span>
          }
          {...register("month", {
            required: "This field is required",
            min: { value: 1, message: "Must be a valid month" },
            max: { value: 12, message: "Must be a valid month" },
          })}
        />
      </Box>
      <Box>
        <InputLabel
          htmlFor="year-input"
          error={Boolean(errors.year)}
        >
          YEAR
        </InputLabel>
        <TextField
          id="year-input"
          type="number"
          placeholder="YYYY"
          error={Boolean(errors.year)}
          helperText={
            Boolean(errors.year) && <span>{errors.year.message}</span>
          }
          {...register("year", {
            required: "This field is required",
            min: { value: 1, message: "Year must be at least 1" },
            max: {
              value: currentDate.getFullYear(),
              message: `Must be in the past`,
            },
          })}
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        disabled={Boolean(errors.day || errors.month || errors.year)}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
