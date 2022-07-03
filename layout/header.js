import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "../lib/slices/config";

import HorizontalNav from "./horizontal-nav";

const HeaderStyle3 = () => {
    const { data, status } = useSession();
    const { config } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        config.darkMode
            ? document.body.classList.add("dark")
            : document.body.classList.remove("dark");
    }, [config.darkMode]);

    const toggleDarkMode = (e) => {
        e.preventDefault();
        dispatch(darkMode());
    };
    return (
        <>
            <Navbar expand="lg" variant="light" className="nav iq-navbar">
                <Container fluid className="navbar-inner">
                    <Link href="/">
                        <a className="d-flex">
                            <svg
                                width="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="-0.757324"
                                    y="19.2427"
                                    width="28"
                                    height="4"
                                    rx="2"
                                    transform="rotate(-45 -0.757324 19.2427)"
                                    fill="currentColor"
                                />
                                <rect
                                    x="7.72803"
                                    y="27.728"
                                    width="28"
                                    height="4"
                                    rx="2"
                                    transform="rotate(-45 7.72803 27.728)"
                                    fill="currentColor"
                                />
                                <rect
                                    x="10.5366"
                                    y="16.3945"
                                    width="16"
                                    height="4"
                                    rx="2"
                                    transform="rotate(45 10.5366 16.3945)"
                                    fill="currentColor"
                                />
                                <rect
                                    x="10.5562"
                                    y="-0.556152"
                                    width="28"
                                    height="4"
                                    rx="2"
                                    transform="rotate(45 10.5562 -0.556152)"
                                    fill="currentColor"
                                />
                            </svg>
                            <h4 className="mx-2">EnglishStu</h4>
                        </a>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarSup">
                        <span className="navbar-toggler-icon">
                            <span className="navbar-toggler-bar bar1 mt-2"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </span>
                    </Navbar.Toggle>
                    <Navbar.Collapse
                        id="navbarSup"
                        className="justify-content-end"
                    >
                        <Nav as="ul">
                            <Dropdown
                                as="li"
                                style={{
                                    cursor: "pointer",
                                }}
                                className="nav-item d-flex align-items-center"
                                onClick={toggleDarkMode}
                            >
                                {config.darkMode && (
                                    <BsMoonStarsFill
                                        color="yellow"
                                        fontSize={"1.2rem"}
                                    />
                                )}
                                {!config.darkMode && (
                                    <BsFillSunFill
                                        color="yellow"
                                        fontSize={"1.2rem"}
                                    />
                                )}
                            </Dropdown>
                            <Dropdown
                                as="li"
                                className="nav-item d-flex align-items-center"
                            >
                                <Dropdown.Toggle
                                    variant="nav-link py-0 d-flex align-items-center"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <Image
                                        src={`${
                                            data
                                                ? data.user.image
                                                : "/assets/images/avatars/01.png"
                                        }`}
                                        width={40}
                                        height={40}
                                        alt="User-Profile"
                                        className="img-fluid avatar avatar-rounded avatar-rounded"
                                    />
                                    <div className="caption ms-3 d-none d-md-block text-start">
                                        <h5 className="caption-title">
                                            {data ? data?.user?.name : "Gust"}
                                        </h5>
                                        <span className="caption-sub-title">
                                            {data && data?.user?.email}
                                        </span>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                    className="dropdown-menu-end shadow"
                                    style={{ top: "94%" }}
                                    aria-labelledby="navbarDropdown"
                                >
                                    <Dropdown.Divider />
                                    {status !== "loading" &&
                                        data?.user?.email ==
                                            "abdelrahmandiv@gmail.com" && (
                                            <Dropdown.Item
                                                as={Link}
                                                href={"/admin"}
                                                className="px-0"
                                            >
                                                <a className="d-block dropdown-item">
                                                    Admin
                                                </a>
                                            </Dropdown.Item>
                                        )}
                                    {status !== "loading" &&
                                        (status !== "authenticated" ? (
                                            <Dropdown.Item
                                                as={"button"}
                                                onClick={signIn}
                                                className="px-0"
                                            >
                                                <a className="d-block dropdown-item">
                                                    Sign In
                                                </a>
                                            </Dropdown.Item>
                                        ) : (
                                            <Dropdown.Item
                                                as={"button"}
                                                onClick={signOut}
                                                className="px-0"
                                            >
                                                <a className="d-block dropdown-item">
                                                    Sign Out
                                                </a>
                                            </Dropdown.Item>
                                        ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="navbar dual-horizontal mx-md-auto">
                <HorizontalNav />
            </div>
        </>
    );
};

export default HeaderStyle3;
