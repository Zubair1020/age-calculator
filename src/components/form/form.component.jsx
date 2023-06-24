import { useForm } from "react-hook-form";
import {
  StyledGrid,
  StyledButton,
  StyledTextField,
  StyledInputLabel,
  ButtonContainer,
} from "./form.style";
import { Grid } from "@mui/material";
import ButtonImage from "../../assets/icon-arrow.svg";

const Form = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const currentDate = new Date();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledGrid container>
        <Grid item>
          <StyledInputLabel
            htmlFor="day-input"
            error={Boolean(errors.day)}
          >
            DAY
          </StyledInputLabel>
          <StyledTextField
            id="day-input"
            type="number"
            placeholder="DD"
            inputMode="numeric"
            error={Boolean(errors.day)}
            helperText={
              Boolean(errors.day) && (
                <span style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {errors.day.message}
                </span>
              )
            }
            {...register("day", {
              required: "This field is required",
              min: { value: 1, message: "Must be a valid day" },
              max: { value: 31, message: "Must be a valid day" },
            })}
          />
        </Grid>

        <Grid item>
          <StyledInputLabel
            htmlFor="month-input"
            error={Boolean(errors.month)}
          >
            MONTH
          </StyledInputLabel>
          <StyledTextField
            id="month-input"
            className="ok"
            type="number"
            placeholder="MM"
            error={Boolean(errors.month)}
            helperText={
              Boolean(errors.month) && (
                <span style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {errors.month.message}
                </span>
              )
            }
            {...register("month", {
              required: "This field is required",
              min: { value: 1, message: "Must be a valid month" },
              max: { value: 12, message: "Must be a valid month" },
            })}
          />
        </Grid>

        <Grid item>
          <StyledInputLabel
            htmlFor="year-input"
            error={Boolean(errors.year)}
          >
            YEAR
          </StyledInputLabel>
          <StyledTextField
            id="year-input"
            type="number"
            placeholder="YYYY"
            error={Boolean(errors.year)}
            helperText={
              Boolean(errors.year) && (
                <span style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {errors.year.message}
                </span>
              )
            }
            {...register("year", {
              required: "This field is required",
              min: { value: 1900, message: "Year must be at least 1900" },
              max: {
                value: currentDate.getFullYear(),
                message: `Must be in the past`,
              },
            })}
          />
        </Grid>
      </StyledGrid>
      <ButtonContainer>
        <hr />
        <StyledButton
          type="submit"
          variant="contained"
          disabled={Boolean(errors.day || errors.month || errors.year)}
        >
          <img
            src={ButtonImage}
            alt=""
          />
        </StyledButton>
      </ButtonContainer>
    </form>
  );
};

export default Form;
