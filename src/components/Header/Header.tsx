import { Home } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import headerStyles from "./HeaderStyles";
import { Link } from "react-router-dom";

const Header = () => {
    const styles = headerStyles()

    return (
        <div className={styles.header}>
            <IconButton onClick={() => window.location.href = '/'}>
                <Home fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Header;