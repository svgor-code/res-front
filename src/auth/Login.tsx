import React from "react";
import { styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const LoginBox = styled("div")({
  position: "absolute",
  top: "50%",
  right: "50%",
  width: "500px",
  height: "500px",
  "& .MuiCard-root": {
    height: "100%",
  },
  "& .MuiPaper-root": {
    backgroundColor: "#081A2C",
    border: "0.5px solid #153453",
  },
  "& .MuiTypography-root": {
    color: "white",
  },
  "& .MuiCardContent-root": {
    height: "50%",
  },
  "& .MuiCardActions-root": {
    height: "50%",
  },
});

const Login = () => {
  return (
    <div>
      <LoginBox>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">well meaning and kindly.</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </LoginBox>
    </div>
  );
  //   if(isShow){
  //       return (
  //           <Box sx={{ minWidth: 275 }}>
  //           <Card variant="outlined">
  //           <CardContent>
  //     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  //       Word of the Day
  //     </Typography>
  //     <Typography variant="h5" component="div">

  //     </Typography>
  //     <Typography sx={{ mb: 1.5 }} color="text.secondary">
  //       adjective
  //     </Typography>
  //     <Typography variant="body2">
  //       well meaning and kindly.
  //       <br />
  //       {'"a benevolent smile"'}
  //     </Typography>
  //   </CardContent>
  //   <CardActions>
  //     <Button size="small">Learn More</Button>
  //   </CardActions>
  //           </Card>
  //         </Box>
  //       )
  //   }
};

export default Login;
