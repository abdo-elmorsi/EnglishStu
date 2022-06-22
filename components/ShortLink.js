import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Col } from "react-bootstrap";

export default function ShortLink() {
    const { pathname } = useRouter();
    return (
        <Col lg={3} className="order-2 order-lg-1">
            <h5>Top 10 @ EnglishStu:</h5>
            <ol>
                <li>
                    <Link href="/vocabulary/phrasal-verbs">
                        <a
                            className={`${
                                pathname === "/vocabulary/phrasal-verbs" &&
                                "text-secondary"
                            }`}
                        >
                            Phrasal Verbs List
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/vocabulary/collocations">
                        <a
                            className={`${
                                pathname === "/vocabulary/collocations" &&
                                "text-secondary"
                            }`}
                        >
                            Collocations List
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/vocabulary/irregular-verbs">
                        <a
                            className={`${
                                pathname === "/vocabulary/irregular-verbs" &&
                                "text-secondary"
                            }`}
                        >
                            Irregular Verbs List
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/kids/numbers-chart">
                        <a
                            className={`${
                                pathname === "/kids/numbers-chart" &&
                                "text-secondary"
                            }`}
                        >
                            Numbers Chart 1-100
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/grammar/verb-tenses">
                        <a
                            className={`${
                                pathname === "/grammar/verb-tenses" &&
                                "text-secondary"
                            }`}
                        >
                            Verb Tenses
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/grammar">
                        <a
                            className={`${
                                pathname === "/grammar" && "text-secondary"
                            }`}
                        >
                            Grammar
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/grammar/parts-of-speech">
                        <a
                            className={`${
                                pathname === "/grammar/parts-of-speech" &&
                                "text-secondary"
                            }`}
                        >
                            Parts of Speech
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/grammar/prepositions-at-in-on-time">
                        <a
                            className={`${
                                pathname ===
                                    "/grammar/prepositions-at-in-on-time" &&
                                "text-secondary"
                            }`}
                        >
                            Prepositions of Time at in on
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/vocabulary/wh-question-words">
                        <a
                            className={`${
                                pathname === "/vocabulary/wh-question-words" &&
                                "text-secondary"
                            }`}
                        >
                            WH- Question Words
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/grammar/quizzes">
                        <a
                            className={`${
                                pathname === "d" && "text-secondary"
                            }`}
                        >
                            Grammar Quizzes
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/grammar/parts-of-speech-quiz">
                        <a
                            className={`${
                                pathname === "d" && "text-secondary"
                            }`}
                        >
                            Parts of Speech Quiz
                        </a>
                    </Link>
                </li>
            </ol>
        </Col>
    );
}
