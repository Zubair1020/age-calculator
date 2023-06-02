import { Grid, Typography, styled } from "@mui/material";

export const StyledGridContainer = styled(Grid)`
  border-radius: 20px 20px 20% 20px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
              rgba(17, 17, 26, 0.1) 0px 16px 56px, 
              rgba(17, 17, 26, 0.1) 0px 24px 80px;
  flex-direction: column;
  gap: clamp(2rem, 10vw, 5rem);
  clamp(2rem, 5vw, 4rem) clamp(2rem, 5vw, 5rem);
  padding: clamp(2rem, 5vw, 4rem) clamp(2rem, 15vw + 2rem, 15rem)
`;

export const StyledTypography = styled(Typography)`
  font-size: clamp(2rem, 8vw + 1rem, 6rem);
  font-family: "Poppins", sans-serif;
  font-style: italic;
  font-weight: 800;

  span {
    color: hsl(259, 100%, 65%);
    margin-right: clamp(0.5rem, 4vw, 0.8rem);
  }
`;
