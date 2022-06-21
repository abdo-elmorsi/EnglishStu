import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

// Firebase
import { db } from "../../lib/firebase/config";
import { collection, getDocs, orderBy } from "firebase/firestore";
// Bootstrap
import {
    Button,
    ListGroup,
    Row,
    Tooltip,
    OverlayTrigger,
    Col,
    Form,
} from "react-bootstrap";

// Translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Styles from "../../styles/IdiomsExpressions.module.scss";

// ColorSwitcher Component
import ColorSwitcher from "../../components/ColorSwitcher";

// Animation
import { motion } from "framer-motion";
import ScrollReveal from "../../helpers/scrollreveal";
import { animateList, slideUp } from "../../helpers/Animation";

// Speath
import { useSpeechSynthesis } from "react-speech-kit";

// Meta tags
import Meta from "../../components/meta";
// Toastify
import { toast } from "react-toastify";
export default function Idioms({ Idioms }) {
    const { darkMode } = useSelector((state) => state.config);
    const { t } = useTranslation("main");
    const { speak } = useSpeechSynthesis();
    const [filter, setfilter] = useState("");

    // filter data by search input
    const filteredData = useMemo(() => {
        if (filter === "") Idioms;
        return Idioms?.filter((item) => {
            return item.first.toLowerCase().includes(filter.toLowerCase());
        });
    }, [filter, Idioms]);

    const idiomsNames = [...Idioms.map((item) => item.first)].join(", ");

    return (
        <>
            <Meta
                title="English Stu | Idioms"
                description="English idioms, proverbs, and expressions are an important part of everyday English. They come up all the time in both written and spoken English. Because idioms don't always make sense literally, you'll need to familiarize yourself with the meaning and usage of each idiom. That may seem like a lot of work, but learning idioms is fun, especially when you compare English idioms"
                keywords={idiomsNames}
            />

            <div dir="ltr">
                <Row className="mb-2">
                    <Col sm="12" md="6">
                        <Form.Group>
                            <Form.Label htmlFor="search">
                                {t("search")}
                            </Form.Label>
                            <Form.Control
                                style={{ textAlign: "left" }}
                                value={filter}
                                type="search"
                                id="search"
                                onChange={(e) => setfilter(e.target.value)}
                                placeholder={`${t("name")}...`}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    {filteredData?.map((ele, i) => {
                        return (
                            <ScrollReveal key={i} variants={animateList}>
                                <motion.div variants={slideUp}>
                                    <ListGroup>
                                        <OverlayTrigger
                                            placement="top-start"
                                            delay={{
                                                show: 300,
                                                hide: 250,
                                            }}
                                            overlay={
                                                <Tooltip id="button-tooltip">
                                                    {"Ex: " +
                                                        (ele?.Ex ||
                                                            "Not available")}
                                                </Tooltip>
                                            }
                                            context={ele.Ex}
                                            containerPadding={20}
                                        >
                                            <ListGroup.Item
                                                className={`${
                                                    darkMode ? "text-white" : ""
                                                } my-2 ${Styles.col}`}
                                            >
                                                <Button
                                                    size="sm"
                                                    className="bg-transparent shadow-none border-0"
                                                    onClick={() =>
                                                        speak({
                                                            text: ele?.first,
                                                        })
                                                    }
                                                >
                                                    🎤
                                                </Button>
                                                <span>
                                                    {`${i + 1}: `}
                                                    <ColorSwitcher
                                                        text={ele?.first}
                                                    />
                                                </span>
                                                {" => "}
                                                <span>{ele?.second}</span>
                                            </ListGroup.Item>
                                        </OverlayTrigger>
                                    </ListGroup>
                                </motion.div>
                            </ScrollReveal>
                        );
                    })}
                </Row>
            </div>
        </>
    );
}
// translation ##################################
// fetch data from firebase in getStaticProps
export async function getStaticProps({ locale }) {
    let Idioms = [];
    let id = 1;
    // await the promise
    try {
        await getDocs(collection(db, "Idioms"), orderBy("createdAt")).then(
            (res) => {
                res.forEach(function (doc) {
                    Idioms.push({
                        id,
                        first: doc.data().first,
                        second: doc.data().second,
                        Ex: doc.data().Ex,
                    });
                    id += 1;
                });
            }
        );
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }

    return {
        props: {
            Idioms,
            ...(await serverSideTranslations(locale, ["main"])),
        },
        revalidate: 120,
    };
}
