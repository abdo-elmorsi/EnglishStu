import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

// Firebase
import { db } from "../../lib/firebase/config";
import { collection, getDocs, orderBy } from "firebase/firestore";

import { Accordion, Col, Row } from "react-bootstrap";

// Translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Tabldel.js
import TableComp from "../../components/Table/Index";

// Meta tags
import Meta from "../../components/meta";
// Toastify
import { toast } from "react-toastify";

export default function PhrasalVerb({ PhrasalVerb }) {
    const { t } = useTranslation("main");

    const [DataType, setDataType] = useState("");
    const [filter, setfilter] = useState("");
    const { darkMode } = useSelector((state) => state.config);

    // filter data by search input
    const filteredData = useMemo(() => {
        if (filter === "") PhrasalVerb;

        return PhrasalVerb.filter((item) => {
            return item.en.Name.toLowerCase().includes(filter.toLowerCase());
        });
    }, [filter, PhrasalVerb]);

    const phrasalVerbsNames = [
        ...PhrasalVerb.map((item) => item.en.Name),
        ...PhrasalVerb.map((item) => item.ar.Name),
    ].join(", ");

    return (
        <>
            <Meta
                title="English Stu | Phrasal Verbs"
                description="English Phrasal Verbs"
                keywords={phrasalVerbsNames}
            />
            <>
                <Accordion defaultActiveKey="0" alwaysOpen>
                    <Row>
                        <Col sm={12} lg={6}>
                            <Accordion.Item
                                className={`${darkMode ? "bg-dark" : ""}`}
                                eventKey="0"
                            >
                                <Accordion.Header
                                    style={{ direction: "initial" }}
                                    className={`${darkMode ? "dark" : ""}`}
                                >
                                    {t("What is Phrasal verbs?")}
                                </Accordion.Header>
                                <Accordion.Body>
                                    {t(
                                        "Phrasal verbs are very common in English, especially in more informal contexts. They are made up of a verb and a particle or, sometimes, two particles. The particle often changes the meaning of the verb."
                                    )}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Col>
                    </Row>
                </Accordion>
                <TableComp
                    filter={filter}
                    setfilter={setfilter}
                    t={t}
                    Data={filteredData}
                    DataType={DataType}
                    setDataType={setDataType}
                />
            </>
        </>
    );
}
// translation ##################################
// fetch data from firebase in getStaticProps
export async function getStaticProps({ locale }) {
    let PhrasalVerb = [];
    let id = 1;
    // await the promise
    try {
        await getDocs(collection(db, "PhrasalVerb"), orderBy("createdAt")).then(
            (res) => {
                res.forEach(function (doc) {
                    PhrasalVerb.push({
                        id,
                        en: {
                            Name: doc.data().en.Name,
                            Ex: doc.data().en.Ex,
                            Desc: doc.data().en.Desc,
                        },
                        ar: {
                            Name: doc.data().ar.Name,
                            Ex: doc.data().ar.Ex,
                            Desc: doc.data().ar.Desc,
                        },
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
            PhrasalVerb,
            ...(await serverSideTranslations(locale, ["main"])),
        },
        revalidate: 120,
    };
}
