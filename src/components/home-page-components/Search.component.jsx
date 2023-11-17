import { IconButton, InputBase, Paper } from "@mui/material";






import searchIcon from "../../assets/Search.png";
function Search() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 350,
        borderRadius: 6,
        background:"linear-gradient(180deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.50) 100%)"
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <img src={searchIcon} alt="searchIcon" />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "Search",style:{color:"#000000",zIndex:"11",font:"inter"} }}
      />
    </Paper>
  );
}

export default Search;
