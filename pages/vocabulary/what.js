import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "react-bootstrap";
import Meta from "../../components/meta";

export default function Regular() {
    return (
        <>
            <Meta title="Regular Verbs | Vocabulary | EnglishStu | Learn English" />
            <Breadcrumb>
                <Link href="/">
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Link>
                <Link href="/vocabulary">
                    <Breadcrumb.Item active>Vocabulary</Breadcrumb.Item>
                </Link>
                <Link href="/vocabulary/what">
                    <Breadcrumb.Item active>What</Breadcrumb.Item>
                </Link>
            </Breadcrumb>

            <h1 className="mb-4">What is Vocabulary?</h1>

            <Image
                src="/assets/images/vocabulary/vocabulary-640.jpg"
                alt="What is Vocabulary?"
                width="640"
                height="320"
            />

            <p>
                The noun{" "}
                <strong>
                    <em>vocabulary</em>
                </strong>{" "}
                (or <em>vocab</em> for short) refers to the words used in a
                language.
            </p>

            <p>
                The word <em>vocabulary</em> can have at least three different
                meanings:
            </p>

            <p>
                1. <strong>all of the words in a language</strong>
            </p>
            <ul>
                <li>
                    New words are constantly being added to the{" "}
                    <em>vocabulary of English</em>.
                </li>
            </ul>

            <p>
                2. <strong>the words used in a particular context</strong>
            </p>
            <ul>
                <li>
                    If you want to do an MBA you need to improve your{" "}
                    <em>business vocabulary</em>.
                </li>
                <li>
                    My neighbour is a doctor so he has an extensive{" "}
                    <em>medical vocabulary</em>.
                </li>
                <li>
                    I've just bought a book on the <em>vocabulary of slang</em>.
                </li>
            </ul>
            <p>
                3. <strong>the words an individual person knows</strong>
            </p>
            <ul>
                <li>
                    The teacher says that <em>my vocabulary</em> is good.
                </li>
            </ul>

            <div className="ESTIP">
                When learning a foreign language, our individual vocabulary in
                that language is one of the most important micro-skills to
                develop. Of course, all micro-skills like grammar, vocabulary
                and pronunciation are important. But it is far more difficult to
                communicate with no vocabulary than with no grammar. :-)
            </div>

            <h2>Active and passive vocabulary</h2>

            <p>
                In our own individual vocabulary, there is a difference between:
            </p>

            <ul>
                <li>
                    words that we <em>understand</em> <strong>and</strong>{" "}
                    <em> use</em> (our <strong>active vocabulary</strong>)
                </li>
                <li>
                    words that we <em>understand</em> but do not or cannot use
                    (our <strong>passive vocabulary</strong>)
                </li>
            </ul>

            <p>
                This is true for native speakers as well as for learners. In
                your own language, there are many words that you use regularly
                when speaking or writing. These words are part of your active
                vocabulary. And then there are many words that you understand
                when you hear them, on television for example, but do not use in
                everyday speech. These words are part of your passive
                vocabulary.
            </p>
        </>
    );
}
