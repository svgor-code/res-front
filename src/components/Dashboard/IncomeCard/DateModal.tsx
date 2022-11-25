import React from "react";

import { styled } from "@mui/material/styles";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CustomBox = styled(Box)({
  "& .MuiBox-root": {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    padding: 10,
    backgroundColor: "#081A2C",
    color: "#FFFFFF",
    border: "1px solid #153453",
    boxShadow: 24,
    p: 4,
  },
});

const DateModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Change date</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <CustomBox>
            <Box>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Text in a modal
              </Typography>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 2, color: "#7E89A8" }}
              >
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
              <Button onClick={handleClose}>Done</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </Box>
          </CustomBox>
        </Fade>
      </Modal>
    </div>
  );
};

export default DateModal;
