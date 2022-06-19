import React from "react";
import Image from "next/image";
// translation
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Button, Card, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";
import { slideDown, slideUp } from "../helpers/Animation";

import Meta from "../components/meta";
import ColorSwitcher from "../components/ColorSwitcher";
import { useRouter } from "next/router";
const ImageB = "/assets/images/homePageImageB.jpg";
const ImageL = "/assets/images/homePageImageL.jpg";

export default function Index() {
    const router = useRouter();
    const { darkMode } = useSelector((state) => state.config);

    return (
        <>
            <Meta title="English Stu | Home" />

            <Card className="mb-5">
                <Row>
                    <motion.div
                        variants={slideDown}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            ease: "easeOut",
                            duration: 0.6,
                            delay: 0.6,
                        }}
                        className="col-sm-12 col-md-6 Card p-4 d-flex justify-content-center align-items-center flex-column"
                    >
                        <h4>LEARN</h4>
                        <h1 className="fw-bold">
                            <ColorSwitcher text="EN" />G
                            <ColorSwitcher text="L" />I
                            <ColorSwitcher text="SH" />
                        </h1>
                        <h4>ONLINE</h4>
                        <Button
                            onClick={() => router.push("/grammar/basics")}
                            className="mt-4"
                            variant="primary"
                            size="lg"
                        >
                            GET STARTED
                        </Button>
                    </motion.div>
                    <motion.div
                        variants={slideUp}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            ease: "easeOut",
                            duration: 0.6,
                            delay: 0.6,
                        }}
                        className="col-sm-12 col-md-6 Card d-none d-md-block"
                    >
                        <Image
                            src={darkMode ? ImageL : ImageB}
                            width={600}
                            height={600}
                            layout="responsive"
                            alt="homeBg"
                        />
                    </motion.div>
                </Row>
            </Card>
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
