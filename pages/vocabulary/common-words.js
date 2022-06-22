import Link from "next/link";
import React from "react";
import { Breadcrumb } from "react-bootstrap";
import Meta from "../../components/meta";

export default function CommonWords() {
    return (
        <>
            <Meta title="Common Words | Vocabulary | EnglishStu | Learn English" />
            <Breadcrumb>
                <Link href="/">
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Link>
                <Link href="/vocabulary">
                    <Breadcrumb.Item active>Vocabulary</Breadcrumb.Item>
                </Link>
                <Link href="/vocabulary/common-words">
                    <Breadcrumb.Item active>Common Words</Breadcrumb.Item>
                </Link>
            </Breadcrumb>
            <h1 className="mb-4">Lists of Common Words</h1>
            <p>
                These lists of high-frequency words are drawn from various
                sources, and mainly based on a national corpus (British or
                American). A corpus is a collection of texts and recorded speech
                consisting of tens of millions of words. From such a large
                volume of data, it is possible to calculate the frequency with
                which words occur in a language. Inevitably, not all corpuses
                are identical or agree with one another, and you may notice
                minor differences in frequency or rank within these lists. Such
                differences are insignificant.
            </p>
            <p>
                These lists are indicative only and actual words may change over
                time.
            </p>

            <ul>
                <li>
                    <Link href="common-verbs-25">
                        <a>25 Most Common Verbs</a>
                    </Link>
                </li>
                <li>
                    <Link href="common-nouns-25">
                        <a>25 Most Common Nouns</a>
                    </Link>
                </li>
                <li>
                    <Link href="common-adjectives-25">
                        <a>25 Most Common Adjectives</a>
                    </Link>
                </li>
                <li>
                    <Link href="common-adverbs-25">
                        <a>25 Most Common Adverbs</a>
                    </Link>
                </li>
                <li>
                    <Link href="common-prepositions-25">
                        <a>25 Most Common Prepositions</a>
                    </Link>
                </li>
                <li>
                    <Link href="common-pronouns-25">
                        <a>25 Most Common Pronouns</a>
                    </Link>
                </li>
                <li>
                    <Link href="common-conjunctions-25">
                        <a> 25 Most Common Conjunctions</a>
                    </Link>
                </li>
                <li>
                    <Link href="common-numbers-24.php">
                        <a>24 Most Common Numbers</a>
                    </Link>
                </li>
                <li>
                    <Link href="common-interjections-10">
                        <a>10 Most Common Interjections</a>
                    </Link>
                </li>
                <li>
                    <Link href="common-words-100">
                        <a>100 Most Common Words</a>
                    </Link>
                </li>
            </ul>
        </>
    );
}
