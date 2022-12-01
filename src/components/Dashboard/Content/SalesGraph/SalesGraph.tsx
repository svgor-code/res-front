import React from 'react';
import {data}from '../SalesGraph/salesMockData'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {styled} from "@mui/system";
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from 'recharts';

const BlockSalesGraph = styled('div')({
    width: "31%",
    borderRadius: "6px",
    fontSize: '10px',
    border: "0.5px solid #153453",
    background: "#081A2C",
    margin: "17px 0px 0px 18px",
    "@media (max-width:1900px)":{
        margin: "15px 0px 0px 14px",
    }
});

const SalesGraph = () => {



    return (
        <BlockSalesGraph>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 25px'}}>
                <div style={{fontSize: '14px', color: 'ghostwhite'}}>September</div>
                <div >
Change date
                    <CalendarTodayIcon/>
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
                    <CartesianGrid strokeDasharray="1 1"  strokeOpacity={30}/>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />

                    <Area type="monotone" dataKey="sum" stroke="#8847D5" strokeWidth={3} fill="#151F3D"/>
                </AreaChart>
            </ResponsiveContainer>
        </BlockSalesGraph>
    );
};

export default SalesGraph;
