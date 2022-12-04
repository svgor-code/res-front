import React, { FC } from "react";
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

// хорощо бы вынести в общий файл для всех
const BlockName = styled("h2")({
	fontWeight: "500",
	fontSize: "18px",
	color: "#FFFFFF",
	marginBottom: "20px",
});

const BlockCameras = styled("div")({
	display: "flex",
});

const BlockVideo = styled("div")({
	marginRight: "18px",
});

const Video = styled("img")({});

const BlockWorkingCameras = styled("div")({
	// border: "1px solid #fff",
	display: "grid",
	gridTemplateColumns: "50px 75px",

	alignItems: "center",
});

const Camera = styled("img")({
	width: "41px",
	height: "31px",
});

const Live = styled("div")({
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

const NameBlockCameras = styled("h2")({
	width: "73px",
	height: "30px",
	fontWeight: "400",
	fontSize: "14px",
	lineHeight: "15px",
	color: "#7E89A8",
});

const BlockShefs = styled("div")({
	display: "flex",
	justifyContent: "space-between",
});

const LiveKitchen: FC = () => {
	return (
		<BlockLiveKitchen>
			<BlockName>Live Kitchen</BlockName>
			<BlockCameras>
				<BlockVideo>
					<Video src={videoLiveKitchen} alt="videoLiveKitchen" />
				</BlockVideo>
				<BlockWorkingCameras>
					<Camera src={camera} alt="camera" />
					<Live>Live</Live>
					<NumberOfWorkingCameras>02</NumberOfWorkingCameras>
					<NameBlockCameras>Cameras are working</NameBlockCameras>
				</BlockWorkingCameras>
			</BlockCameras>
			<BlockShefs>
				{" "}
				<WorkingСhefs />
				<WorkingСhefs />
			</BlockShefs>
		</BlockLiveKitchen>
	);
};

export default LiveKitchen;
