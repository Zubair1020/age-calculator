import { Container, Typography } from "@mui/material";
import { useState } from "react";
import Form from "../form/form.component";

const Calculator = () => {
  const [userDateInfo, setUserDateInfo] = useState({
    days: 0,
    months: 0,
    years: 0,
  });

  const onSubmit = (data) => {
    const userInputYear = Number(data.year);
    const userInputMonth = Number(data.month);
    const userInputDay = Number(data.day);

    const userDate = new Date(userInputYear, userInputMonth, userInputDay);
    const currentDate = new Date();

    const diffTime = Math.abs(currentDate.getTime() - userDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const yearsDiff = Math.floor(diffDays / 365);
    const monthsDiff = Math.floor((diffDays % 365) / 30);
    const daysDiff = diffDays % 30;

    setUserDateInfo((prevValue) => ({
      ...prevValue,
      days: daysDiff,
      months: monthsDiff,
      years: yearsDiff,
    }));
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
      <Container>
        <Typography>
          {userDateInfo.years ? (
            <span>{userDateInfo.years}</span>
          ) : (
            <span> - -</span>
          )}
          years
        </Typography>
        <Typography>
          {userDateInfo.months ? (
            <span>{userDateInfo.months}</span>
          ) : (
            <span> - -</span>
          )}
          months
        </Typography>
        <Typography>
          {userDateInfo.days ? (
            <span>{userDateInfo.days}</span>
          ) : (
            <span> - -</span>
          )}
          days
        </Typography>
      </Container>
    </>
  );
};

export default Calculator;
