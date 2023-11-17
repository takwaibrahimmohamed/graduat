import { Box, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'

const RondomText = () => {
    const rondomArr=["الشعور بالثقة","إعطائك الأمل","الشعور بالإطمأنان","إيجاد ما فقدته"]
    const [RondomText,setRondomText]=useState("إعطائك الأمل")

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * rondomArr.length);
        setRondomText(rondomArr[index]);
     
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 3000);
        return () => clearInterval(intervalID);
    }, [shuffle])


 
  return (
    <Box sx={{position:"absolute",bottom:"20px",right:"30px"}}>
      <Typography sx={{
        fontFamily: "Inter",
        fontSize: "30px",
        fontWeight: "400",
        lineHeight: "36px",
        letterSpacing: "0em",
        textAlign: "right",
        transition:".5s"
        
      }}>
      نحن نتمني أن نساعدك
فى  &nbsp;    
<span style={{

background:"linear-gradient(to top, #FF9A9E, #FAD0C4,#FAD0C4)",
WebkitBackgroundClip: 'text',
WebkitTextFillColor: 'transparent',
    color:'transparent',
    webkitTextFillColor: "transparent",
    webkitBackgroundClip: "text",
    transition:".5s"
}}>{RondomText}</span>
      </Typography>
    </Box>
  )
}

export default RondomText
