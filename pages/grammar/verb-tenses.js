import Link from "next/link";
import React from "react";

export default function VerbTenses() {
    return (
        <>
            <h1>The 12 Basic English Tenses</h1>
            <p>
                <a href="verb-tenses-system">
                    <strong>The English Tense System</strong>
                </a>
            </p>
            <p>
                The links below are to lessons for each of the{" "}
                <strong>12 basic English tenses</strong>*. For each tense we
                look at:
            </p>

            <ul>
                <li>
                    <strong>Structure:</strong> How do we make the tense?
                </li>
                <li>
                    <strong>Use:</strong> When and why do we use the tense?
                </li>
                <li>
                    <strong>Examples:</strong> How do we use the tense?
                </li>
            </ul>

            <p>
                Some lessons look at additional matters, and most of them finish
                with a quiz to check your understanding.
            </p>
            <ul>
                <li>
                    <Link href="/grammar/tenses/present/simple">
                        <a>
                            <strong>Present Simple</strong>
                        </a>
                    </Link>
                    <br />
                    <em>I do, I do do </em>
                </li>
                <li>
                    <Link href="/grammar/tenses/present/continuous">
                        <a>
                            {" "}
                            <strong>Present Continuous</strong>
                        </a>
                    </Link>
                    <br />
                    <em>I am doing </em>
                </li>
                <li>
                    <Link href="/grammar/tenses/present/perfect">
                        <a>
                            <strong>Present Perfect</strong>
                        </a>
                    </Link>
                    <br />
                    <em>I have done </em>
                </li>
                <li>
                    <Link href="/grammar/tenses/present/perfect-continuous">
                        <a>
                            <strong>Present Perfect Continuous</strong>
                        </a>
                    </Link>
                    <br />
                    <em>I have been doing </em>
                </li>
            </ul>

            <ul className="mt-3">
                <li>
                    <Link href="/grammar/tenses/past/simple">
                        <a>
                            <strong>Past Simple</strong>
                        </a>
                    </Link>
                    <br />
                    <em>I did, I did do </em>
                </li>
                <li>
                    <Link href="/grammar/tenses/past/continuous">
                        <a>
                            <strong>Past Continuous</strong>
                        </a>
                    </Link>
                    <br />
                    <em>I was doing</em>
                </li>
                <li>
                    <Link href="/grammar/tenses/past/perfect">
                        <a>
                            <strong>Past Perfect</strong>
                        </a>
                    </Link>
                    <br />
                    <em>I had done </em>
                </li>
                <li>
                    <Link href="/grammar/tenses/past/perfect-continuous">
                        <a>
                            <strong>Past Perfect Continuous</strong>
                        </a>
                    </Link>
                    <br />
                    <em>I had been doing </em>
                </li>
            </ul>

            <ul className="mt-3">
                <li>
                    <Link href="/grammar/tenses/future/simple">
                        <a>
                            <strong>Future Simple</strong>
                        </a>
                    </Link>
                    <br />
                    <em>I will do </em>
                </li>
                <li>
                    <Link href="/grammar/tenses/future/continuous">
                        <a>
                            <strong>Future Continuous</strong>
                        </a>
                    </Link>
                    <br />
                    <em>I will be doing </em>
                </li>
                <li>
                    <Link href="/grammar/tenses/future/perfect">
                        <a>
                            <strong>Future Perfect</strong>
                        </a>
                    </Link>
                    <br />
                    <em>I will have done </em>
                </li>
                <li>
                    <Link href="/grammar/tenses/future/perfect-continuous">
                        <a>
                            <strong>Future Perfect Continuous</strong>
                        </a>
                    </Link>
                    <br />
                    <em>I will have been doing </em>
                </li>
            </ul>

            <div className="mb-4 p-2 bg-secondary text-white rounded font-italic">
                Many English learners worry too much about tense. If you stopped
                100 native English speakers in the street and asked them about
                tense, 1 of them might give you an intelligent answer - if you
                were lucky. The other 99 would know little about terms like
                "past perfect" or "present continuous". And they would know
                nothing about aspect, voice or mood. But they can all speak
                fluent English and communicate effectively. Of course, for ESL
                it helps to know about tenses, but don't become obsessed with
                them. Be like those native speakers!{" "}
                <strong>Speak naturally!</strong>
            </div>

            <p>
                *Some grammarians consider that strictly-speaking there are only
                two English tenses. Others argue six or other quantities. For
                the sake of simplicity, Learners of English as a Foreign or
                Second Language are usually taught that - taking into account
                aspect and future modals - there are 12 tenses in English.
            </p>
        </>
    );
}
