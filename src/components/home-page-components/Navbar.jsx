import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import Logo from "./Logo";
import Search from "./Search.component";

import notification from "../../assets/Bell.png";
import bookMark from "../../assets/bookmark.png";
import vector from "../../assets/Vector.png";
import user from "../../assets/user.jpg";
import NavigateLinks from "./NavigateLinks";

function Navbar() {
  return (
    <AppBar color="transparent" sx={{minHeight:"70px", display: "flex",py:1}}>
      <Toolbar style={{ display: "flex",justifyContent:"space-between"}}>
       <Box sx={{ display: "flex",alignItems:"center",gap:"60px"}}>
       <Logo />
        <NavigateLinks/>
       </Box>
       
       <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
       <Box sx={{ display: "flex",gap:"30px"}}>
        <Search />
         <Box>
         <IconButton>
            <img src={bookMark} alt="bookMark" />
          </IconButton>
          <IconButton>
            <img src={notification} alt="notification" />
          </IconButton>
          <IconButton>
            <img src={vector} alt="vector" />
          </IconButton>
         </Box>
        </Box>
        <Box
          sx={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
          }}
        >
          <IconButton>
            <img
              style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              src={user}
              alt="vector"
            />
          </IconButton>
        </Box>
       </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
