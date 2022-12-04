import { styled } from "@mui/material";
import React, { FC } from "react";
import toque from "src/images/svg/toque.svg";
import shirt from "src/images/svg/shirt.svg";

const WorkingСhefs: FC = () => {
	const BlockWorkingСhefs = styled("div")({
		width: "173px",
		height: "56px",
		background: "#0F2439",
		borderRadius: "7px",
		marginTop: "20px",
		boxSizing: "border-box",
		padding: "10px 13px",
	});

	const Block = styled("div")({
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	});

	const ShefImage = styled("div")({});

	const Toque = styled("img")({
		marginLeft: "2px",
		display: "block",
	});
	const Shirt = styled("img")({
		display: "block",
	});

	const NumberOfCooks = styled("div")({
		width: "36px",
		height: "16px",
		background: "#4B2C57",
		borderRadius: "3px",
		fontWeight: "700",
		fontSize: "10px",
		color: "#FA59C7",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	});

	const NameBlock = styled("h2")({
		fontFamily: "Roboto",
		fontWeight: "400",
		fontSize: "13px",
		color: "#7E89A8",
	});

	return (
		<BlockWorkingСhefs>
			<Block>
				<ShefImage>
					{" "}
					<Toque src={toque} alt="toque" />
					<Shirt src={shirt} alt="shirt" />
				</ShefImage>
				<NumberOfCooks>05</NumberOfCooks>
				<NameBlock>Chef Working</NameBlock>
			</Block>
		</BlockWorkingСhefs>
	);
};

export default WorkingСhefs;
