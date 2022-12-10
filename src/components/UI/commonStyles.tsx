import { styled } from "@mui/system";

export const NameDashboardItem = styled("h2")({
  fontWeight: "500",
  fontSize: "18px",
  color: "#FFFFFF",
  marginBottom: "20px",
});

export const DashedLine = styled("div")({
  marginTop: "15px ",
  marginBottom: "15px",
  width: "100%",
  border: "0.5px dashed #2A527A",
});

export const ViewButton = styled("button")({
  width: "98px",
  height: "30px",
  borderRadius: "5px",
  background: "#073374",
  color: "#FFFFFF",
  cursor: "pointer",
  border: "none",
  "&:hover": {
    transition: "all .3s",
    backgroundColor: "#082350",
  },
});
