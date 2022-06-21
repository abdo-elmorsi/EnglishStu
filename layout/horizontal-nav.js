import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

const HorizontalNav = () => {
    //router
    let router = useRouter();

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
                                        router.pathname === "/" ? "active" : ""
                                    } nav-link `}
                                    style={{
                                        minWidth: "max-content",
                                    }}
                                >
                                    home
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link href="/grammar">
                                <a
                                    className={`${
                                        router.pathname === "/grammar"
                                            ? "active"
                                            : ""
                                    } nav-link `}
                                    style={{
                                        minWidth: "max-content",
                                    }}
                                >
                                    grammar
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link href="/vocabulary">
                                <a
                                    className={`${
                                        router.pathname === "/vocabulary"
                                            ? "active"
                                            : ""
                                    } nav-link `}
                                    style={{
                                        minWidth: "max-content",
                                    }}
                                >
                                    Vocabulary{" "}
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link href="/kids/numbers">
                                <a
                                    className={`${
                                        router.pathname === "/kids/numbers"
                                            ? "active"
                                            : ""
                                    } nav-link `}
                                    style={{
                                        minWidth: "max-content",
                                    }}
                                >
                                    Numbers
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link href="/vocabulary/collocations">
                                <a
                                    className={`${
                                        router.pathname ===
                                        "/vocabulary/collocations"
                                            ? "active"
                                            : ""
                                    } nav-link `}
                                    style={{
                                        minWidth: "max-content",
                                    }}
                                >
                                    collocations
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link href="/vocabulary/phrasal-verbs">
                                <a
                                    className={`${
                                        router.pathname ===
                                        "/vocabulary/phrasal-verbs"
                                            ? "active"
                                            : ""
                                    } nav-link `}
                                    style={{
                                        minWidth: "max-content",
                                    }}
                                >
                                    Phrasal verbs
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link href="/vocabulary/idioms">
                                <a
                                    className={`${
                                        router.pathname === "/vocabulary/idioms"
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
