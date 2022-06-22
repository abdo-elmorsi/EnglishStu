import React from "react";
import Image from "next/image";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import Link from "next/link";

export default function What() {
    return (
        <>
            <Breadcrumb>
                <Link href="/">
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Link>
                <Link href="/grammar">
                    <Breadcrumb.Item active>Grammar</Breadcrumb.Item>
                </Link>
                <Link href="/grammar/what">
                    <Breadcrumb.Item active>What</Breadcrumb.Item>
                </Link>
            </Breadcrumb>
            <h1 className="mb-4">What is Grammar?</h1>
            <p>
                <Link href="/grammar">Grammar</Link>
            </p>

            <p>And why grammar is your friend...</p>

            <div>
                <dfn>grammar</dfn> (noun): the structure and system of a
                language, or of languages in general, usually considered to
                consist of syntax and morphology
            </div>

            <Row>
                <Col sm="12" lg="7">
                    <p>
                        Grammar is the system of a language. People sometimes
                        describe grammar as the "rules" of a language; but in
                        fact no language has rules*. If we use the word "rules",
                        we suggest that somebody created the rules first and
                        then spoke the language, like a new game. But languages
                        did not start like that. Languages started by people
                        making sounds which evolved into words, phrases and
                        sentences. No commonly-spoken language is fixed. All
                        languages change over time. What we call "grammar" is
                        simply a reflection of a language at a particular time.
                    </p>
                </Col>
                <Col sm="12" lg="5" className="text-center">
                    <Image
                        src="/assets/images/grammar/grammar-directions.png"
                        alt="Think of grammar as a signpost"
                        width="300"
                        height="200"
                    />
                </Col>
            </Row>
            <p>
                Do we need to study grammar to learn a language? The short
                answer is "no". Very many people in the world speak their own,
                native language without having studied its grammar. Children
                start to speak before they even know the word "grammar". But if
                you are serious about learning a foreign language, the long
                answer is "yes, grammar can help you to learn a language more
                quickly and more efficiently." It's important to think of
                grammar as something that can help you, like a friend. When you
                understand the grammar (or system) of a language, you can
                understand many things yourself, without having to ask a teacher
                or look in a book.
            </p>

            <p>
                So think of grammar as something good, something positive,
                something that you can use to find your way - like a signpost or
                a map.
            </p>

            <p>
                *Except invented languages like{" "}
                <Link href="https://en.wikipedia.org/wiki/Esperanto">
                    <a>Esperanto</a>
                </Link>
                . And if Esperanto were widely spoken, its rules would soon be
                very different.
            </p>

            <nav>
                <Link className="" href="/grammar">
                    <a>Grammar</a>
                </Link>
            </nav>

            <nav className="">
                <Link
                    href="https://englishStu.vercel.app"
                    title="Go to EnglishStu home page"
                >
                    <a>EnglishStu</a>
                </Link>{" "}
                :
                <Link href="/grammar">
                    <a> Grammar</a>
                </Link>{" "}
                : What is Grammar?
            </nav>
        </>
    );
}
