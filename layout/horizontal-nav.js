import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const HorizontalNav = () => {
    const { t } = useTranslation("main");
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
                                    {t("home")}
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
                                    {t("grammar")}
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
                                    {t("collocations")}
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
                                    {t("phrasal_verbs")}
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
                                    {t("idioms")}
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link href="/test_yourself">
                                <a
                                    className={`${
                                        router.pathname === "/test_yourself"
                                            ? "active"
                                            : ""
                                    } nav-link `}
                                    style={{
                                        minWidth: "max-content",
                                    }}
                                >
                                    {t("test_yourself")}
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
