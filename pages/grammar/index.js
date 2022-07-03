import React from "react";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import Link from "next/link";

export default function Test_yourself() {
    return (
        <>
            <Breadcrumb>
                <Link href="/">
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Link>
                <Link href="/grammar">
                    <Breadcrumb.Item active>Grammar</Breadcrumb.Item>
                </Link>
            </Breadcrumb>
            <h1 className="mb-4">Grammar 📒</h1>
            <p>
                Grammar is the way we arrange words to make proper sentences.{" "}
                <a href="#word">Word level grammar</a> covers verbs and tenses,
                nouns, adverbs etc. Sentence level grammar covers phrases,
                clauses, reported speech etc.
            </p>

            <nav>
                <ul>
                    <li>
                        <Link href="/grammar/what">
                            <a>What is Grammar?</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/grammar/rules">
                            <a>20 Grammar Rules</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/grammar/vocabulary">
                            <a>Grammar Vocabulary</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/grammar/quizzes">
                            <a>Grammar Quizzes</a>
                        </Link>
                    </li>
                </ul>
            </nav>

            <h3 className="mb-3" id="word">
                Word-level Grammar
            </h3>

            <h5>
                <Link href="/grammar/parts-of-speech">
                    <a>9 Parts of Speech</a>
                </Link>
            </h5>
            <p>These are the words that you use to make a sentence.</p>

            <Row className="mt-4">
                <Col md={6}>
                    <p>
                        <Link href="/grammar/verbs">
                            <a>
                                <strong>Verbs </strong>
                            </a>
                        </Link>
                        and <strong>Verb Tenses </strong>Action verbs, express
                        what is happening <em>(do, work)</em>. State verbs
                        express a situation <em>(be, have)</em>.
                    </p>
                    <p>
                        <Link href="/grammar/nouns">
                            <a>
                                <strong>Nouns </strong>
                            </a>
                        </Link>
                        Nouns represent people <em>(teacher, Mary)</em>, places{" "}
                        <em>(town, Asia)</em> and things <em>(table, music)</em>
                        .
                    </p>
                    <p>
                        <Link href="/grammar/adjectives">
                            <a>
                                <strong>Adjectives </strong>
                            </a>
                        </Link>
                        An adjective is a word that tells us more about a noun{" "}
                        <em>(big, red, expensive)</em>.
                    </p>
                    <p>
                        <Link href="/grammar/adverbs">
                            <a>
                                <strong>Adverbs </strong>
                            </a>
                        </Link>
                        Adverbs tell us more about verbs, adjectives or adverbs
                        (<em>loudly, really, extremely)</em>.
                    </p>
                </Col>

                <Col md={6}>
                    <p>
                        <Link href="/grammar/determiners">
                            <a>
                                <strong>Determiners </strong>
                            </a>
                        </Link>
                        Determiners are words like{" "}
                        <em>the,&nbsp;an,&nbsp;this</em> that start a noun
                        phrase.
                    </p>
                    <p>
                        <Link href="/grammar/prepositions">
                            <a>
                                <strong>Prepositions </strong>
                            </a>
                        </Link>
                        A preposition expresses the relationship of a noun or
                        pronoun to another word <em>(at, in, from)</em>.
                    </p>
                    <p>
                        <Link href="/grammar/pronouns">
                            <a>
                                <strong>Pronouns </strong>
                            </a>
                        </Link>
                        Pronouns are small words like <em>you, ours, some</em>{" "}
                        that can take the place of a noun.{" "}
                    </p>
                    <p>
                        <Link href="/grammar/conjunctions">
                            <a>
                                <strong>Conjunctions </strong>
                            </a>
                        </Link>
                        Conjunctions join two parts of a sentence{" "}
                        <em>(and, but, though)</em>.{" "}
                    </p>
                    <p>
                        <Link href="/grammar/Interjections">
                            <a>
                                <strong>Interjections </strong>
                            </a>
                        </Link>
                        Short exclamations with no real grammatical value{" "}
                        <em>(ah, dear, er)</em>
                    </p>
                </Col>
            </Row>
        </>
    );
}
