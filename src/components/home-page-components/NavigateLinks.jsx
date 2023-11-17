import { Box, Link, List, ListItem, styled } from '@mui/material'
import React from 'react'
const Links = styled('a')({
    color: "#FFF",
    fontFamily: "Inter, sans-serif",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    textTransform: "capitalize",
}) 
const ListItemStyle = styled("li")({
width:'fit-content'
})
const NavigateLinks = () => {
  return (
   
      <List  sx={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"30px"}}>
        <ListItemStyle>
            <Links>الكل</Links>
        </ListItemStyle>
        <ListItemStyle >
            <Links>مفقودين</Links>
        </ListItemStyle>
        <ListItemStyle >
            <Links>حوادث</Links>
        </ListItemStyle>
        <ListItemStyle >
            <Links>ملاجئ</Links>
        </ListItemStyle>
        <ListItemStyle>
            <Links>متعلقات شخصية</Links>
        </ListItemStyle>
      </List>

  )
}

export default NavigateLinks
