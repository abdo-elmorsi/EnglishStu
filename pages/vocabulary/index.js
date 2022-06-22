import Link from "next/link";
import React from "react";
import { Breadcrumb } from "react-bootstrap";
import Meta from "../../components/meta";

export default function Index() {
    return (
        <>
            <Meta title="Vocabulary | EnglishStu | Learn English" />
            <Breadcrumb>
                <Link href="/">
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Link>
                <Link href="/vocabulary">
                    <Breadcrumb.Item active>Vocabulary</Breadcrumb.Item>
                </Link>
            </Breadcrumb>
            <h1 className="mb-4">English Vocabulary</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/vocabulary/what">
                            <a>What is Vocabulary?</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/vocabulary/collocations">
                            <a>Collocations</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/vocabulary/phrasal-verbs">
                            <a>Phrasal Verbs</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/vocabulary/idioms">
                            <a>Idioms</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/vocabulary/common-words">
                            <a>Common Words</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/vocabulary/irregular-verbs">
                            <a>Irregular Verbs</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/vocabulary/regular-verbs">
                            <a>Regular Verbs</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/vocabulary/wh-question-words">
                            <a>Wh Question Words</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/vocabulary/synonyms-antonyms">
                            <a>Synonyms and Antonyms</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/vocabulary/quizzes">
                            <a>Quizzes</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
