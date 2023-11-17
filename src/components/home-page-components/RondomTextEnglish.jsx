import { Box, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'

const RondomTextEnglish = () => {
    const rondomArr=["Finding your Lost","Feeling Better","Stay Calm","Feel Confidence "]
 

    const [RondomText,setRondomText]=useState("Finding your Lost")
   
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * rondomArr.length);
        setRondomText(rondomArr[index]);
     
    }, []);
  
    useEffect(() => {
        const intervalID = setInterval(shuffle, 3000);
        return () => clearInterval(intervalID);
    }, [shuffle])


    // 


  return (
    <Box sx={{position:"absolute",bottom:"20px",left:"30px"}}>
      <Typography sx={{
        fontFamily: "Inter",
        fontSize: "30px",
        fontWeight: "400",
        lineHeight: "normal",
        textAlign: "left",
        transition:".5s",
        color:"#fff",
        fontStyle:"normal",
        textTransform:"capitalize",
        
      }}>
   We Here To help
You &nbsp;    
<span style={{
    background:  "linear-gradient(to top, #D299C2, #FEF9D7)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
 color:"transparent",
    WebkitTextFillColor: "transparent",
    WebkitTextFillColor: "text",transition:".5s"
}}>{RondomText}</span>
      </Typography>
    </Box>
  )
}

export default RondomTextEnglish
