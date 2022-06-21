import React from "react";
import Link from "next/link";
// translation
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Button } from "react-bootstrap";

import { motion } from "framer-motion";
import { slideDown } from "../helpers/Animation";

import ColorSwitcher from "../components/ColorSwitcher";
export default function Index() {
    return (
        <>
            <motion.div
                variants={slideDown}
                initial="hidden"
                animate="visible"
                transition={{
                    ease: "easeOut",
                    duration: 0.6,
                    delay: 0.6,
                }}
                className="card p-4 d-flex justify-content-center align-items-center flex-column"
            >
                <h4>LEARN</h4>
                <h1 className="fw-bold">
                    <ColorSwitcher text="ENGLISH" />
                </h1>
                <h4>ONLINE</h4>
                <Link href="/grammar">
                    <a>
                        <Button className="mt-4" variant="primary" size="lg">
                            Get Started
                        </Button>
                    </a>
                </Link>
            </motion.div>
        </>
    );
}
// translation ##################################
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["main"])),
        },
    };
}
// translation ##################################
