"use client";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Step,
  StepLabel,
  Stepper,
  // Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import { Inter, Jost } from "next/font/google";
import { useState } from "react";
import FirstStep from "./Steps/FirstStep";
import SecondStep from "./Steps/SecondStep";
import ThirdStep from "./Steps/ThirdStep";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ModalProps } from "@/types";

interface BootstrapDialogTitleProps {
  children: React.ReactNode;
  onClose?: () => void;
}

// const Inter_font = Inter({
//   variable: "--font-Inter-sans",
//   subsets: ["latin"],
//   weight: "400",
// });

function BootstrapDialogTitle(props: BootstrapDialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        fontSize: "1.2rem",
        p: 1.2,
        // borderBottom: "2px solid rgba(255, 255, 255, 0.22)",
        fontWeight: "600",
      }}
      {...other}
    >
      {children}
      {onClose && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 6,
            top: 6,
            color: "var(--foreground)",
            background: "var(--light_dark)",
            "&:hover": {
              background: "var(--light_dark)",
            }
          }}
        >
          <CloseIcon sx={{ fontSize: "1.2rem" }} />
        </IconButton>
      )}
    </DialogTitle>
  );
}

interface DotProps {
  active?: boolean;
  completed?: boolean;
}

const DotStepIcon = ({ active = false, completed = false }: DotProps) => {
  return (
    <div
      style={{
        width: 12,
        height: 12,
        borderRadius: "50%",
        background:
          completed || active ? "var(--foreground)" : "var(--foreground)",
        opacity: completed || active ? "1" : "0.2",
        transition: "background 0.3s ease",
      }}
    />
  );
};

export default function ReviewBridge({ isDialogOpen, setIsDialogOpen, stepProps }: ModalProps) {
  const steps = ["1", "2", "3"];
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    } else {
      setIsDialogOpen(false);
    }
  };
  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    } else {
      setIsDialogOpen(false);
    }
  };

  const [agreed, setAgreed] = useState(false);

  return (
    <Dialog
      onClose={() => setIsDialogOpen(false)}
      disableScrollLock
      aria-labelledby="customized-dialog-title"
      open={isDialogOpen}
      sx={{
        "& .MuiDialogContent-root": {
          padding: "1.5rem 1rem",
        },
        "& .MuiDialogActions-root": {
          padding: "1rem",
        },
        "& .MuiDialog-container": {
          backdropFilter: "blur(12px)",
          //   marginTop: "-10rem",
        },
        "& .MuiPaper-root": {
          maxWidth: "440px",
          borderRadius: "10px",
          m: "10px",
          background: `var(--common)`,
          backdropFilter: "blur(12.5px)",
          color: `var(--foreground)`,
          width: { md: "100% !important", xs: "440px !important" },
          overflowX: { md: "auto", xs: "scroll" },
          //   boxShadow: "inset 0px 0px 15px rgba(255, 255, 255, 0.4)",
        },
        "& p,div,a,button": {
          // fontFamily: Inter_font.style.fontFamily,
          // fontSize:"15px"
        },
      }}
    >
      <BootstrapDialogTitle onClose={() => setIsDialogOpen(false)}>
        {activeStep > 0 && (
          <IconButton
            disableRipple
            onClick={handleBack}
            sx={{
              position: "absolute", left: 16, color: "var(--foreground) !important",
              background: "var(--light_dark) !important",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                background: "var(--light_dark) !important",
              }
            }}
          >
            <ArrowBackIosIcon sx={{ color: "var(--foreground)", fontSize: "1.2rem", pl: "5px" }} />
          </IconButton>
        )}
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          connector={null}
          sx={{
            justifyContent: "center",
            mt: "1rem",
          }}
        >
          {steps.map((step, index) => (
            <Step key={index} sx={{ maxWidth: "0 !important" }}>
              {" "}
              {/* Ensure a unique key */}
              <StepLabel
                StepIconComponent={(props) => <DotStepIcon {...props} />}
              />
            </Step>
          ))}
        </Stepper>
      </BootstrapDialogTitle>
      <DialogContent>
        {activeStep === 0 && <FirstStep {...stepProps}/>}
        {activeStep === 1 && <SecondStep stepProps={stepProps} agreedProps={{ agreed, setAgreed }} />}
        {activeStep === 2 && <ThirdStep {...stepProps}/>}
        {activeStep !== 2 && <Box mt={"1.5rem"}>
          <Button className="common_btn" onClick={handleNext} disabled={activeStep!=1 ? false : agreed}>
            {activeStep < steps.length - 1 ? "Continue" : "Finish"}
          </Button>
        </Box>}
      </DialogContent>
    </Dialog>
  );
}
