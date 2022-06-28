import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

const HorizontalNav = () => {
    //router
    let { pathname } = useRouter();

    return (
        <>
            <Navbar
                expand="md"
                id="navbar_main"
                className="  hover-nav horizontal-nav mx-auto"
            >
                <Container fluid>
                    <Nav className="justify-content-around">
                        <Nav.Item as="li">
                            <Link href="/">
                                <a
                                    className={`${
                                        pathname === "/" ? "active" : ""
                                    } nav-link `}
                                    style={{
                                        minWidth: "max-content",
                                    }}
                                >
                                    Home
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link href="/grammar">
                                <a
                                    className={`${
                                        pathname === "/grammar" ? "active" : ""
                                    } nav-link `}
                                    style={{
                                        minWidth: "max-content",
                                    }}
                                >
                                    Grammar
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link href="/vocabulary">
                                <a
                                    className={`${
                                        pathname === "/vocabulary"
                                            ? "active"
                                            : ""
                                    } nav-link `}
                                    style={{
                                        minWidth: "max-content",
                                    }}
                                >
                                    Vocabulary
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link href="/kids">
                                <a
                                    className={`${
                                        pathname === "/kids" ? "active" : ""
                                    } nav-link `}
                                    style={{
                                        minWidth: "max-content",
                                    }}
                                >
                                    Kids
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link href="/vocabulary/collocations">
                                <a
                                    className={`${
                                        pathname === "/vocabulary/collocations"
                                            ? "active"
                                            : ""
                                    } nav-link `}
                                    style={{
                                        minWidth: "max-content",
                                    }}
                                >
                                    Collocations
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link href="/grammar/tenses">
                                <a
                                    className={`${
                                        pathname === "/grammar/tenses"
                                            ? "active"
                                            : ""
                                    } nav-link `}
                                    style={{
                                        minWidth: "max-content",
                                    }}
                                >
                                    Verb Tenses
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link href="/vocabulary/idioms">
                                <a
                                    className={`${
                                        pathname === "/vocabulary/idioms"
                                            ? "active"
                                            : ""
                                    } nav-link `}
                                    style={{
                                        minWidth: "max-content",
                                    }}
                                >
                                    idioms
                                </a>
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default HorizontalNav;
