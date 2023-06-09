import { Button, Grid, InputLabel, TextField, styled } from "@mui/material";

export const StyledGrid = styled(Grid)`
  gap: clamp(1.5rem, 8vw, 5rem);
`;

export const StyledInputLabel = styled(InputLabel)`
  color: hsl(0, 1%, 44%);
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: 5px;
  margin-bottom: 0.6rem;
`;

export const StyledTextField = styled(TextField)`
  .MuiInputBase-input {
    color: hsl(0, 0%, 8%);
    font-family: "Poppins", sans-serif;
    font-size: clamp(1rem, 5vw, 2rem);
    font-weight: bold;
    padding-left: clamp(1rem, 5vw, 1.5rem);
    max-width: clamp(5rem, 15vw, 7rem);

    ::placeholder {
      font-size: clamp(1rem, 5vw, 2rem);
      font-weight: 700;
      color: hsl(0, 0%, 8%);
    }

    :hover {
      cursor: pointer;
    }
  }

  .MuiOutlinedInput-root {
    border-radius: 10px;
    fieldset {
      border-color: hsl(0, 0%, 86%);
    }
    :hover fieldset {
      border-color: hsl(259, 100%, 65%);
    }
    .Mui-focused fieldset {
      border-color: hsl(259, 100%, 65%);
    }
    .MuiOutlinedInput-input {
      caret-color: hsl(259, 100%, 65%);
    }
  }
`;

export const ButtonContainer = styled("div")`
  position: relative;

  hr {
    border: 1px solid hsl(0, 0%, 86%);
    margin-top: clamp(2rem, 5vw, 5rem);
  }
`;

export const StyledButton = styled(Button)`
  position: absolute;
  background-color: hsl(259, 100%, 65%);
  border-radius: 100%;
  padding: 0.9rem;
  top: -2rem;
  right: -4.4rem;
  .Mui-disabled {
    background-color: gray;
  }
  :hover {
    background-color: hsl(0, 0%, 8%);
  }
  img {
    max-width: clamp(1.5rem, 10vw, 3rem);
  }
`;
