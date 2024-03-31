import React from "react";
import UploadIcon from "@mui/icons-material/Upload";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import CachedIcon from "@mui/icons-material/Cached";
import SearchInp from "./SearchInp";

const timer = [
  {
    value: "15Min",
  },
  {
    value: "30Min",
  },
  {
    value: "45Min",
  },
  {
    value: "1Hr",
  },
];

const label = { inputProps: { "aria-label": "Switch demo" } };

const Header = () => {
  return (
    <div className="flex item-center justify-between ">
      <div className="flex item-center justify-evenly mt-2 pr-5">
        <div className="flex mt-4">
          <UploadIcon />
          <p>Keep Local Path </p>
        </div>
        <div className="flex mt-4">
          <Switch {...label} defaultChecked />
          <p>Auto Sync</p>
        </div>
        <div>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-select-currency" select label="Select">
              {timer.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </div>
        <div>
          <CachedIcon className="mt-4" />
        </div>
      </div>
      <div>
        <SearchInp />
      </div>
    </div>
  );
};

export default Header;
