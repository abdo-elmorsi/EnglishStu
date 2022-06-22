import React, { useMemo, useState } from "react";

// Firebase
import { db } from "../../lib/firebase/config";
import { collection, getDocs, orderBy } from "firebase/firestore";

import { Breadcrumb } from "react-bootstrap";

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
                title="Collocations | Vocabulary | EnglishStu | Learn English"
                description="A list of English collocations, with definitions, explanations, sample sentences, quizzes and answers. Arranged alphabetically."
                keywords={collocationsNames}
            />
            <>
                <Breadcrumb>
                    <Link href="/">
                        <Breadcrumb.Item active>Home</Breadcrumb.Item>
                    </Link>
                    <Link href="/vocabulary">
                        <Breadcrumb.Item active>Vocabulary</Breadcrumb.Item>
                    </Link>
                    <Link href="/vocabulary/collocations">
                        <Breadcrumb.Item active>Collocations</Breadcrumb.Item>
                    </Link>
                </Breadcrumb>
                <h1 className="mb-4">Collocation List</h1>
                <p>
                    A collocation is two or more words that often go together.
                    These combinations just sound "right" to native English
                    speakers, who use them all the time. On the other hand,
                    other combinations may be unnatural and just sound "wrong"
                </p>
                <h4 className="mb-3">Why do we learn collocations?</h4>
                <ol>
                    <li>
                        👌 Your language will be more natural and more easily
                        understood.
                    </li>
                    <li>
                        👍 You will have alternative and richer ways of
                        expressing yourself.
                    </li>
                    <li>
                        🤙 It is easier for our brains to remember and use
                        language in chunks or blocks rather than as single
                        words.
                    </li>
                </ol>
                <h4 className="mb-3">Types of collocation?</h4>
                <p>
                    There are several different types of collocation made from
                    combinations of verb, noun, adjective etc. Some of the most
                    common types are :
                </p>
                <ol>
                    <li>
                        <strong>adverb + adjective</strong>: completely
                        satisfied (NOT <del>downright</del> satisfied).
                    </li>
                    <li>
                        <strong>noun + noun</strong>: a surge of anger (NOT a
                        rush of anger).
                    </li>
                    <li>
                        <strong>noun + verb</strong>: lions roar (NOT lions
                        <del>shout</del>).
                    </li>
                    <li>
                        <strong>verb + noun</strong>: commit suicide (NOT
                        <del>undertake</del> suicide).
                    </li>
                    <li>
                        <strong>verb + expression with preposition</strong>:
                        burst into tears (NOT <del>blow up in</del> tears).
                    </li>
                    <li>
                        <strong>verb + adverb</strong>: wave frantically (NOT
                        wave <del>feverishly</del>).
                    </li>
                </ol>

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
