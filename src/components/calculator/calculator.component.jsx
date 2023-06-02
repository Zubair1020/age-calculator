import { StyledGridContainer, StyledTypography } from "./calculator.style";
import { useState } from "react";
import Form from "../form/form.component";
import { Grid } from "@mui/material";

const Calculator = () => {
  const [userDateInfo, setUserDateInfo] = useState({
    days: 0,
    months: 0,
    years: 0,
  });

  const onSubmit = (data) => {
    // Converting the user's given date to integer
    const userInputYear = Number(data.year);
    const userInputMonth = Number(data.month);
    const userInputDay = Number(data.day);

    // Getting the current date and user's birth date.
    // Because the month in new Date starts from 0 to 11
    // that's why we are subtracting user  month by one
    const currentDate = new Date();
    const userDate = new Date(userInputYear, userInputMonth - 1, userInputDay);

    // Getting user's age in day, month and year
    // by subtracting the user's date to current date
    let ageYears = currentDate.getFullYear() - userDate.getFullYear();
    let ageMonths = currentDate.getMonth() - userDate.getMonth();
    let ageDays = currentDate.getDate() - userDate.getDate();

    // This code block is used to handle the case
    // where the calculated age in months and days is negative.
    // It adjusts the age values to ensure they represent a valid positive age.
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }

    if (ageDays < 0) {
      // Create a Date object for the first day of the previous month
      const previousMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      );

      // Get the number of days in the previous month
      const daysInPreviousMonth = new Date(
        previousMonth.getFullYear(),
        previousMonth.getMonth() + 1,
        0
      ).getDate();

      // Adjust the ageDays by adding the number of days in the previous month
      // and decrement the ageMonths by 1
      ageDays += daysInPreviousMonth;
      ageMonths--;
    }

    setUserDateInfo({
      days: ageDays,
      months: ageMonths,
      years: ageYears,
    });
  };

  return (
    <>
      <StyledGridContainer container>
        <Grid item>
          <Form onSubmit={onSubmit} />
        </Grid>

        <Grid item>
          <StyledTypography variant="h1">
            {userDateInfo.years ? (
              <span>{userDateInfo.years}</span>
            ) : (
              <span> - -</span>
            )}
            years
          </StyledTypography>

          <StyledTypography variant="h1">
            {userDateInfo.months ? (
              <span>{userDateInfo.months}</span>
            ) : (
              <span> - -</span>
            )}
            months
          </StyledTypography>

          <StyledTypography variant="h1">
            {userDateInfo.days ? (
              <span>{userDateInfo.days}</span>
            ) : (
              <span> - -</span>
            )}
            days
          </StyledTypography>
        </Grid>
      </StyledGridContainer>
    </>
  );
};

export default Calculator;
