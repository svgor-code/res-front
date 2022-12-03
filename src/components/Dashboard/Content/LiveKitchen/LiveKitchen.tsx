import React from "react";
import { styled } from "@mui/system";
import videoLiveKitchen from "src/images/svg/videoLiveKitchen.svg";
import camera from "src/images/svg/camera.svg";

const BlockLiveKitchen = styled("div")({
	boxSizing: "border-box",
	width: "23%",
	borderRadius: "6px",
	border: "0.5px solid #153453",
	background: "#081A2C",
	margin: "17px 0px 0px 18px",
	padding: "33px 24px",
	"@media (max-width:1900px)": {
		width: "24%",
		margin: "15px 0px 0px 14px",
	},
});

const BlockName = styled("h1")({
	fontWeight: "500",
	fontSize: "18px",
	color: "#FFFFFF",
	marginBottom: "29px",
});

const BlockCameras = styled("div")({
	display: "flex",
});

const BlockVideo = styled("div")({
	marginRight: "18px",
});

const Video = styled("img")({});

const BlockWorkingCameras = styled("div")({});

const Camera = styled("img")({});

const LiveKitchen = () => {
	return (
		<BlockLiveKitchen>
			<BlockName>Live Kitchen</BlockName>
			<BlockCameras>
				<BlockVideo>
					<Video src={videoLiveKitchen} alt="videoLiveKitchen" />
				</BlockVideo>
				<BlockWorkingCameras>
					<Camera src={camera} alt="camera" />
				</BlockWorkingCameras>
			</BlockCameras>
		</BlockLiveKitchen>
	);
};

export default LiveKitchen;
