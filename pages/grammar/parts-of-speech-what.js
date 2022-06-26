import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import Meta from "../../components/meta";

export default function PartsOfSpetch() {
    return (
        <>
            <Meta title="What Part Of Speech | Grammar | EnglishStu | Learn English" />
            <Breadcrumb>
                <Link href="/">
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Link>
                <Link href="/grammar">
                    <Breadcrumb.Item active>Grammar</Breadcrumb.Item>
                </Link>
                <Link href="/grammar/parts-of-speech-what">
                    <Breadcrumb.Item active>
                        Part Of Speech What
                    </Breadcrumb.Item>
                </Link>
            </Breadcrumb>

            <article>
                <Row>
                    <Col sm="12" lg="8">
                        <h1>What is a Part of Speech?</h1>
                        <p>
                            A <strong>part of speech</strong> is one of the{" "}
                            <Link href="parts-of-speech">
                                <a>nine types of English words</a>
                            </Link>
                            : VERB, NOUN, ADJECTIVE, ADVERB, PRONOUN,
                            PREPOSITION, DETERMINER, CONJUNCTION, INTERJECTION
                        </p>
                        <p>
                            There are thousands of words but they don't all have
                            the same job. For example:
                        </p>
                    </Col>
                    <Col sm="12" lg="4" className="text-center">
                        <Image
                            src="/assets/images/grammar/so-what-is-a-part-of-speech-anyway.png"
                            alt="What is a part of speech?"
                            className="alignright"
                            width="200"
                            height="200"
                        />
                    </Col>
                </Row>
                <ul>
                    <li>
                        some words express <strong>action</strong>
                    </li>
                    <li>
                        other words express <strong>things</strong>
                    </li>
                    <li>
                        other words <strong>join</strong> one word to another
                        word
                    </li>
                </ul>
                <Row>
                    <Col sm="12" lg="8">
                        <p>
                            These are the "building blocks" of the language.
                            Think of them like the parts of a house. When we
                            want to build a house, we use concrete to make the
                            foundations or base. We use bricks to make the
                            walls. We use window frames to make the windows, and
                            door frames to make the doorways. And we use cement
                            to join them all together. Each part of the house
                            has its own job.
                        </p>
                    </Col>
                    <Col sm="12" lg="4" className="text-center">
                        <Image
                            src="/assets/images/grammar/bricks-as-parts-of-speech.png"
                            alt="parts of speech are like the parts of a house"
                            className="alignright"
                            width="150"
                            height="139"
                        />
                    </Col>
                </Row>
                <p>
                    And when we want to build a sentence,{" "}
                    <strong>we use the different types of word</strong>.
                </p>
                <p className="h3">
                    <em>Each type of word has its own job.</em>
                </p>
                <p>
                    There are <strong>9&nbsp;basic types of word</strong>, and
                    they are called "<strong>parts of speech</strong>".
                </p>
                <p>
                    The most important parts of speech are the BIG FOUR, and the
                    verb is the king of these. Here they are, each with an{" "}
                    <em>
                        <strong>example</strong>
                    </em>{" "}
                    and its <strong>basic</strong> "job":
                </p>
                <ul>
                    <li>
                        verb (
                        <em>
                            <strong>deliver</strong>
                        </em>{" "}
                        - expresses action)
                    </li>
                    <li>
                        noun (
                        <em>
                            <strong>computer</strong>
                        </em>{" "}
                        - expresses a thing)
                    </li>
                    <li>
                        adjective (
                        <em>
                            <strong>yellow</strong>
                        </em>{" "}
                        - tells us more about a noun)
                    </li>
                    <li>
                        adverb (
                        <em>
                            <strong>quickly</strong>
                        </em>{" "}
                        - tells us more about a verb)
                    </li>
                </ul>
                <p>The other parts of speech are mostly small words:</p>
                <ul>
                    <li>
                        pronoun (
                        <em>
                            <strong>it</strong>
                        </em>{" "}
                        - replaces a noun)
                    </li>
                    <li>
                        preposition (
                        <em>
                            <strong>on</strong>
                        </em>{" "}
                        - links a noun to another word)
                    </li>
                    <li>
                        determiner (
                        <em>
                            <strong>the</strong>
                        </em>{" "}
                        - limits a noun)
                    </li>
                    <li>
                        conjunction (
                        <em>
                            <strong>and</strong>
                        </em>{" "}
                        - joins words)
                    </li>
                    <li>
                        interjection (
                        <em>
                            <strong>ouch</strong>!
                        </em>{" "}
                        - expresses feeling)
                    </li>
                </ul>
                <div className="ESTIP">
                    Some people use the term <em>word class</em> instead of{" "}
                    <em>part of speech</em>.
                </div>
                You can also learn{" "}
                <Link href="parts-of-speech">
                    <a>more about parts of speech</a>
                </Link>{" "}
                and{" "}
                <Link href="parts-of-speech-quiz">
                    <a>try our Parts of Speech Quiz</a>
                </Link>
                .{" "}
            </article>
        </>
    );
}
