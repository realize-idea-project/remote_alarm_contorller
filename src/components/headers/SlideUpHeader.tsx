import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  window?: () => Window;
  onClickIcon?: () => void;
}

export const SlideUpHeader = ({ window, onClickIcon }: Props) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 20,
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          sx={{
            height: 50,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => onClickIcon?.()}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="div">관리자 어플리케이션</Typography>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </React.Fragment>
  );
};
