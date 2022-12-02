import React, { useState } from "react";
import { data } from "../SalesGraph/salesMockData";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { styled } from "@mui/system";
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
import { Modal } from "./Modal";

const BlockSalesGraph = styled("div")({
  width: "31%",
  borderRadius: "6px",
  fontSize: "10px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  margin: "17px 0px 0px 18px",
  "@media (max-width:1900px)": {
    margin: "15px 0px 0px 14px",
  },
});

const SalesGraph = () => {
  const [dataWindow, setDataWindow] = useState(false);
  const handleChangeDate = (): void => {
    setDataWindow((prevState) => !prevState);
    console.log(dataWindow);
  };

  return (
    <BlockSalesGraph>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 25px",
          alignContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}>
          September 2020
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div
            style={{
              alignSelf: "center",
              marginRight: "5px",
              fontSize: "12px",
              color: "#869AAF",
            }}
          >
            Change date
          </div>
          <CalendarTodayIcon
            onClick={handleChangeDate}
            style={{ cursor: "pointer", color: "#869AAF" }}
          />
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={500}
          height={400}
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
      <Modal props={dataWindow} />
    </BlockSalesGraph>
  );
};

export default SalesGraph;
