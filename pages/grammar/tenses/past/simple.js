import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Row, Table } from "react-bootstrap";

export default function Simple() {
    return (
        <>
            <h1 className="mb-4">Past Simple</h1>
            <Row>
                <Col sm="12" lg="6">
                    {" "}
                    <p>
                        The Past Simple tense is sometimes called the "preterite
                        tense". We can use several tenses and forms to talk
                        about the past, but the Past Simple tense is the one we
                        use most often.
                    </p>
                    <p>
                        In this lesson we look at the <strong>structure</strong>{" "}
                        and <strong>use</strong> of the Past Simple tense,
                        followed by a <strong>quiz</strong> to check your
                        understanding.
                    </p>
                </Col>
                <Col sm="12" lg="6" className="text-center">
                    <Image
                        src="/assets/images/grammar/tense-past-simple.png"
                        alt="Past Simple tense"
                        width="300"
                        height="200"
                    />
                </Col>
            </Row>
            <h2>How do we make the Past Simple tense?</h2>
            <p>There are two basic structures for the Past Simple tense:</p>
            <p>1. Positive sentences</p>
            <Table responsive striped bordered>
                <tbody>
                    <tr>
                        <td>subject</td>
                        <td>+</td>
                        <td className="text-info">main verb</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td className="text-info">
                            <strong>Past Simple</strong>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <p>2. Negative and question sentences</p>
            <Table responsive striped bordered>
                <tbody>
                    <tr>
                        <td>subject</td>
                        <td>+</td>
                        <td className="text-primary">
                            auxiliary <em>do</em>
                        </td>
                        <td>+</td>
                        <td className="text-info">main verb</td>
                    </tr>
                    <tr>
                        <td rowSpan="2"></td>
                        <td rowSpan="2"></td>
                        <td className="text-primary">
                            conjugated in Past Simple
                        </td>
                        <td rowSpan="2"></td>
                        <td className="text-info">&nbsp;</td>
                    </tr>
                    <tr>
                        <td className="text-primary">
                            <strong>did</strong>
                        </td>
                        <td className="text-info">
                            <strong>base</strong>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <p>
                Look at these examples with the main verbs <em>go</em>{" "}
                (irregular) and <em>work</em> (regular):
            </p>
            <Table responsive striped bordered>
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>subject</th>
                        <th className="text-primary">auxiliary verb</th>
                        <th>&nbsp;</th>
                        <th className="text-info">main verb</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan="2">+</td>
                        <td>I</td>
                        <td className="text-primary">&nbsp;</td>
                        <td>&nbsp;</td>
                        <td className="text-info">went</td>
                        <td>to school.</td>
                    </tr>
                    <tr>
                        <td>You</td>
                        <td className="text-primary">&nbsp;</td>
                        <td>&nbsp;</td>
                        <td className="text-info">worked</td>
                        <td>very hard.</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">-</td>
                        <td>She</td>
                        <td className="text-primary">did</td>
                        <td>not</td>
                        <td className="text-info">go</td>
                        <td>with me.</td>
                    </tr>
                    <tr>
                        <td>We</td>
                        <td className="text-primary">did</td>
                        <td>not</td>
                        <td className="text-info">work</td>
                        <td>yesterday.</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">?</td>
                        <td className="text-primary">Did</td>
                        <td>you</td>
                        <td>&nbsp;</td>
                        <td className="text-info">go</td>
                        <td>to London?</td>
                    </tr>
                    <tr>
                        <td className="text-primary">Did</td>
                        <td>they</td>
                        <td>&nbsp;</td>
                        <td className="text-info">work</td>
                        <td>at home?</td>
                    </tr>
                </tbody>
            </Table>
            <p>From the above table, notice the following points...</p>
            <p>For positive sentences:</p>
            <ul>
                <li>
                    There is <strong>no auxiliary verb</strong>.
                </li>
                <li>
                    The main verb is conjugated in the Past Simple, invariable:{" "}
                    <em>-ed (or irregular)</em>
                </li>
            </ul>
            <p>For negative and question sentences:</p>
            <ul>
                <li>
                    The auxiliary is conjugated in the Past Simple, invariable:{" "}
                    <em>did</em>
                </li>
                <li>
                    The main verb is invariable in base form: <em>base</em>
                </li>
                <li>
                    For negative sentences, we insert <strong>not</strong>{" "}
                    between the auxiliary verb and main verb.
                </li>
                <li>
                    For question sentences, we <strong>exchange</strong> the
                    subject and the auxiliary verb.
                </li>
            </ul>
            <div className="ESTIP">
                {" "}
                <strong>Emphatic did</strong>
                <br />
                Normally, for positive sentences we do not use the auxiliary{" "}
                <em>did</em>. But if we want to emphasize (stress) something, or
                contradict something, we may use it. For example: "I didn't use
                a spellchecker but I did use a dictionary." Here are some more
                examples:
                <ul>
                    <li >
                        "Why didn't you go to the party?" / "I did go."
                    </li>
                    <li >It did seem a bit strange.</li>
                    <li >
                        {" "}
                        After drinking it I did in fact feel better.
                    </li>
                </ul>
            </div>
            <h3>
                Past Simple with main verb <em>be</em>
            </h3>
            <p>
                The structure of the Past Simple with the main verb <em>be</em>{" "}
                is:
            </p>
            <Table responsive striped bordered>
                <tbody>
                    <tr>
                        <td>subject</td>
                        <td>+</td>
                        <td className="text-info">
                            main verb <em>be</em>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="2"></td>
                        <td rowSpan="2"></td>
                        <td className="text-info">conjugated in Past Simple</td>
                    </tr>
                    <tr>
                        <td className="text-info">
                            <strong>was, were</strong>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <p>
                Look at these examples with the main verb <i>be</i>:
            </p>
            <Table responsive striped bordered>
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>subject</th>
                        <th className="text-info">
                            main verb <em>be</em>
                        </th>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan="2">+</td>
                        <td>I, he/she/it</td>
                        <td className="text-info">was</td>
                        <td>&nbsp;</td>
                        <td>here.</td>
                    </tr>
                    <tr>
                        <td>You, we, they</td>
                        <td className="text-info">were</td>
                        <td>&nbsp;</td>
                        <td>in London.</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">-</td>
                        <td>I, he/she/it</td>
                        <td className="text-info">was</td>
                        <td>not</td>
                        <td>there.</td>
                    </tr>
                    <tr>
                        <td>You, we, they</td>
                        <td className="text-info">were</td>
                        <td>not</td>
                        <td>happy.</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">?</td>
                        <td className="text-info">Was</td>
                        <td>I, he/she/it</td>
                        <td>&nbsp;</td>
                        <td>right?</td>
                    </tr>
                    <tr>
                        <td className="text-info">Were</td>
                        <td>you, we, they</td>
                        <td>&nbsp;</td>
                        <td>late?</td>
                    </tr>
                </tbody>
            </Table>
            <p>From the above table, notice the following points...</p>
            <ul>
                <li>
                    There is <strong>no auxiliary verb</strong>, even for
                    questions and negatives.
                </li>
                <li>
                    {" "}
                    The main verb (be) is conjugated in the Past Simple:{" "}
                    <em>was, were</em>
                </li>
                <li>
                    For negative sentences, we insert <strong>not</strong> after
                    the main verb.
                </li>
                <li>
                    For question sentences, we <strong>exchange</strong> the
                    subject and the main verb.
                </li>
            </ul>
            <h2>How do we use the Past Simple tense?</h2>
            <p>
                We use the Past Simple tense to talk about an action or a
                situation - an event - in the past. The event can be{" "}
                <strong>short</strong> or <strong>long</strong>.
            </p>
            <p>
                Here are some <strong>short</strong> events with the Past
                Simple:
            </p>
            <Table responsive striped bordered>
                <tbody>
                    <tr>
                        <td colSpan="3" >
                            The car <strong>exploded</strong> at 9.30am
                            yesterday.
                            <br />
                            She <strong>went</strong> to the door.
                            <br />
                            We <strong>did</strong> not <strong>hear</strong>{" "}
                            the telephone.
                            <br />
                            <strong>Did</strong> you <strong>see</strong> that
                            car?
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: "33%" }}>
                            <strong>past</strong>
                        </td>
                        <td style={{ width: "33%" }}>
                            <strong>present</strong>
                        </td>
                        <td style={{ width: "33%" }}>
                            <strong>future</strong>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3">
                            <table>
                                <tbody>
                                    <tr>
                                        <td
                                            className="text-end border-none"
                                            style={{ width: "33%" }}
                                        >
                                            <div
                                                className="timeline"
                                                style={{ width: "10%" }}
                                            ></div>
                                        </td>
                                        <td
                                            className="text-center border-none"
                                            style={{ width: "33%" }}
                                        >
                                            &nbsp;
                                        </td>
                                        <td
                                            className="border-none"
                                            style={{ width: "33%" }}
                                        >
                                            &nbsp;
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>The action is in the past.</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </Table>
            <p>
                Here are some <strong>long</strong> events with the Past Simple
                tense:
            </p>
            <Table responsive striped bordered>
                <tbody>
                    <tr>
                        <td colSpan="3" >
                            I <strong>lived</strong> in Bangkok for 10 years.
                            <br />
                            The Jurassic period <strong>lasted</strong> about 62
                            million years.
                            <br />
                            We <strong>did</strong> not <strong>sing</strong> at
                            the concert.
                            <br />
                            <strong>Did</strong> you <strong>watch</strong> TV
                            last night?
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: "33%" }}>
                            <strong>past</strong>
                        </td>
                        <td style={{ width: "33%" }}>
                            <strong>present</strong>
                        </td>
                        <td style={{ width: "33%" }}>
                            <strong>future</strong>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3">
                            <Table responsive striped bordered>
                                <tbody>
                                    <tr>
                                        <td
                                            className="text-end border-none"
                                            style={{ width: "33%" }}
                                        >
                                            <div
                                                className="timeline"
                                                style={{ width: "70%" }}
                                            ></div>
                                        </td>
                                        <td
                                            className="text-center border-none"
                                            style={{ width: "33%" }}
                                        >
                                            &nbsp;
                                        </td>
                                        <td
                                            className="border-none"
                                            style={{ width: "33%" }}
                                        >
                                            &nbsp;
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>
                    </tr>
                    <tr>
                        <td>The action is in the past.</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </Table>
            <p>
                Notice that it does not matter how long ago the event is: it can
                be a few minutes or seconds in the past, or millions of years in
                the past. Also it does not matter how long the event is. It can
                be a few milliseconds (car explosion) or millions of years
                (Jurassic period). We use the Past Simple tense when:
            </p>
            <ul>
                <li>
                    the event is <strong>in the past</strong>
                </li>
                <li>
                    the event is <strong>completely finished</strong>
                </li>
                <li>
                    we say (or understand) the <strong>time</strong> and/or{" "}
                    <strong>place</strong> of the event
                </li>
            </ul>
            <div className="ESTIP">
                In general, if we say the past <strong>time</strong> or{" "}
                <strong>place</strong> of the event, we must use the Past Simple
                tense; we cannot use the present perfect.
            </div>
            <p>Here are some more examples:</p>
            <ul>
                <li>
                    I <strong>lived</strong> in that house when I was young.
                </li>
                <li>
                    He <strong>did</strong>n't <strong>like</strong> the movie.
                </li>
                <li>
                    What <strong>did</strong> you <strong>eat</strong> for
                    dinner?
                </li>
                <li>
                    John <strong>drove</strong> to London on Monday.
                </li>
                <li>
                    Mary <strong>did</strong> not <strong>go</strong> to work
                    yesterday.
                </li>
                <li>
                    <strong>Did</strong> you <strong>play</strong> tennis last
                    week?
                </li>
                <li>
                    I <strong>was</strong> at work yesterday.
                </li>
                <li>
                    We <strong>were</strong> not late (for the train).
                </li>
                <li>
                    <strong>Were</strong> you angry?
                </li>
            </ul>
            <p>
                Note that when we tell a story, we usually use the Past Simple.
                We may start with the Past Continuous tense to "set the scene",
                but we almost always use the Past Simple tense for the action.
                Look at this example of the beginning of a story:
            </p>
            <div className="es-panel-example">
                {" "}
                "The wind <em>was howling</em> around the hotel and the rain{" "}
                <em>was pouring down</em>. It <strong>was</strong> cold. The
                door <strong>opened</strong> and James Bond{" "}
                <strong>entered</strong>. He <strong>took off</strong> his coat,
                which <strong>was</strong> very wet, and{" "}
                <strong>ordered</strong> a drink at the bar. He{" "}
                <strong>sat down</strong> in the corner of the lounge and
                quietly <strong>drank</strong> his..."
            </div>
            <div className="ESTIP">
                This page shows the use of the Past Simple tense to talk about
                past events. But note that there are some other uses for the
                Past Simple, for example in{" "}
                <a href="verbs-conditional-second.htm">
                    conditional or <strong>if</strong> sentences
                </a>
                .
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="continuous">
                            <a>Past Continuous</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="perfect">
                            <a>Past Perfect</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="perfect-continuous">
                            <a>Past Perfect Continuous</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="quizzes">
                            <a>Past Simple Quizs</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
