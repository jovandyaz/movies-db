import "./Navbar.css";
import { Box, Toolbar, AppBar } from "@mui/material";
import Image from "next/image";
import { HiOutlineUserCircle } from "react-icons/hi";
import DaCodesLogo from "../../../public/assets/DacodesLogo2.svg";

export const Navbar = (): JSX.Element => {
  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar className="nav-toolbar">
        <Image
          src={DaCodesLogo}
          height={64}
          alt="DaCodes Logo"
          priority={true}
        />
        <Box className="nav-login">
          <HiOutlineUserCircle size={44} strokeWidth={1} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
