import React, { useState } from "react";
import { data } from "../SalesGraph/salesMockData";
import { SalesGraphModal } from "./Modal";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { styled } from "@mui/system";

const BlockSalesGraph = styled("div")({
  width: "31%",
  borderRadius: "6px",
  fontSize: "10px",
  border: "0.5px solid #153453",
  background: "#081A2C",

  margin: "17px 17px 0px 18px",
  "@media (max-width:1900px)": {
    margin: "15px 0px 0px 14px",
  },
});

const BlockMain = styled("div")({
  padding: "19px 25px",
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
});

const BlockMonth = styled("span")({
  width: "147px",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "21px",
  color: "#FFFFFF",
});

const BlockDateMain = styled("div")({
  display: "flex",
  flexWrap: "wrap",
});

const BlockCalIcon = styled("div")({
  cursor: "pointer",
  color: "#869AAF",
});

const BlockDate = styled("div")({
  alignSelf: "center",
  marginRight: "5px",
  fontSize: "12px",
  color: "#869AAF",
});

const SalesGraph = () => {
  const [dataWindow, setDataWindow] = useState<boolean>(false);

  const handleOpenDateModal: React.MouseEventHandler<
    SVGSVGElement
  > = (): void => {
    setDataWindow((prevState) => !prevState);
    console.log(dataWindow);
  };

  return (
    <BlockSalesGraph>
      <BlockMain>
        <BlockMonth>September 2020</BlockMonth>
        <BlockDateMain>
          <BlockDate>Change date</BlockDate>
          <BlockCalIcon>
            <CalendarTodayIcon onClick={handleOpenDateModal} />
          </BlockCalIcon>
        </BlockDateMain>
      </BlockMain>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <Legend />
          <CartesianGrid
            opacity={100}
            vertical
            horizontal={false}
            stroke="#0C1E32"
          />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="sum"
            stroke="#8847D5"
            strokeWidth={3}
            fill="#151F3D"
          />
        </AreaChart>
      </ResponsiveContainer>
      <SalesGraphModal dataWindow={dataWindow} setDataWindow={setDataWindow} />
    </BlockSalesGraph>
  );
};

export default SalesGraph;
