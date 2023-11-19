"use client";
import { useState } from "react";
import {
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  StepButton,
  Button,
  Paper,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default function Webln() {
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const steps = ["Skaffa en webbplånbok", "Testa", "Användning"];

  const handleNext = () => {
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    window.scrollTo(0, 0);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "md", mb: 2 }}>
      <Typography variant="h4">Webbplånbok</Typography>
      <Typography>
        Med en webbplånbok kan du enkelt betala med bitcoin på hemsidor över
        Lightning Network. Här visar vi hur du kommer igång med att använda en
        webbplånbok. Häng med!
      </Typography>
      <Stepper nonLinear activeStep={activeStep} orientation="vertical" sx={{mt: 2}}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
            <StepContent>
              {activeStep === 0 && <StepOne />}
              {activeStep === 1 && <StepTwo />}
              {activeStep === 2 && <StepThree />}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 5 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Tillbaka
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  {index === steps.length - 1 ? "Färdig" : "Nästa"}
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>
            Det var allt om lightning med webbplånböcker! Hoppas att allt gick
            bra och att du nu känner dig redo att skicka bitcoin på webben.
            Tveka inte att höra av dig till oss om något inte fungerade eller om du har några funderingar.
          </Typography>
        </Paper>
      )}
    </Box>
  );
}
