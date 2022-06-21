import React, { useEffect, useMemo, useState } from "react";
import { Card, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import ColorSwitcher from "../../../../components/ColorSwitcher";
import DataTable from "react-data-table-component";

export default function PastSimple({ data }) {
    const columns = useMemo(
        () => [
            {
                name: "Affirmative (+)",
                selector: (row) => row.Affirmative,
                sortable: true,
            },
            {
                name: "Negative} (-)",
                selector: (row) => row.Negative,
                sortable: true,
            },
            {
                name: "Interrogative (?)",
                selector: (row) => row.Interrogative,
                sortable: true,
            },
            {
                name: "Arabic",
                selector: (row) => row.Ar,
                sortable: true,
            },
        ],
        []
    );
    const { darkMode } = useSelector((state) => state.config);

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        mounted && (
            <>
                <Card>
                    <Card.Header>
                        <h4 className="w-100  mx-auto mb-5">
                            The past simple is used to talk about events that
                            occurred in the past at a specific time.
                        </h4>
                    </Card.Header>
                    <Card.Body>
                        {/* uses */}
                        <section>
                            <p className="ps-0 ps-lg-2 h4">
                                <ColorSwitcher text="Uses" /> :
                            </p>
                            <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                <li className="mb-3">
                                    the event is
                                    <ColorSwitcher text="in the past" />
                                </li>
                                <li className="mb-3">
                                    the event is
                                    <ColorSwitcher text="completely finished" />
                                </li>
                                <li className="mb-3">
                                    we say (or understand) the
                                    <ColorSwitcher text="time" />
                                    and/or
                                    <ColorSwitcher text="place" />
                                    of the event
                                </li>
                            </ol>
                        </section>

                        {/* first table */}
                        <section>
                            <h4 className="mb-3 text-center Header_Line">
                                <ColorSwitcher text="How do we make the Past Simple" />
                                ?
                            </h4>
                            <small className="mb-4 d-block text-center w-75 mx-auto">
                                Look at these examples with the main verbs
                                <ColorSwitcher text={"go"} />
                                (irregular) and
                                <ColorSwitcher text={"work"} />
                                (regular):
                            </small>
                            <Table className="mb-5" responsive striped bordered>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Sub</th>
                                        <th>Auxiliary (v)</th>
                                        <th>&nbsp;</th>
                                        <th>Main (v)</th>
                                        <th>&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td
                                            title="Affirmative"
                                            rowSpan="2"
                                            className="text-center"
                                        >
                                            +
                                        </td>
                                        <td>I</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>went</td>
                                        <td>to school.</td>
                                    </tr>
                                    <tr>
                                        <td>You</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>worked</td>
                                        <td>very hard.</td>
                                    </tr>
                                    <tr>
                                        <td
                                            title="Negative"
                                            rowSpan="2"
                                            className="text-center"
                                        >
                                            -
                                        </td>
                                        <td>She</td>
                                        <td>did</td>
                                        <td className="text-danger">not</td>
                                        <td>go</td>
                                        <td>with me.</td>
                                    </tr>
                                    <tr>
                                        <td>We</td>
                                        <td>did</td>
                                        <td className="text-danger">not</td>
                                        <td>work</td>
                                        <td>yesterday.</td>
                                    </tr>
                                    <tr>
                                        <td
                                            title="Interrogative"
                                            rowSpan="3"
                                            className="text-center"
                                        >
                                            ?
                                        </td>
                                        <td>Did</td>
                                        <td>you</td>
                                        <td>&nbsp;</td>
                                        <td>go</td>
                                        <td>to London?</td>
                                    </tr>
                                    <tr>
                                        <td>Did</td>
                                        <td>they</td>
                                        <td>&nbsp;</td>
                                        <td>work</td>
                                        <td>at home?</td>
                                    </tr>
                                    <tr>
                                        <td>Where did</td>
                                        <td>she</td>
                                        <td>&nbsp;</td>
                                        <td>play</td>
                                        <td>yesterday.</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <p>
                                From the above table, notice the following
                                points :
                            </p>
                            {/* Positive */}
                            <div>
                                <ColorSwitcher
                                    className={"ps-0 ps-lg-2 h6"}
                                    text={"A: For positive sentences"}
                                />

                                <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                    <li className="mb-3">
                                        There is no auxiliary verb .
                                    </li>
                                    <li className="mb-3">
                                        The main verb is conjugated in the Past
                                        Simple, invariable ِِ: -ed (or
                                        irregular) .
                                    </li>
                                </ol>
                            </div>
                            {/* negative and question */}
                            <div>
                                <ColorSwitcher
                                    className={"ps-0 ps-lg-2 h6"}
                                    text={
                                        "B: For negative and question sentences:"
                                    }
                                />

                                <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                    <li className="mb-3">
                                        The auxiliary is conjugated in the Past
                                        Simple, invariable : did .
                                    </li>
                                    <li className="mb-3">
                                        For question sentences, we exchange the
                                        subject and the auxiliary verb .
                                    </li>
                                    <li className="mb-3">
                                        The main verb is invariable in base form
                                        : base .
                                    </li>
                                    <li className="mb-3">
                                        For negative sentences, we insert not
                                        between the auxiliary verb and main verb
                                        .
                                    </li>
                                </ol>
                            </div>
                        </section>
                        {/* second table */}
                        <section>
                            <h4 className="mb-3 text-center Header_Line">
                                <ColorSwitcher text="Past Simple with the main verb be :" />
                            </h4>
                            <Table
                                responsive
                                striped
                                bordered
                                style={{ direction: "ltr" }}
                            >
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>sub</th>
                                        <th>
                                            main (v) <em>be</em>
                                        </th>
                                        <th></th>
                                        <th>&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td
                                            title="Affirmative"
                                            rowSpan="2"
                                            className="text-center"
                                        >
                                            +
                                        </td>
                                        <td>I, he/she/it</td>
                                        <td>was</td>
                                        <td></td>
                                        <td>here.</td>
                                    </tr>
                                    <tr>
                                        <td>You, we, they</td>
                                        <td>were</td>
                                        <td>&nbsp;</td>
                                        <td>in London.</td>
                                    </tr>
                                    <tr>
                                        <td
                                            title="Negative"
                                            rowSpan="2"
                                            className="text-center"
                                        >
                                            -
                                        </td>
                                        <td>I, he/she/it</td>
                                        <td>was</td>
                                        <td className="text-danger">not</td>
                                        <td>there.</td>
                                    </tr>
                                    <tr>
                                        <td>You, we, they</td>
                                        <td>were</td>
                                        <td className="text-danger">not</td>
                                        <td>happy.</td>
                                    </tr>
                                    <tr>
                                        <td
                                            title="Interrogative"
                                            rowSpan="2"
                                            className="text-center"
                                        >
                                            ?
                                        </td>
                                        <td>Was</td>
                                        <td>I, he/she/it</td>
                                        <td>&nbsp;</td>
                                        <td>right?</td>
                                    </tr>
                                    <tr>
                                        <td>Were</td>
                                        <td>you, we, they</td>
                                        <td>&nbsp;</td>
                                        <td>late?</td>
                                    </tr>
                                </tbody>
                            </Table>
                            {/* describe the table */}
                            <div>
                                <p>
                                    From the above table, notice the following
                                    points :
                                </p>
                                <ol className="ps-5 pb-4 d-flex justify-content-around align-items-center flex-wrap gap-4">
                                    <li className="mb-3">
                                        There is no auxiliary verb, even for
                                        questions and negatives .
                                    </li>
                                    <li className="mb-3">
                                        The main verb (be) is conjugated in the
                                        Past Simple :
                                        <ColorSwitcher text="was, were" />
                                    </li>
                                    <li className="mb-3">
                                        For negative sentences, we insert not
                                        after the main verb .
                                    </li>
                                    <li className="mb-3">
                                        For question sentences, we exchange the
                                        subject and the main verb .
                                    </li>
                                </ol>
                            </div>
                        </section>
                        {/* الكلمات الدلاليه */}
                        <section>
                            <h4 className="mb-3 text-center Header_Line">
                                <ColorSwitcher text={`Tags`} />
                            </h4>

                            {/* (often, sometimes, always) */}
                            <div>
                                <ColorSwitcher
                                    text={
                                        "A: Repetition (often, sometimes, always):"
                                    }
                                />

                                <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                    <li className="mb-3">
                                        I
                                        <ColorSwitcher text="sometimes walked" />
                                        home at lunchtime.
                                    </li>
                                    <li className="mb-3">
                                        I
                                        <ColorSwitcher text="often brought" />
                                        my lunch to school .
                                    </li>
                                </ol>
                            </div>
                            {/* last week, when I was a child, yesterday, six weeks ago */}
                            <div>
                                <ColorSwitcher
                                    text={
                                        "B: Specific point in time  (last week, when I was a child, yesterday, six weeks ago):"
                                    }
                                />

                                <ol className="d-flex justify-content-flex-start flex-column gap-3">
                                    <li className="mb-3">
                                        We saw a good film
                                        <ColorSwitcher text="last week" />.
                                    </li>
                                    <li className="mb-3">
                                        <ColorSwitcher text="Yesterday" />, I
                                        arrived in Geneva.
                                    </li>
                                    <li className="mb-3">
                                        She finished her work
                                        <ColorSwitcher text="at seven o'clock" />
                                        .
                                    </li>
                                    <li className="mb-3">
                                        I went to the theatre
                                        <ColorSwitcher text="last week" />
                                    </li>
                                </ol>
                            </div>
                        </section>
                        {/* table */}
                        <h4 className="mb-3 text-center Header_Line">
                            Examples
                        </h4>
                        <Row>
                            <DataTable
                                columns={columns}
                                data={data}
                                highlightOnHover
                                theme={`${darkMode && "solarized"}`}
                                pagination
                                direction="ltr"
                            />
                        </Row>
                    </Card.Body>
                </Card>
            </>
        )
    );
}

// Fetch Tenses Data ##################################
export async function getStaticProps() {
    let data = [];
    try {
        const res = await fetch(
            `${process.env.API_URL}/api/Tenses/Examples/Past/Simple`
        );
        data = await res.json();
    } catch (error) {
        console.error(error);
    }
    return {
        props: {
            data,
        }, // will be passed to the page component as props
    };
}
