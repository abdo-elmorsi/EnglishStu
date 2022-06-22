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
                                    Home
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
                                    Grammar
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
                                    Vocabulary
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link href="/kids">
                                <a
                                    className={`${
                                        router.pathname === "/kids"
                                            ? "active"
                                            : ""
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
                                        router.pathname ===
                                        "/vocabulary/collocations"
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
                            <Link href="/grammar/verb-tenses">
                                <a
                                    className={`${
                                        router.pathname ===
                                        "/grammar/verb-tenses"
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
