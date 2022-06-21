import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";

// Firebase
import { db } from "../../lib/firebase/config";
import { collection, getDocs, orderBy } from "firebase/firestore";

import { Accordion, Breadcrumb, Col, ListGroup, Row } from "react-bootstrap";

// Tabldel.js
import TableComp from "../../components/Table/Index";

// Meta tags
import Meta from "../../components/meta";
// Toastify
import { toast } from "react-toastify";
import Link from "next/link";
export default function Collocations({ Collocations }) {
    const [DataType, setDataType] = useState("");
    const [filter, setfilter] = useState("");
    const { darkMode } = useSelector((state) => state.config);

    // filter data by search input
    const filteredData = useMemo(() => {
        if (filter === "") Collocations;

        return Collocations.filter((item) => {
            return item.en.Name.toLowerCase().includes(filter.toLowerCase());
        });
    }, [filter, Collocations]);

    const collocationsNames = [
        ...Collocations.map((item) => item.en.Name),
        ...Collocations.map((item) => item.ar.Name),
    ].join(", ");

    return (
        <>
            <Meta
                title="Collocations | Vocabulary | EnglishStu"
                description="A list of English collocations, with definitions, explanations, sample sentences, quizzes and answers. Arranged alphabetically."
                keywords={collocationsNames}
            />
            <>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link href="/">
                            <a>home</a>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link href="/vocabulary">
                            <a>vocabulary</a>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        <Link href="/vocabulary/collocations">
                            <a>Collocations</a>
                        </Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Accordion defaultActiveKey="0" alwaysOpen>
                    <Row>
                        <Col sm={12}>
                            <Accordion.Item
                                className={`${darkMode ? "bg-dark" : ""}`}
                                eventKey="0"
                            >
                                <Accordion.Header
                                    className={`${darkMode ? "dark" : ""}`}
                                >
                                    What is the collocation?
                                </Accordion.Header>
                                <Accordion.Body>
                                    A collocation is two or more words that
                                    often go together. These combinations just
                                    sound "right" to native English speakers,
                                    who use them all the time. On the other
                                    hand, other combinations may be unnatural
                                    and just sound "wrong"
                                </Accordion.Body>
                            </Accordion.Item>
                        </Col>
                        <Col sm={12}>
                            <Accordion.Item
                                className={`${darkMode ? "bg-dark" : ""}`}
                                eventKey="1"
                            >
                                <Accordion.Header
                                    className={`${darkMode ? "dark" : ""}`}
                                >
                                    Why do we learn collocations?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                        <ListGroup.Item
                                            className={`${
                                                darkMode ? "text-white" : ""
                                            } mb-2`}
                                        >
                                            👌 Your language will be more
                                            natural and more easily understood
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            className={`${
                                                darkMode ? "text-white" : ""
                                            } mb-2`}
                                        >
                                            👍 You will have alternative and
                                            richer ways of expressing yourself
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            className={`${
                                                darkMode ? "text-white" : ""
                                            } mb-2`}
                                        >
                                            🤙 It is easier for our brains to
                                            remember and use language in chunks
                                            or blocks rather than as single
                                            words
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Col>
                        <Col sm={12}>
                            <Accordion.Item
                                className={`${darkMode ? "bg-dark" : ""}`}
                                eventKey="2"
                            >
                                <Accordion.Header
                                    className={`${darkMode ? "dark" : ""}`}
                                >
                                    ypes of collocation?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        There are several different types of
                                        collocation made from combinations of
                                        verb, noun, adjective etc. Some of the
                                        most common types are :
                                    </p>
                                    <ListGroup>
                                        <ListGroup.Item
                                            className={`${
                                                darkMode ? "text-white" : ""
                                            } mb-2`}
                                        >
                                            <strong>adverb + adjective</strong>:
                                            completely satisfied (NOT{" "}
                                            <del>downright</del> satisfied)
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            className={`${
                                                darkMode ? "text-white" : ""
                                            } mb-2`}
                                        >
                                            <strong>adjective + noun</strong>:
                                            excruciating pain (NOT excruciating
                                            joy)
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            className={`${
                                                darkMode ? "text-white" : ""
                                            } mb-2`}
                                        >
                                            <strong>noun + noun</strong>: a
                                            surge of anger (NOT a rush of anger)
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            className={`${
                                                darkMode ? "text-white" : ""
                                            } mb-2`}
                                        >
                                            <strong>noun + verb</strong>: lions
                                            roar (NOT lions <del>shout</del>)
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            className={`${
                                                darkMode ? "text-white" : ""
                                            } mb-2`}
                                        >
                                            <strong>verb + noun</strong>: commit
                                            suicide (NOT <del>undertake</del>{" "}
                                            suicide)
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            className={`${
                                                darkMode ? "text-white" : ""
                                            } mb-2`}
                                        >
                                            <strong>
                                                verb + expression with
                                                preposition
                                            </strong>
                                            : burst into tears (NOT{" "}
                                            <del>blow up in</del> tears)
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            className={`${
                                                darkMode ? "text-white" : ""
                                            } mb-2`}
                                        >
                                            <strong>verb + adverb</strong>: wave
                                            frantically (NOT wave{" "}
                                            <del>feverishly</del>)
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Col>
                    </Row>
                </Accordion>
                <TableComp
                    Name="collocations"
                    filter={filter}
                    setfilter={setfilter}
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
export async function getStaticProps() {
    let Collocations = [];
    let id = 1;
    // await the promise
    try {
        await getDocs(
            collection(db, "Collocations"),
            orderBy("createdAt")
        ).then((res) => {
            res.forEach(function (doc) {
                Collocations.push({
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
        });
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }

    return {
        props: {
            Collocations,
        },
        revalidate: 120,
    };
}
