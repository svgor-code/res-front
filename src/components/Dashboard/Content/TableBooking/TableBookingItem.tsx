import { Typography, Stack, Box } from '@mui/material'
import {FC} from 'react'
import {styled} from "@mui/system";

interface TableBookingItemProps {
    value: number;
    title: string;
}

const TableBookingItemValueBlock = styled('div')({
    borderRadius: "10px",
    backgroundColor: "#0F2439",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    textAlign: "center",
    padding: "27px 23px",
    marginBottom: "15px",
})

const TableBookingItemTitle = styled('span')({
    color:"#7E89A8",
    fontSize:"14px",
    textAlign: "center", 
})

const TableBookingValue = styled('p')({
    margin: "0px",
    width: "66px",
    color: "#FFFFFF", 
    fontSize: "60px",
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: "-0.05em",
})


const TableBookingItem: FC<TableBookingItemProps> = ({value, title}) => {
  return (
    <Stack>
        <TableBookingItemValueBlock>
            <TableBookingValue>{String(value).padStart(2, '0')}</TableBookingValue>
        </TableBookingItemValueBlock>
        <TableBookingItemTitle>{title}</TableBookingItemTitle>
    </Stack>
  )
}

export default TableBookingItem