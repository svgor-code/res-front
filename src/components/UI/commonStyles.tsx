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

export const ViewAll = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "30px",
});

export const TitleFoodMenu = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "36px",
  width: "125px",
  height: "39px",
  borderRadius: "6px",
  background: "#0F2439",
});

export const TextFoodMenu = styled("span")({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "16px",
  color: "#06CB55",
});
