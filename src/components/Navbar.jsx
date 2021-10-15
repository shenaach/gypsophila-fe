import {
    Notifications,
    Person,
    Search,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import {
    Navbar as NavbarBS,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Container,
} from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/images/Logobaru.svg";
import { Badge } from "@material-ui/core";

const StyledNavbar = styled(NavbarBS)`
    // background-color: #3F4D5A;
    z-index: 999;
    font-size: 18px;
    font-weight: 600;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    img {
        margin: -10px 0;
    }
`;

const StyledNavLink = styled(Nav.Link)`
    margin-right: 15px;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 4px;
    border-radius: 20px;
    margin-right: 15px;
`;
const Input = styled.input`
    border: none;
    width: 85%;
`;

const LoginMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    display: none;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
`;

const Navbar = () => {
    return (
        <div>
            <StyledNavbar fixed="top" expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <StyledNavbar.Brand href="#">
                        <img
                            src={"https://pbs.twimg.com/media/FBvst34VEAY6COa?format=png&name=120x120"}
                            width="95"
                            height=""
                            className="d-inline-block align-top "
                            alt="React Bootstrap logo"
                        />
                    </StyledNavbar.Brand>
                    <StyledNavbar.Toggle aria-controls="navbarScroll" />
                    <StyledNavbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "200px" }}
                            navbarScroll
                        >
                            <StyledNavLink href="#action1">
                                Beranda
                            </StyledNavLink>
                            <StyledNavLink href="#action2">Tentang</StyledNavLink>
                            <StyledNavLink href="#action3">Galeri</StyledNavLink>
                            <StyledNavLink href="#action4">MU Artist</StyledNavLink>
                            <StyledNavLink
                                className="d-lg-none d-sm-inline-block"
                                href="#action1"
                            >
                                Login
                            </StyledNavLink>
                            <StyledNavLink
                                className="d-lg-none d-sm-inline-block"
                                href="#action2"
                            >
                                Register
                            </StyledNavLink>
                        </Nav>

                        <SearchContainer>
                            <Search
                                style={{
                                    color: "gray",
                                    fontSize: 20,
                                    marginLeft: 5,
                                }}
                            />
                            <Input></Input>
                        </SearchContainer>
                        <Nav>
                            <StyledNavLink 
                                className="d-none d-lg-inline-block"
                                href="#action1"
                            >
                                Login
                            </StyledNavLink>
                            <StyledNavLink
                                className="d-none d-lg-inline-block"
                                href="#action2"
                            >
                                Register
                            </StyledNavLink>
                        </Nav>
                    </StyledNavbar.Collapse>
                    <LoginMenu>
                        <MenuItem>
                            <Badge badgeContent={4} color="gray">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                        <MenuItem>
                            <Badge badgeContent={4} color="gray">
                                <Notifications />
                            </Badge>
                        </MenuItem>
                        <MenuItem>
                            <NavDropdown
                                title={<Person style={{ color: "gray" }} />}
                                id="navbarScrollingDropdown"
                            >
                                <NavDropdown.Item href="#action3">
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </MenuItem>
                    </LoginMenu>
                </Container>
            </StyledNavbar>
        </div>
    );
};

export default Navbar;
