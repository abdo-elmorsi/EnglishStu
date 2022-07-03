import React, { useCallback, useEffect } from "react";
import "../styles/globals.scss";
import store from "../lib";
import { Provider } from "react-redux";
import { FaArrowUp } from "react-icons/fa";

import { createTheme } from "react-data-table-component";

import { ThemeProvider } from "react-bootstrap";
import SSRProvider from "react-bootstrap/SSRProvider";

import NextNprogress from "nextjs-progressbar";

import { SessionProvider } from "next-auth/react";

import Layout from "../layout";
import Meta from "../components/meta";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    createTheme(
        "solarized",
        {
            text: {
                primary: "#268bd2",
                secondary: "#268bd2",
            },
            background: {
                default: "#222738",
            },
        },
        "dark"
    );

    const setSize = useCallback(() => {
        const docStyle = document.documentElement.style;
        window.innerWidth < 425
            ? (docStyle.fontSize = `${(
                  (window.innerWidth * 0.1122) /
                  3
              ).toFixed(1)}px`)
            : (docStyle.fontSize = "16px");
    }, []);

    const ScrollToTop = useCallback((e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        window.addEventListener("resize", setSize);
        window.addEventListener("orientationchange", setSize);
        return () => {
            window.removeEventListener("resize", setSize);
            window.removeEventListener("orientationchange", setSize);
        };
    }, [setSize]);

    useEffect(() => {
        const progressPath = document.querySelector(
            ".progress-wrap .progress-circle path"
        );
        const pathLength = progressPath.getTotalLength();
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        const updateProgress = function () {
            const scroll = window.pageYOffset;
            const height =
                document.documentElement.offsetHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;
            if (scroll > 250) {
                document
                    .querySelector(".progress-wrap")
                    .classList.add("active-progress");
            } else {
                document
                    .querySelector(".progress-wrap")
                    .classList.remove("active-progress");
            }
        };
        updateProgress();
        window.addEventListener("scroll", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);
        };
    }, []);

    return (
        <SessionProvider session={session}>
            <ThemeProvider>
                <SSRProvider>
                    <Provider store={store}>
                        <Meta />
                        <NextNprogress
                            color="blue"
                            startPosition={0.3}
                            stopDelayMs={200}
                            height={4}
                            showOnShallow={true}
                        />
                        <ToastContainer
                            position="top-center"
                            autoClose={4000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                        <div onClick={ScrollToTop} className="progress-wrap">
                            <div>
                                <FaArrowUp
                                    title="scroll to top"
                                    size={"1em"}
                                    className="iconify"
                                />
                            </div>
                            <div>
                                <svg
                                    className="progress-circle"
                                    width="100%"
                                    height="100%"
                                    viewBox="-1 -1 102 102"
                                >
                                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
                                </svg>
                            </div>
                        </div>
                        {process.env.NODE_ENV === "production" && (
                            <p
                                onClick={(e) => e.target.remove()}
                                id="development"
                            >{`You may find some mistakes because it's still under development`}</p>
                        )}
                    </Provider>
                </SSRProvider>
            </ThemeProvider>
        </SessionProvider>
    );
}

// export default MyApp
export default MyApp;
