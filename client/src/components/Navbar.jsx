import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE , LOGIN_ROUTE, REGISTER_ROUTE, ADMIN_ROUTE, BASKET_ROUTE} from "../utils/consts";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../App";
import userIcon from "../assets/user.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const pages = ["Products", "Pricing", "Blog"];

const settings = ["Profile", "Account", "Dashboard", "Sign out"];

const unauthorizedSettings = [
    {id: 1, name: "Settings", path: '/settings'},
    {id: 2, name: "Sign In", path: LOGIN_ROUTE},
    {id: 3, name: "Sign Up", path: REGISTER_ROUTE},
]

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const navigate = useNavigate()
    const { user } = useContext(Context);

    const signOut = () => {

        // TODO: log out
        user.setUser({ isAuth: false, userData: {} })
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    useEffect(() => {
        handleCloseUserMenu()
    }, [navigate])

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                    >
                        <NavLink to={SHOP_ROUTE}> ONLINE SHOP </NavLink>
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>

                        <NavLink to={BASKET_ROUTE} className="hover:text-gray-300 transition-colors duration-500">
                            <ShoppingCartIcon />
                            <span>
                                My Basket
                            </span>
                        </NavLink>
                        <NavLink to={ADMIN_ROUTE}>
                            <button className="mx-5 p-1 border-2 border-white rounded">
                                ADMIN PAGE
                            </button>
                        </NavLink>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                                className="float-right"
                            >
                                <Avatar alt={user.name} src={userIcon} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            { user.user.isAuth
                                ?
                                <Box>
                                    <MenuItem>
                                        <Typography textAlign="center">
                                            Profile
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem>
                                        <Typography textAlign="center">
                                            Settings
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => signOut()}>
                                        <Typography textAlign="center">
                                            Sign Out
                                        </Typography>
                                    </MenuItem>
                                </Box>

                                : unauthorizedSettings.map((setting, i) => (
                                    <NavLink to={setting.path} key={i}>
                                        <MenuItem>
                                            <Typography textAlign="center">
                                                {setting.name}
                                            </Typography>
                                        </MenuItem>
                                    </NavLink>
                                ))
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
