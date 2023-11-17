import { Box, Typography } from "@mui/material";

import Navbar from "../components/home-page-components/Navbar";

import bgImage from "../assets/UpPage.jpg";
import RondomText from "../components/home-page-components/RondomText";
import RondomTextEnglish from "../components/home-page-components/RondomTextEnglish";

function HomePage() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        backgroundSize: "100%",
        height: "100vh",
        width: "100vw",
      }}
    >
      
      <Navbar />
      <Box
        sx={{
          display: "flex",
      
        }}
      >
        <Box
          sx={{
            height: "100vh",
            width: "50vw",
            backdropFilter: "blur(8px)",
            display: "flex",
            justifyContent: "flex-end",
            position:"relative",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              backgroundImage: `url(${bgImage})`,

              backgroundPosition: "center",
              backgroundSize: "100%",
              color: "transparent",
              display: "inline-block",
              backgroundClip: "text",
              fontSize: "150px",
              fontWeight: "normal",
              lineHeight: 1,
              marginRight: "50px",
              fontFamily: "Inter",
            }}
          >
            Find
          </Typography>
          <RondomTextEnglish/>
        </Box>
        <Box
          sx={{
            height: "100vh",
            width: "50vw",

            display: "flex",
            justifyContent: "flex-start",
            position:"relative",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              display: "inline-block",
              backgroundClip: "text",
              fontSize: "100px",
              fontWeight: "400",
              marginLeft: "50px",
              marginTop: "200px",
              color: "#fff",
              fontFamily: "Inter",
              fontWeight:"normal",
            }}
          >
            Hope
          </Typography>
          <RondomText/>
        </Box>
      </Box>
     
    </Box>
  );
}

export default HomePage;
