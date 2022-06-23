import Link from "next/link";
import React from "react";
import { Breadcrumb, Table } from "react-bootstrap";
import Meta from "../../components/meta";

export default function SynonymsAndAntonyms() {
    return (
        <>
            <Meta title="Synonyms and Antonyms | Vocabulary | EnglishStu | Learn English" />
            <Breadcrumb>
                <Link href="/">
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Link>
                <Link href="/vocabulary">
                    <Breadcrumb.Item active>Vocabulary</Breadcrumb.Item>
                </Link>
                <Link href="/vocabulary/synonyms-antonyms">
                    <Breadcrumb.Item active>
                        Synonyms and Antonyms
                    </Breadcrumb.Item>
                </Link>
            </Breadcrumb>

            <h1 className="mb-4">Synonyms and Antonyms</h1>

            <h2>Synonym</h2>

            <p>
                A <strong>synonym</strong> is a word that means exactly the same
                as, or <strong>very nearly the same as</strong>, another word in
                the same language. For example, "close" is a synonym of "shut".
            </p>

            <div className="ESTIP">
                Note that a synonym may share an identical meaning with another
                word, but the two words are not necessarily interchangeable. For
                example, "blow up" and "explode" have the same meaning, but
                "blow up" is informal (used more in speech) and "explode" is
                more formal (used more in writing and careful speech).
            </div>

            <p>Here are some more examples of synonyms:</p>

            <Table responsive striped bordered>
                <tbody>
                    <tr>
                        <th colSpan="3">synonyms</th>
                        <th>part of speech</th>
                    </tr>
                    <tr>
                        <td>close</td>
                        <td>shut</td>
                        <td>&nbsp;</td>
                        <td className="text-primary">verb</td>
                    </tr>
                    <tr>
                        <td>blow up</td>
                        <td>explode</td>
                        <td>&nbsp;</td>
                        <td className="text-primary">verb</td>
                    </tr>
                    <tr>
                        <td>blow up</td>
                        <td>inflate</td>
                        <td>&nbsp;</td>
                        <td className="text-primary">verb</td>
                    </tr>
                    <tr>
                        <td>shallow</td>
                        <td>superficial</td>
                        <td>&nbsp;</td>
                        <td className="text-primary">adjective</td>
                    </tr>
                    <tr>
                        <td>eager</td>
                        <td>earnest</td>
                        <td>keen</td>
                        <td className="text-primary">adjective</td>
                    </tr>
                    <tr>
                        <td>spontaneous</td>
                        <td>impromptu</td>
                        <td>unplanned</td>
                        <td className="text-primary">adjective</td>
                    </tr>
                </tbody>
            </Table>

            <p>
                You can find synonyms in a{" "}
                <a
                    href="https://dictionary.cambridge.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    synonym dictionary or thesaurus
                </a>
                .
            </p>

            <h2>Antonym</h2>

            <p>
                An <strong>antonym</strong> is a word that means the{" "}
                <strong>opposite</strong> of another word. For example "bad" is
                an antonym of "good". Here are some more examples:
            </p>

            <Table responsive striped bordered>
                <tbody>
                    <tr>
                        <th>prefix</th>
                        <th colSpan="2">antonyms</th>
                        <th>part of speech</th>
                    </tr>
                    <tr>
                        <td rowSpan="7">&nbsp;</td>
                        <td>good</td>
                        <td>bad</td>
                        <td className="text-primary">adjective</td>
                    </tr>
                    <tr>
                        <td>small</td>
                        <td>big</td>
                        <td className="text-primary">adjective</td>
                    </tr>
                    <tr>
                        <td>easy</td>
                        <td>
                            hard
                            <br />
                            difficult
                        </td>
                        <td className="text-primary">adjective</td>
                    </tr>
                    <tr>
                        <td>soft</td>
                        <td>hard</td>
                        <td className="text-primary">adjective</td>
                    </tr>
                    <tr>
                        <td>male</td>
                        <td>female</td>
                        <td className="text-primary">
                            adjective
                            <br />
                            noun
                        </td>
                    </tr>
                    <tr>
                        <td>up</td>
                        <td>down</td>
                        <td className="text-primary">
                            preposition
                            <br />
                            adverb
                        </td>
                    </tr>
                    <tr>
                        <td>go</td>
                        <td>come</td>
                        <td className="text-primary">verb</td>
                    </tr>
                    <tr>
                        <td rowSpan="3">made by adding prefix un-</td>
                        <td>able</td>
                        <td>unable</td>
                        <td className="text-primary">adjective</td>
                    </tr>
                    <tr>
                        <td>selfish</td>
                        <td>unselfish</td>
                        <td className="text-primary">adjective</td>
                    </tr>
                    <tr>
                        <td>do</td>
                        <td>undo</td>
                        <td className="text-primary">verb</td>
                    </tr>
                    <tr>
                        <td rowSpan="3">made by adding prefix in-</td>
                        <td>decent</td>
                        <td>indecent</td>
                        <td className="text-primary">adjective</td>
                    </tr>
                    <tr>
                        <td>tolerant</td>
                        <td>intolerant</td>
                        <td className="text-primary">adjective</td>
                    </tr>
                    <tr>
                        <td>human</td>
                        <td>inhuman</td>
                        <td className="text-primary">adjective</td>
                    </tr>
                    <tr>
                        <td rowSpan="3">made by adding prefix non-</td>
                        <td>conformist</td>
                        <td>nonconformist</td>
                        <td className="text-primary">
                            adjective
                            <br />
                            noun
                        </td>
                    </tr>
                    <tr>
                        <td>essential</td>
                        <td>nonessential</td>
                        <td className="text-primary">
                            adjective
                            <br />
                            noun{" "}
                        </td>
                    </tr>
                    <tr>
                        <td>sense</td>
                        <td>nonsense</td>
                        <td className="text-primary">noun</td>
                    </tr>
                </tbody>
            </Table>

            <p>
                You can find antonyms in an{" "}
                <a
                    href="https://dictionary.cambridge.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    antonym dictionary
                </a>
                .
            </p>
        </>
    );
}
