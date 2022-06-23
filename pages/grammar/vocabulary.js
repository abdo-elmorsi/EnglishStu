import Link from "next/link";
import React from "react";

export default function vocabulary() {
    return (
        <>
            <h1 className="mb-4">Grammar Vocabulary</h1>
            <p>
                This is a short list of grammar terms and definitions.
            </p>

            <p>
                <strong>active voice</strong>
                <br />
                In the active voice, the subject of the verb does the action
                (e.g. <i>They killed the President</i>). See also Passive Voice.
            </p>
            <p>
                <strong>adjective</strong>
                <br />A word like <i>big, red, easy, French</i> etc. An
                adjective describes a noun or pronoun.
            </p>
            <p>
                <strong>adverb</strong>
                <br />A word like <i>slowly, quietly, well, often</i> etc. An
                adverb modifies a verb.
            </p>
            <p>
                <strong>article</strong>
                <br />
                The "indefinite" articles are <i>a</i> and <i>an</i>. The
                "definite article" is <i>the</i>.
            </p>
            <p>
                <strong>auxiliary verb</strong>
                <br />A verb that is used with a main verb. <i>Be</i>, <i>do</i>{" "}
                and <i>have</i> are auxiliary verbs. <i>Can</i>, <i>may</i>,{" "}
                <i>must</i> etc are modal auxiliary verbs.
            </p>
            <p>
                <strong>clause</strong>
                <br />A group of words containing a subject and its verb (for
                example: It was late <i>when he arrived</i>).
            </p>
            <p>
                <strong>conjunction</strong>
                <br />A word used to connect words, phrases and clauses (for
                example: <i>and</i>, <i>but</i>, <i>if</i>).
            </p>
            <p>
                <strong>infinitive</strong>
                <br />
                The basic form of a verb as in to work or <i>work</i>.
            </p>
            <p>
                <strong>interjection</strong>
                <br />
                An exclamation inserted into an utterance without grammatical
                connection (for example: <i>oh!</i>, <i>ah!</i>, <i>ouch!</i>,{" "}
                <i>well!</i>).
            </p>
            <p>
                <strong>modal verb</strong>
                <br />
                An auxiliary verb like <i>can</i>, <i>may</i>, <i>must</i> etc
                that modifies the main verb and expresses possibility,
                probability etc. It is also called "modal auxiliary verb".
            </p>
            <p>
                <strong>noun</strong>
                <br />A word like <i>table</i>, <i>dog</i>, <i>teacher</i>,{" "}
                <i>America</i> etc. A noun is the name of an object, concept,
                person or place. A "concrete noun" is something you can see or
                touch like a <i>person</i> or <i>car</i>. An "abstract noun" is
                something that you cannot see or touch like a <i>decision</i> or{" "}
                <i>happiness</i>. A "countable noun" is something that you can
                count (for example: <i>bottle</i>, <i>song</i>, <i>dollar</i>).
                An "uncountable noun" is something that you cannot count (for
                example: <i>water</i>, <i>music</i>, <i>money</i>).
            </p>
            <p>
                <strong>object</strong>
                <br />
                In the active voice, a noun or its equivalent that receives the
                action of the verb. In the passive voice, a noun or its
                equivalent that does the action of the verb.
            </p>
            <p>
                <strong>participle</strong>
                <br />
                The <i>-ing</i> and <i>-ed</i> forms of verbs. The <i>-ing</i>{" "}
                form is called the "present participle". The <i>-ed</i> form is
                called the "past participle" (for irregular verbs, this is
                column 3).
            </p>
            <p>
                <strong>part of speech</strong>
                <br />
                One of the eight classes of word in English - noun, verb,
                adjective, adverb, pronoun, preposition, conjunction and
                interjection.
            </p>
            <p>
                <strong>passive voice</strong>
                <br />
                In the passive voice, the subject receives the action of the
                verb (e.g. <i>The President was killed</i>). See also Active
                Voice.
            </p>
            <p>
                <strong>phrase</strong>
                <br />A group of words not containing a subject and its verb
                (e.g. <i>on the table, the girl in a red dress</i>).
            </p>
            <p>
                <strong>predicate</strong>
                <br />
                Each sentence contains (or implies) two parts: a subject and a
                predicate. The predicate is what is said about the subject.
            </p>
            <p>
                <strong>preposition</strong>
                <br />A word like <i>at</i>, <i>to</i>, <i>in</i>, <i>over</i>{" "}
                etc. Prepositions usually come before a noun and give
                information about things like time, place and direction.
            </p>
            <p>
                <strong>pronoun</strong>
                <br />A word like <i>I</i>, <i>me</i>, <i>you</i>, <i>he</i>,{" "}
                <i>him</i>, <i>it</i> etc. A pronoun replaces a noun.
            </p>
            <p>
                <strong>sentence</strong>
                <br />A group of words that express a thought. A sentence
                conveys a statement, question, exclamation or command. A
                sentence contains or implies a subject and a predicate. In
                simple terms, a sentence must contain a verb and (usually) a
                subject. A sentence starts with a capital letter and ends with a
                full stop (.), question mark (?) or exclamation mark (!).
            </p>
            <p>
                <strong>subject</strong>
                <br />
                Every sentence contains (or implies) two parts: a subject and a
                predicate. The subject is the main noun (or equivalent) in a
                sentence about which something is said.
            </p>
            <p>
                <strong>tense</strong>
                <br />
                The form of a verb that shows us when the action or state
                happens (past, present or future). Note that the name of a tense
                is not always a guide to when the action happens. The "present
                continuous tense", for example, can be used to talk about the
                present or the future.
            </p>

            <p>
                <strong>verb</strong>
                <br />A word like <i>(to) work</i>, <i>(to) love</i>,{" "}
                <i>(to) begin</i>. A verb describes an action or state.
            </p>

            <nav>
                <Link  href="/grammar">
                    <a>Grammar</a>
                </Link>
            </nav>

            <nav >
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
