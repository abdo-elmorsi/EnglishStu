import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Breadcrumb, Col, Row, Table } from "react-bootstrap";
import Meta from "../../components/meta";

export default function PartOfSpetch() {
    return (
        <>
            <Meta title="Parts Of Speech | Grammar | EnglishStu | Learn English" />
            <Breadcrumb>
                <Link href="/">
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Link>
                <Link href="/grammar">
                    <Breadcrumb.Item active>Grammar</Breadcrumb.Item>
                </Link>
                <Link href="/grammar/parts-of-speech">
                    <Breadcrumb.Item active>Parts Of Speech</Breadcrumb.Item>
                </Link>
            </Breadcrumb>

            <article>
                <Row>
                    <Col sm="12" lg="8">
                        <h1>Parts of Speech</h1>
                        <p>
                            <Link href="parts-of-speech-what">
                                <a>What is a Part of Speech?</a>
                            </Link>
                        </p>
                        <p>
                            We can categorize English words into{" "}
                            <strong>9 basic types</strong> called "parts of
                            speech" or "word classNamees". It's quite important
                            to recognize parts of speech. This helps you to
                            analyze sentences and understand them. It also helps
                            you to construct good sentences.
                        </p>
                    </Col>
                    <Col sm="12" lg="4" className="text-center">
                        <Link
                            href="parts-of-speech-what"
                            title="What is a part of speech?"
                        >
                            <a>
                                <Image
                                    src="/assets/images/grammar/so-what-is-a-part-of-speech-anyway.png"
                                    alt="parts of speech"
                                    className="alignright"
                                    width="200"
                                    height="200"
                                />
                            </a>
                        </Link>
                    </Col>
                </Row>

                <ul>
                    <li>
                        <a href="#table">Parts of Speech Table</a>
                    </li>
                    <li>
                        <a href="#examples">Parts of Speech Examples</a>
                    </li>
                    <li>
                        <Link href="parts-of-speech-quiz">
                            <a>Parts of Speech Quiz</a>
                        </Link>
                    </li>
                </ul>

                <h2 id="table">Parts of Speech Table</h2>
                <p>
                    This is a summary of the 9 parts of speech*. You can find
                    more detail if you click on each part of speech.
                </p>

                <Table responsive striped bordered>
                    <thead>
                        <tr>
                            <th>part of speech</th>
                            <th>function or "job"</th>
                            <th>example words</th>
                            <th>example sentences</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <strong>
                                    <a href="verbs">Verb</a>
                                </strong>
                            </td>
                            <td>action or state</td>
                            <td>
                                (to) be, have, do, like, work, sing, can, must
                            </td>
                            <td>
                                EnglishClub <strong>is</strong> a web site. I{" "}
                                <strong>like</strong> EnglishClub.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>
                                    <a href="nouns">Noun</a>
                                </strong>
                            </td>
                            <td>thing or person</td>
                            <td>
                                pen, dog, work, music, town, London, teacher,
                                John
                            </td>
                            <td>
                                This is my <strong>dog</strong>. He lives in my{" "}
                                <strong>house</strong>. We live in{" "}
                                <strong>London</strong>.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>
                                    <a href="adjectives">Adjective</a>
                                </strong>
                            </td>
                            <td>describes a noun</td>
                            <td>good, big, red, well, interesting</td>
                            <td>
                                My dogs are <strong>big</strong>. I like{" "}
                                <strong>big</strong> dogs.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="determiners">
                                    <strong>Determiner</strong>
                                </a>
                            </td>
                            <td>limits or "determines" a noun</td>
                            <td>a/an, the, 2, some, many</td>
                            <td>
                                I have <strong>two</strong> dogs and{" "}
                                <strong>some</strong> rabbits.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>
                                    <a href="adverbs">Adverb</a>
                                </strong>
                            </td>
                            <td>describes a verb, adjective or adverb</td>
                            <td>
                                quickly, silently, well, badly, very, really
                            </td>
                            <td>
                                My dog eats <strong>quickly</strong>. When he is{" "}
                                <strong>very</strong> hungry, he eats{" "}
                                <strong>really</strong> quickly.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>
                                    <a href="pronouns">Pronoun</a>
                                </strong>
                            </td>
                            <td>replaces a noun</td>
                            <td>I, you, he, she, some</td>
                            <td>
                                Tara is Indian. <strong>She</strong> is
                                beautiful.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>
                                    <a href="prepositions">Preposition</a>
                                </strong>
                            </td>
                            <td>links a noun to another word</td>
                            <td>to, at, after, on, but</td>
                            <td>
                                We went <strong>to</strong> school{" "}
                                <strong>on</strong> Monday.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>
                                    <a href="conjunctions">Conjunction</a>
                                </strong>
                            </td>
                            <td>joins clauses or sentences or words</td>
                            <td>and, but, when</td>
                            <td>
                                I like dogs <strong>and</strong> I like cats. I
                                like cats <strong>and</strong> dogs. I like dogs{" "}
                                <strong>but</strong> I don't like cats.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>
                                    <a href="interjections">Interjection</a>
                                </strong>
                            </td>
                            <td>
                                short exclamation, sometimes inserted into a
                                sentence
                            </td>
                            <td>oh!, ouch!, hi!, well</td>
                            <td>
                                <strong>Ouch</strong>! That hurts!{" "}
                                <strong>Hi</strong>! How are you?{" "}
                                <strong>Well</strong>, I don't know.
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <div className="ESTIP">
                    {" "}
                    * Some grammar sources traditionally categorize English into
                    <strong> 8</strong> parts of speech. Others say{" "}
                    <strong>10</strong>. At EnglishClub, we use the more recent
                    categorization of <strong>9</strong> parts of speech.
                    Examples of other categorizations are:
                    <ul>
                        <li>
                            Verbs may be treated as two different parts of
                            speech:
                            <ul>
                                <li>
                                    <strong>lexical Verbs</strong> (
                                    <em>work, like, run</em>)
                                </li>
                                <li>
                                    <strong>auxiliary Verbs</strong> (
                                    <em>be, have, must</em>)
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Determiners</strong> may be treated as
                            adjectives, instead of being a separate part of
                            speech.
                        </li>
                    </ul>
                </div>

                <h2 id="examples">Parts of Speech Examples</h2>
                <p>
                    Here are some examples of sentences made with different
                    English parts of speech:
                </p>
                <Table responsive striped bordered>
                    <tbody>
                        <tr>
                            <th>verb</th>
                        </tr>
                        <tr>
                            <td>Stop!</td>
                        </tr>
                    </tbody>
                </Table>
                <Table responsive striped bordered>
                    <tbody>
                        <tr>
                            <th>noun</th>
                            <th>verb</th>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>works.</td>
                        </tr>
                    </tbody>
                </Table>
                <Table responsive striped bordered>
                    <tbody>
                        <tr>
                            <th>noun</th>
                            <th>verb</th>
                            <th>verb</th>
                        </tr>
                        <tr>
                            <td>John</td>
                            <td>is</td>
                            <td>working.</td>
                        </tr>
                    </tbody>
                </Table>
                <Table responsive striped bordered>
                    <tbody>
                        <tr>
                            <th>pronoun</th>
                            <th>verb</th>
                            <th>noun</th>
                        </tr>
                        <tr>
                            <td>She</td>
                            <td>loves</td>
                            <td>animals.</td>
                        </tr>
                    </tbody>
                </Table>
                <Table responsive striped bordered>
                    <tbody>
                        <tr>
                            <th>noun</th>
                            <th>verb</th>
                            <th>noun</th>
                            <th>adverb</th>
                        </tr>
                        <tr>
                            <td>Tara</td>
                            <td>speaks</td>
                            <td>English</td>
                            <td>well.</td>
                        </tr>
                    </tbody>
                </Table>
                <Table responsive striped bordered>
                    <tbody>
                        <tr>
                            <th>noun</th>
                            <th>verb</th>
                            <th>adjective</th>
                            <th>noun</th>
                        </tr>
                        <tr>
                            <td>Tara</td>
                            <td>speaks</td>
                            <td>good</td>
                            <td>English.</td>
                        </tr>
                    </tbody>
                </Table>

                <Table responsive striped bordered>
                    <tbody>
                        <tr>
                            <th>pronoun</th>
                            <th>verb</th>
                            <th>preposition</th>
                            <th>determiner</th>
                            <th>noun</th>
                            <th>adverb</th>
                        </tr>
                        <tr>
                            <td>She</td>
                            <td>ran</td>
                            <td>to</td>
                            <td>the</td>
                            <td>station</td>
                            <td>quickly.</td>
                        </tr>
                    </tbody>
                </Table>

                <Table responsive striped bordered>
                    <tbody>
                        <tr>
                            <th>pron.</th>
                            <th>verb</th>
                            <th>adj.</th>
                            <th>noun</th>
                            <th>conjunction</th>
                            <th>pron.</th>
                            <th>verb</th>
                            <th>pron.</th>
                        </tr>
                        <tr>
                            <td>She</td>
                            <td>likes</td>
                            <td>big</td>
                            <td>snakes</td>
                            <td>but</td>
                            <td>I</td>
                            <td>hate</td>
                            <td>them.</td>
                        </tr>
                    </tbody>
                </Table>
                <p>Here is a sentence that contains every part of speech:</p>
                <Table responsive striped bordered>
                    <tbody>
                        <tr>
                            <th>interjection</th>
                            <th>pron.</th>
                            <th>conj.</th>
                            <th>det.</th>
                            <th>adj.</th>
                            <th>noun</th>
                            <th>verb</th>
                            <th>prep.</th>
                            <th>noun</th>
                            <th>adverb</th>
                        </tr>
                        <tr>
                            <td>Well,</td>
                            <td>she</td>
                            <td>and</td>
                            <td>my</td>
                            <td>young</td>
                            <td>John</td>
                            <td>walk</td>
                            <td>to</td>
                            <td>school</td>
                            <td>slowly.</td>
                        </tr>
                    </tbody>
                </Table>
                <h2>Words with More Than One Job</h2>
                <p>
                    Many words in English can have more than one job, or be more
                    than one part of speech. For example, "work" can be a verb
                    and a noun; "but" can be a conjunction and a preposition;
                    "well" can be an adjective, an adverb and an interjection.
                    In addition, many nouns can act as adjectives.
                </p>
                <p>
                    To analyze the part of speech, ask yourself: "What{" "}
                    <strong>job</strong> is this word doing in this sentence?"
                </p>
                <p>
                    In the table below you can see a few examples. Of course,
                    there are more, even for some of the words in the table. In
                    fact, if you look in a good dictionary you will see that the
                    word "<strong>but</strong>" has six jobs to do:
                </p>
                <ul>
                    <li>
                        verb, noun, adverb, pronoun, preposition and
                        conjunction!
                    </li>
                </ul>
                <Table responsive striped bordered>
                    <thead>
                        <tr>
                            <th>word</th>
                            <th>part of speech</th>
                            <th>example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan="2">work</td>
                            <td>noun</td>
                            <td>
                                My <strong>work</strong> is easy.
                            </td>
                        </tr>
                        <tr>
                            <td>verb</td>
                            <td>
                                I <strong>work</strong> in London.
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="2">but</td>
                            <td>conjunction</td>
                            <td>
                                John came <strong>but</strong> Mary didn't come.
                            </td>
                        </tr>
                        <tr>
                            <td>preposition</td>
                            <td>
                                Everyone came <strong>but</strong> Mary.
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="3">well</td>
                            <td>adjective</td>
                            <td>
                                Are you <strong>well</strong>?
                            </td>
                        </tr>
                        <tr>
                            <td>adverb</td>
                            <td>
                                She speaks <strong>well</strong>.
                            </td>
                        </tr>
                        <tr>
                            <td>interjection</td>
                            <td>
                                <strong>Well</strong>! That's expensive!
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="2">afternoon</td>
                            <td>noun</td>
                            <td>
                                We ate in the <strong>afternoon</strong>.
                            </td>
                        </tr>
                        <tr>
                            <td>noun acting as adjective</td>
                            <td>
                                We had <strong>afternoon</strong> tea.
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </article>

            <nav>
                <Link className="arrowNext" href="parts-of-speech-quiz">
                    <a>Parts of Speech Quiz</a>
                </Link>
            </nav>
            <nav>
                <Link className="arrowBack" href="/grammar">
                    <a>Grammar main page</a>
                </Link>
            </nav>

            <nav className="ec-navbar">
                <Link href="/" title="Go to EnglishStu home page">
                    <a>EnglishStu</a>
                </Link>{" "}
                <Link href="/grammar">
                    <a>Grammar</a>
                </Link>
                : Parts of Speech
            </nav>
        </>
    );
}
