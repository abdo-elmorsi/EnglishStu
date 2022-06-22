import React, { useCallback, useEffect } from "react";
import "../styles/globals.scss";
import store from "../lib";
import { Provider } from "react-redux";

import { createTheme } from "react-data-table-component";

import { ThemeProvider } from "react-bootstrap";
import SSRProvider from "react-bootstrap/SSRProvider";

import NextNprogress from "nextjs-progressbar";

import { SessionProvider } from "next-auth/react";

import Layout from "../layout";
import Meta from "../components/meta";

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

    // const editCursor = useCallback((e) => {
    //     const cursor = document.querySelector(".cursor");
    //     const { clientX: x, clientY: y } = e;
    //     cursor.style.left = x + "px";
    //     cursor.style.top = y + "px";
    // }, []);

    useEffect(() => {
        window.addEventListener("resize", setSize);
        window.addEventListener("orientationchange", setSize);
        // window.addEventListener("mousemove", editCursor);
        return () => {
            window.removeEventListener("resize", setSize);
            window.removeEventListener("orientationchange", setSize);
            // window.removeEventListener("mousemove", editCursor);
        };
    }, [setSize]);

    return (
        <SessionProvider session={session}>
            <ThemeProvider>
                <SSRProvider>
                    <Provider store={store}>
                        <Meta />
                        <NextNprogress
                            color="#1c68e6"
                            startPosition={0.3}
                            stopDelayMs={200}
                            height={4}
                            showOnShallow={true}
                        />
                        {/* <div className="cursor"></div> */}
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </Provider>
                </SSRProvider>
            </ThemeProvider>
        </SessionProvider>
    );
}

// export default MyApp
export default MyApp;
