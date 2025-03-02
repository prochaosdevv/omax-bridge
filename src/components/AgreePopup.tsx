"use client";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  // DialogTitle,
  // IconButton,
  Typography,
} from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import { Inter, Jost } from "next/font/google";
import HelpIcon from "@mui/icons-material/Help";
import ErrorIcon from "@mui/icons-material/Error";
import { ModalProps } from "@/types";
import { t } from "i18next";

// interface BootstrapDialogTitleProps {
//   children: React.ReactNode;
//   onClose?: () => void;
// }

// const Inter_font = Inter({
//   variable: "--font-Inter-sans",
//   subsets: ["latin"],
//   weight: "400",
// });

// function BootstrapDialogTitle(props: BootstrapDialogTitleProps) {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle
//       sx={{
//         m: 0,
//         fontSize: "1.2rem",
//         p: 1.2,
//         borderBottom: "2px solid rgba(255, 255, 255, 0.22)",
//         fontWeight: "600",
//       }}
//       {...other}
//     >
//       {children}
//       {onClose && (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: "absolute",
//             right: 6,
//             top: 6,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       )}
//     </DialogTitle>
//   );
// }

export default function AgreePopup({ isDialogOpen, setIsDialogOpen }: ModalProps) {
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
          marginTop: { lg: "-10rem" },
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
      {/* <BootstrapDialogTitle onClose={() => setIsDialogOpen(false)}>
        Success
      </BootstrapDialogTitle> */}
      <DialogContent dividers>
        <Typography
          textAlign={"center"}
          sx={{
            fontSize: "30px",
            fontWeight: "bold",
            mb: "2rem",
          }}
        >
          {t("Welcome to")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            py: "0.7rem",
          }}
        >
          <HelpIcon />
          <Typography
            sx={{
              fontSize: "16px",
            }}
          >
           {t("For bridging help please head over to support & FAQs.")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
          }}
        >
          <ErrorIcon />
          <Typography
            sx={{
              fontSize: "16px",
            }}
          >
           {t("By using this interface you agree to our Terms and Privacy Policy.")}
          </Typography>
        </Box>

        <Box mt={"1.5rem"}>
          <Button className="common_btn" onClick={() => setIsDialogOpen(false)}>
           {t("Agree & continue")}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
