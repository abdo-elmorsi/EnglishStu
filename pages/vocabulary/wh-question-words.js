import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Breadcrumb, Col, Row, Table } from "react-bootstrap";
import Meta from "../../components/meta";

export default function whQuestionWords() {
    return (
        <>
            <Meta title="Wh Question Words | Vocabulary | EnglishStu | Learn English" />
            <Breadcrumb>
                <Link href="/">
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Link>
                <Link href="/vocabulary">
                    <Breadcrumb.Item active>Vocabulary</Breadcrumb.Item>
                </Link>
                <Link href="/vocabulary/wh-question-words">
                    <Breadcrumb.Item active>Wh Question Words</Breadcrumb.Item>
                </Link>
            </Breadcrumb>
            <h1 className="mb-4">Wh Question Words</h1>

            <article>
                <Row className="align-items-center">
                    <Col sm="12" lg="7">
                        <p>
                            We use question words to ask certain types of
                            questions (
                            <a href="/grammar/questions.htm#type">
                                question word questions
                            </a>
                            ).
                        </p>
                        <p>
                            We often refer to these words as <em>WH words</em>{" "}
                            because they include the letters <em>WH</em> (for
                            example <em>WHy, HoW</em>).
                        </p>
                    </Col>
                    <Col sm="12" lg="5" className="text-center">
                        <Image
                            src="/assets/images/vocabulary/question-words.jpg"
                            alt="question words"
                            className="alignright ECnoprint"
                            width="170"
                            height="167"
                        />
                    </Col>
                </Row>

                <Table className="small" responsive striped bordered>
                    <tbody>
                        <tr>
                            <th>question word</th>
                            <th>function</th>
                            <th>example sentence</th>
                        </tr>
                        <tr>
                            <td rowSpan="2">what</td>
                            <td align="left">
                                asking for information about something
                            </td>
                            <td>What is your name?</td>
                        </tr>
                        <tr>
                            <td align="left">
                                asking for repetition or confirmation
                            </td>
                            <td>
                                What? I can't hear you.
                                <br />
                                You did what?
                            </td>
                        </tr>
                        <tr>
                            <td>what...for</td>
                            <td align="left">
                                asking for a reason, asking why
                            </td>
                            <td>What did you do that for?</td>
                        </tr>
                        <tr>
                            <td>when</td>
                            <td align="left">asking about time</td>
                            <td>When did he leave?</td>
                        </tr>
                        <tr>
                            <td>where</td>
                            <td align="left">
                                asking in or at what place or position
                            </td>
                            <td>Where do they live?</td>
                        </tr>
                        <tr>
                            <td>which</td>
                            <td align="left">asking about choice</td>
                            <td>Which colour do you want?</td>
                        </tr>
                        <tr>
                            <td>who</td>
                            <td align="left">
                                asking what or which person or people (subject)
                            </td>
                            <td>Who opened the door?</td>
                        </tr>
                        <tr>
                            <td>whom</td>
                            <td align="left">
                                asking what or which person or people (object)
                            </td>
                            <td>Whom did you see?</td>
                        </tr>
                        <tr>
                            <td>whose</td>
                            <td align="left">asking about ownership</td>
                            <td>
                                Whose are these keys?
                                <br />
                                Whose turn is it?
                            </td>
                        </tr>
                        <tr>
                            <td>why</td>
                            <td align="left">
                                asking for reason, asking what...for
                            </td>
                            <td>Why do you say that?</td>
                        </tr>
                        <tr>
                            <td>why don't</td>
                            <td align="left">making a suggestion</td>
                            <td>Why don't I help you?</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">how</td>
                            <td align="left">asking about manner</td>
                            <td>How does this work?</td>
                        </tr>
                        <tr>
                            <td align="left">
                                asking about condition or quality
                            </td>
                            <td>How was your exam?</td>
                        </tr>
                        <tr>
                            <td>how + adj/adv</td>
                            <td align="left">asking about extent or degree</td>
                            <td>see examples below</td>
                        </tr>
                        <tr>
                            <td align="right">how far</td>
                            <td align="left">distance</td>
                            <td>How far is Pattaya from Bangkok?</td>
                        </tr>
                        <tr>
                            <td align="right">how long</td>
                            <td align="left">length (time or space)</td>
                            <td>How long will it take?</td>
                        </tr>
                        <tr>
                            <td align="right">how many</td>
                            <td align="left">quantity (countable)</td>
                            <td>How many cars are there?</td>
                        </tr>
                        <tr>
                            <td align="right">how much</td>
                            <td align="left">quantity (uncountable)</td>
                            <td>How much money do you have?</td>
                        </tr>
                        <tr>
                            <td align="right">how old</td>
                            <td align="left">age</td>
                            <td>How old are you?</td>
                        </tr>
                        <tr>
                            <td>how come (informal)</td>
                            <td align="left">asking for reason, asking why</td>
                            <td>How come I can't see her?</td>
                        </tr>
                    </tbody>
                </Table>

                <p>
                    See also:{" "}
                    <Link href="/vocabulary/common-words">
                        <a>Common Words</a>
                    </Link>
                </p>
                <p>
                    Test yourself with these{" "}
                    <Link href="/">
                        <a>fun common words quizzes</a>
                    </Link>
                </p>
            </article>
        </>
    );
}
