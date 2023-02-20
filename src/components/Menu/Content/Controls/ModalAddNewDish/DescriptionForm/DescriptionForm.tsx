import React from "react";

import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

import { ModalSpan } from "../ModalSelect/ModalSelect";

const DescriptionFormBlock = styled("div")({
  width: "451px",
});
const DescriptionForm = () => {
  return (
    <div>
      <ModalSpan style={{ color: "#FFFFFF", fontStyle: "16px" }}>
        Description
      </ModalSpan>
      <DescriptionFormBlock>
        <TextField
          id="filled-multiline-static"
          autoComplete="off"
          label=""
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
          sx={{
            width: "100%",
            "& .MuiFilledInput-root": {
              display: "block",
              pt: "5px",
              pb: "5px",
              mt: "16px",
              mb: "20px",
              color: "#FFFFFF",
              border: "1px solid #2C4359",
              height: "142px",
              "&:after": {
                borderBottom: "none",
              },
            },
          }}
        />
      </DescriptionFormBlock>
    </div>
  );
};

export default DescriptionForm;
