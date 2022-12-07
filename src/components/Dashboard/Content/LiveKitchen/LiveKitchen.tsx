import React from "react";
import { styled } from "@mui/system";
import videoLiveKitchen from "src/images/svg/videoLiveKitchen.svg";
import camera from "src/images/svg/camera.svg";
import WorkingСhefs from "./WorkingChefs";

const BlockLiveKitchen = styled("div")({
  boxSizing: "border-box",
  width: "23%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  margin: "17px 0px 0px 18px",
  padding: "10px  25px",
  "@media (max-width:1900px)": {
    width: "24%",
    margin: "15px 0px 0px 14px",
  },
});

// Хорошо бы вынести в отдельный общий файл для всех блоков
const NameDashboardItem = styled("h2")({
  fontWeight: "500",
  fontSize: "18px",
  color: "#FFFFFF",
  marginBottom: "20px",
});

const Cameras = styled("div")({
  display: "flex",
});

const VideoFromCameraImage = styled("img")({
  marginRight: "18px",
});

const DisplayOfWorkingCameras = styled("div")({
  display: "grid",
  gridTemplateColumns: "50px 75px",
  alignItems: "center",
});

const CameraImage = styled("img")({
  width: "41px",
  height: "31px",
});

const WorkingCamerasBadge = styled("div")({
  width: "44px",
  height: "18px",
  fontWeight: "700",
  fontSize: "10px",
  color: "#FFFFFF",
  background: "#FD1B54",
  borderRadius: "2px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "5px",
});

const NumberOfWorkingCameras = styled("div")({
  width: "31px",
  height: "31px",
  background: "#1B5AFF",
  borderRadius: "6px",
  fontWeight: "500",
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#FFFFFF",
  marginLeft: "2px",
});

const WorkingCamerasTitle = styled("h2")({
  width: "73px",
  whiteSpace: "nowrap",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "15px",
  color: "#7E89A8",
});

const DisplayOfWorkingChefs = styled("div")({
  display: "flex",
  justifyContent: "center",
  "@media (max-width:1900px)": {
    justifyContent: "space-evenly",
  },
});

const LiveKitchen = () => {
  return (
    <BlockLiveKitchen>
      <NameDashboardItem>Live Kitchen</NameDashboardItem>
      <Cameras>
        <VideoFromCameraImage src={videoLiveKitchen} alt="videoLiveKitchen" />
        <DisplayOfWorkingCameras>
          <CameraImage src={camera} alt="camera" />
          <WorkingCamerasBadge>Live</WorkingCamerasBadge>
          <NumberOfWorkingCameras>02</NumberOfWorkingCameras>
          <WorkingCamerasTitle>Cameras are working</WorkingCamerasTitle>
        </DisplayOfWorkingCameras>
      </Cameras>
      <DisplayOfWorkingChefs>
        <WorkingСhefs />
      </DisplayOfWorkingChefs>
    </BlockLiveKitchen>
  );
};

export default LiveKitchen;
