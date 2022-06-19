import React from "react";
import { Offcanvas, Navbar, Container, Nav, Dropdown } from "react-bootstrap";
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
                className="mobile-offcanvas  hover-nav horizontal-nav mx-md-auto"
            >
                <Container fluid>
                    <Offcanvas.Header closeButton>
                        <Navbar.Brand>
                            <svg
                                width="30"
                                className="text-primary"
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
                            <h4 className="logo-title d-inline-block">
                                English Stu
                            </h4>
                        </Navbar.Brand>
                        <button className="btn-close float-end"></button>
                    </Offcanvas.Header>

                    <Nav>
                        <Nav.Item as="li">
                            <Link href="/">
                                <a
                                    className={`${
                                        router.pathname === "/" ? "active" : ""
                                    } nav-link`}
                                >
                                    {t("home")}
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Item>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        as={"a"}
                                        variant="primary"
                                        size="sm"
                                        type="button"
                                        id="dropdownMenuButtonSM"
                                        className={`${
                                            router.pathname.includes("grammar")
                                                ? "active"
                                                : ""
                                        } nav-link`}
                                    >
                                        {t("grammar")}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                        as="ul"
                                        aria-labelledby="dropdownMenuButtonSM"
                                    >
                                        <Dropdown.Item as="li">
                                            <Link href="/grammar/basics">
                                                <a
                                                    className={`${
                                                        router.pathname ===
                                                        "/grammar/basics"
                                                            ? "active"
                                                            : "bg-transparent border-1 border-bottom"
                                                    } nav-link `}
                                                >
                                                    {t("basics")}
                                                </a>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li">
                                            <Link href="/grammar/tenses">
                                                <a
                                                    className={`${
                                                        router.pathname ===
                                                        "/grammar/tenses"
                                                            ? "active"
                                                            : "bg-transparent border-1 border-bottom"
                                                    } nav-link`}
                                                >
                                                    {t("tenses")}
                                                </a>
                                            </Link>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Item>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Dropdown>
                                <Dropdown.Toggle
                                    as={"a"}
                                    variant="primary"
                                    size="sm"
                                    type="button"
                                    id="dropdownMenuButtonSM"
                                    className={`${
                                        router.pathname.includes("vocabulary")
                                            ? "active"
                                            : ""
                                    } nav-link`}
                                >
                                    {t("vocabulary")}
                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                    as="ul"
                                    aria-labelledby="dropdownMenuButtonSM"
                                >
                                    <Dropdown.Item as="li">
                                        <Link href="/vocabulary/idioms">
                                            <a
                                                className={`${
                                                    router.pathname ===
                                                    "/vocabulary/idioms"
                                                        ? "active"
                                                        : "bg-transparent border-1 border-bottom"
                                                } nav-link`}
                                            >
                                                {t("idioms")}
                                            </a>
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li">
                                        <Link href="/vocabulary/collocations">
                                            <a
                                                className={`${
                                                    router.pathname ===
                                                    "/vocabulary/collocations"
                                                        ? "active"
                                                        : "bg-transparent border-1 border-bottom"
                                                } nav-link`}
                                            >
                                                {t("collocations")}
                                            </a>
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li">
                                        <Link href="/vocabulary/phrasal_verbs">
                                            <a
                                                className={`${
                                                    router.pathname ===
                                                    "/vocabulary/phrasal_verbs"
                                                        ? "active"
                                                        : "bg-transparent border-1 border-bottom"
                                                } nav-link`}
                                            >
                                                {t("phrasal_verbs")}
                                            </a>
                                        </Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            {/* <button
                data-trigger="navbar_main"
                className="d-lg-none btn btn-primary rounded-pill p-1 pt-0"
                type="button"
                onClick={handleShow}
            >
                <svg width="20px" height="20px" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                    ></path>
                </svg>
            </button> 
            <Offcanvas
                show={show}
                onHide={handleClose}
                className=" mobile-offcanvas nav navbar navbar-expand-lg hover-nav horizontal-nav mx-md-auto"
            >
                <Offcanvas.Header closeButton>
                    <div className="navbar-brand">
                        <svg
                            width="30"
                            className="text-primary"
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
                        <h4 className="logo-title">Hope UI</h4>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                href="/"
                            >
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link "
                                href="/reports"
                            >
                                <a>Reports</a>
                            </Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas> */}
        </>
    );
};

export default HorizontalNav;
