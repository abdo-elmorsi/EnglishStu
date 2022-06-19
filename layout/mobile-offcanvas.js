import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Offcanvas, Nav, Accordion } from "react-bootstrap";
import { useTranslation } from "next-i18next";

const MobildeOffcanvas = () => {
    const { t } = useTranslation("main");
    //router
    let router = useRouter();

    const [show, setShow] = useState(false);
    const handleShow = () => setShow((prev) => !prev);
    const handleClose = () => setShow((prev) => !prev);
    return (
        <>
            <button
                data-trigger="navbar_main"
                className="d-xl-none btn btn-primary rounded-pill p-1 pt-0"
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
                className="mobile-offcanvas nav navbar navbar-expand-lg hover-nav horizontal-nav "
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
                        <h4 className="logo-title">English Stu</h4>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="navbar-nav">
                        <Nav.Item as="li">
                            <Link href="/">
                                <a
                                    className={`${
                                        router.pathname === "/" ? "fw-bold" : ""
                                    } nav-link px-2`}
                                >
                                    {t("home")}
                                </a>
                            </Link>
                        </Nav.Item>
                        <Accordion defaultActiveKey="0" bg="transparent">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    {t("grammar")}
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Nav.Item as="li">
                                        <Link href="/grammar/basics">
                                            <a
                                                className={`${
                                                    router.pathname ===
                                                    "/grammar/basics"
                                                        ? "fw-bold"
                                                        : ""
                                                } nav-link`}
                                            >
                                                {t("basics")}
                                            </a>
                                        </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link href="/grammar/tenses">
                                            <a
                                                className={`${
                                                    router.pathname ===
                                                    "/grammar/tenses"
                                                        ? "fw-bold"
                                                        : ""
                                                } nav-link `}
                                            >
                                                {t("tenses")}
                                            </a>
                                        </Link>
                                    </Nav.Item>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    {t("vocabulary")}
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Nav className="navbar-nav">
                                        <Nav.Item as="li">
                                            <Link href="/vocabulary/idioms">
                                                <a
                                                    className={`${
                                                        router.pathname ===
                                                        "/vocabulary/idioms"
                                                            ? "fw-bold"
                                                            : ""
                                                    } nav-link`}
                                                >
                                                    {t("idioms")}
                                                </a>
                                            </Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Link href="/vocabulary/collocations">
                                                <a
                                                    className={`${
                                                        router.pathname ===
                                                        "/vocabulary/collocations"
                                                            ? "fw-bold"
                                                            : ""
                                                    } nav-link`}
                                                >
                                                    {t("collocations")}
                                                </a>
                                            </Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Link href="/vocabulary/phrasal_verbs">
                                                <a
                                                    className={`${
                                                        router.pathname ===
                                                        "/vocabulary/phrasal_verbs"
                                                            ? "fw-bold"
                                                            : ""
                                                    } nav-link`}
                                                >
                                                    {t("phrasal_verbs")}
                                                </a>
                                            </Link>
                                        </Nav.Item>
                                    </Nav>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default MobildeOffcanvas;
