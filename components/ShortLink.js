import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";

export default function ShortLink() {
    return (
        <Col lg={3} className="order-2 order-lg-1">
            <p>Top 10 @ EnglishStu:</p>
            <ol>
                <li>
                    <Link href="/vocabulary/phrasal-verbs">
                        <a>Phrasal Verbs List</a>
                    </Link>
                </li>
                <li>
                    <Link href="/vocabulary/collocations">
                        <a>Collocations List</a>
                    </Link>
                </li>
                <li>
                    <Link href="/vocabulary/irregular-verbs">
                        <a>Irregular Verbs List</a>
                    </Link>
                </li>
                <li>
                    <Link href="/kids/numbers-chart">
                        <a>Numbers Chart 1-100</a>
                    </Link>
                </li>
                <li>
                    <Link href="/grammar/verb-tenses">
                        <a>Verb Tenses</a>
                    </Link>
                </li>
                <li>
                    <Link href="/grammar">
                        <a>Grammar</a>
                    </Link>
                </li>
                <li>
                    <Link href="/grammar/parts-of-speech">
                        <a>Parts of Speech</a>
                    </Link>
                </li>
                <li>
                    <Link href="/grammar/prepositions-at-in-on-time">
                        <a>Prepositions of Time at in on</a>
                    </Link>
                </li>
                <li>
                    <Link href="/vocabulary/wh-question-words">
                        <a>WH- Question Words</a>
                    </Link>
                </li>
                <li>
                    <Link href="/grammar/quizzes">
                        <a>Grammar Quizzes</a>
                    </Link>
                </li>
                <li>
                    <Link href="/grammar/parts-of-speech-quiz">
                        <a>Parts of Speech Quiz</a>
                    </Link>
                </li>
            </ol>
        </Col>
    );
}
