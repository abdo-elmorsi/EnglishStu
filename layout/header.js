import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage, darkMode } from "../lib/slices/config";
// translation
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

// import MobildeOffcanvas from "./mobile-offcanvas";
import HorizontalNav from "./horizontal-nav";

const HeaderStyle3 = () => {
    const { data, status } = useSession();
    // const { data, status } = useSession({ required: true });
    const { config } = useSelector((state) => state);
    const { t } = useTranslation("main");
    const { language } = config;
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.setAttribute(
            "dir",
            `${config.language === "ar" ? "rtl" : "ltr"}`
        );
        router.push(router.pathname, router.pathname, {
            locale: config.language,
        });

        config.darkMode
            ? document.body.classList.add("dark")
            : document.body.classList.remove("dark");
    }, [config.darkMode, config.language]);

    const toggleDarkMode = (e) => {
        e.preventDefault();
        dispatch(darkMode());
    };

    const toggleLanguage = (e) => {
        e.preventDefault();
        dispatch(changeLanguage(language === "en" ? "ar" : "en"));
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
                        <Nav as="ul" >
                            <Dropdown
                                as="li"
                                className="nav-item d-flex align-items-center"
                            >
                                <button
                                    onClick={toggleDarkMode}
                                    className="bg-transparent border-0 mx-2"
                                >
                                    {config?.darkMode ? (
                                        <div className="moon">
                                            <svg
                                                version="1.1"
                                                id="Capa_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 499.712 499.712"
                                                width="22"
                                            >
                                                <path
                                                    fill="#FFD93B"
                                                    d="M146.88,375.528c126.272,0,228.624-102.368,228.624-228.64c0-55.952-20.16-107.136-53.52-146.88
	C425.056,33.096,499.696,129.64,499.696,243.704c0,141.392-114.608,256-256,256c-114.064,0-210.608-74.64-243.696-177.712
	C39.744,355.368,90.944,375.528,146.88,375.528z"
                                                />
                                                <path
                                                    fill="#F4C534"
                                                    d="M401.92,42.776c34.24,43.504,54.816,98.272,54.816,157.952c0,141.392-114.608,256-256,256
	c-59.68,0-114.448-20.576-157.952-54.816c46.848,59.472,119.344,97.792,200.928,97.792c141.392,0,256-114.608,256-256
	C499.712,162.12,461.392,89.64,401.92,42.776z"
                                                />
                                                <g>
                                                    <polygon
                                                        fill="#FFD83B"
                                                        points="128.128,99.944 154.496,153.4 213.472,161.96 170.8,203.56 180.864,262.296
		128.128,234.568 75.376,262.296 85.44,203.56 42.768,161.96 101.744,153.4 	"
                                                    />
                                                    <polygon
                                                        fill="#FFD83B"
                                                        points="276.864,82.84 290.528,110.552 321.104,114.984 298.976,136.552 304.208,166.984
		276.864,152.616 249.52,166.984 254.752,136.552 232.624,114.984 263.2,110.552 	"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                    ) : (
                                        <div className="sun">
                                            <svg
                                                version="1.1"
                                                id="Capa_1"
                                                viewBox="0 0 512 512"
                                                width="22"
                                            >
                                                <g>
                                                    <circle
                                                        fill="#FFD347"
                                                        cx="255.997"
                                                        cy="255.997"
                                                        r="144.824"
                                                    />
                                                    <path
                                                        fill="#FFD347"
                                                        d="M256,56.849c-4.273,0-7.737-3.463-7.737-7.737V7.737C248.263,3.463,251.727,0,256,0
		s7.737,3.463,7.737,7.737v41.376C263.737,53.386,260.273,56.849,256,56.849z"
                                                    />
                                                    <path
                                                        fill="#FFD347"
                                                        d="M152.563,84.568c-2.674,0-5.274-1.387-6.707-3.869l-20.687-35.832
		c-2.136-3.7-0.869-8.432,2.832-10.569c3.701-2.134,8.432-0.87,10.569,2.832l20.687,35.832c2.136,3.7,0.869,8.432-2.832,10.569
		C155.206,84.234,153.876,84.568,152.563,84.568z"
                                                    />
                                                    <path
                                                        fill="#FFD347"
                                                        d="M76.823,160.294c-1.312,0-2.643-0.334-3.861-1.038L37.13,138.569
		c-3.7-2.136-4.968-6.868-2.832-10.569c2.136-3.701,6.868-4.967,10.569-2.832l35.832,20.687c3.7,2.136,4.968,6.868,2.832,10.569
		C82.097,158.907,79.497,160.294,76.823,160.294z"
                                                    />
                                                    <path
                                                        fill="#FFD347"
                                                        d="M49.112,263.737H7.737C3.464,263.737,0,260.274,0,256s3.464-7.737,7.737-7.737h41.376
		c4.273,0,7.737,3.463,7.737,7.737S53.385,263.737,49.112,263.737z"
                                                    />
                                                    <path
                                                        fill="#FFD347"
                                                        d="M41.005,387.869c-2.674,0-5.274-1.387-6.707-3.869c-2.136-3.7-0.869-8.432,2.832-10.569
		l35.832-20.687c3.7-2.134,8.432-0.87,10.569,2.832c2.136,3.7,0.869,8.432-2.832,10.569l-35.832,20.687
		C43.648,387.535,42.317,387.869,41.005,387.869z"
                                                    />
                                                    <path
                                                        fill="#FFD347"
                                                        d="M131.862,478.74c-1.312,0-2.643-0.334-3.861-1.038c-3.7-2.136-4.968-6.868-2.832-10.569
		l20.687-35.832c2.136-3.701,6.868-4.967,10.569-2.832c3.7,2.136,4.968,6.868,2.832,10.569l-20.687,35.832
		C137.136,477.352,134.536,478.74,131.862,478.74z"
                                                    />
                                                    <path
                                                        fill="#FFD347"
                                                        d="M256,512c-4.273,0-7.737-3.463-7.737-7.737v-41.376c0-4.274,3.464-7.737,7.737-7.737
		s7.737,3.463,7.737,7.737v41.376C263.737,508.537,260.273,512,256,512z"
                                                    />
                                                    <path
                                                        fill="#FFD347"
                                                        d="M380.138,478.74c-2.674,0-5.274-1.387-6.707-3.869l-20.687-35.832
		c-2.136-3.7-0.869-8.432,2.832-10.569c3.7-2.134,8.432-0.87,10.569,2.832l20.687,35.832c2.136,3.7,0.869,8.432-2.832,10.569
		C382.781,478.406,381.451,478.74,380.138,478.74z"
                                                    />
                                                    <path
                                                        fill="#FFD347"
                                                        d="M470.995,387.869c-1.312,0-2.643-0.334-3.861-1.038l-35.832-20.687
		c-3.7-2.136-4.968-6.868-2.832-10.569c2.136-3.701,6.868-4.967,10.569-2.832l35.832,20.687c3.7,2.136,4.968,6.868,2.832,10.569
		C476.269,386.481,473.669,387.869,470.995,387.869z"
                                                    />
                                                    <path
                                                        fill="#FFD347"
                                                        d="M504.263,263.737h-41.376c-4.273,0-7.737-3.463-7.737-7.737s3.464-7.737,7.737-7.737h41.376
		c4.273,0,7.737,3.463,7.737,7.737S508.536,263.737,504.263,263.737z"
                                                    />
                                                    <path
                                                        fill="#FFD347"
                                                        d="M435.177,160.294c-2.674,0-5.274-1.387-6.707-3.869c-2.136-3.7-0.869-8.432,2.832-10.569
		l35.832-20.687c3.7-2.134,8.432-0.87,10.569,2.832c2.136,3.7,0.869,8.432-2.832,10.569l-35.832,20.687
		C437.82,159.96,436.489,160.294,435.177,160.294z"
                                                    />
                                                    <path
                                                        fill="#FFD347"
                                                        d="M359.437,84.568c-1.312,0-2.643-0.334-3.861-1.038c-3.7-2.136-4.968-6.868-2.832-10.569
		l20.687-35.832c2.136-3.701,6.868-4.967,10.569-2.832c3.7,2.136,4.968,6.868,2.832,10.569l-20.687,35.832
		C364.711,83.181,362.11,84.568,359.437,84.568z"
                                                    />
                                                </g>
                                                <path
                                                    fill="#FFBE31"
                                                    d="M256,111.18c-5.242,0-10.418,0.286-15.516,0.828c72.685,7.743,129.303,69.252,129.303,143.991
	s-56.619,136.249-129.303,143.992c5.098,0.544,10.273,0.828,15.516,0.828c79.982,0,144.82-64.838,144.82-144.82
	S335.983,111.18,256,111.18z"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </button>
                            </Dropdown>
                            <Dropdown
                                as="li"
                                className="nav-item d-flex align-items-center"
                            >
                                <button
                                    className={`border-0 bg-transparent `}
                                    onClick={toggleLanguage}
                                >
                                    {config?.language === "en" ? (
                                        <Image
                                            src={"https://flagcdn.com/us.svg"}
                                            width={"25px"}
                                            height={"17"}
                                            alt=""
                                        />
                                    ) : (
                                        <Image
                                            src={"https://flagcdn.com/eg.svg"}
                                            width={"25px"}
                                            height={"17"}
                                            alt=""
                                        />
                                    )}
                                </button>
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
                                        <h6 className="mb-0 caption-title">
                                            {data ? data.user.name : "Gust"}
                                        </h6>
                                        <p className="mb-0 caption-sub-title">
                                            {data
                                                ? data.user.email
                                                : "Gust email"}
                                        </p>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                    className="dropdown-menu-end shadow"
                                    style={{ top: "94%" }}
                                    aria-labelledby="navbarDropdown"
                                >
                                    <Dropdown.Divider />
                                    {status !== "loading" &&
                                        (status !== "authenticated" ? (
                                            <Dropdown.Item
                                                as={"button"}
                                                onClick={signIn}
                                                className="px-0"
                                            >
                                                <a className="d-block dropdown-item">
                                                    {t("SignIn")}
                                                </a>
                                            </Dropdown.Item>
                                        ) : (
                                            <Dropdown.Item
                                                as={"button"}
                                                onClick={signOut}
                                                className="px-0"
                                            >
                                                <a className="d-block dropdown-item">
                                                    {t("SignOut")}
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
