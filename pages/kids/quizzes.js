import Link from "next/link";
import React from "react";
import { Breadcrumb } from "react-bootstrap";
import Meta from "../../components/meta";

export default function NumbersQuiz() {
    return (
        <>
            <Meta title="English For Kids | EnglishStu | Learn English" />

            <Breadcrumb>
                <Link href="/">
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Link>
                <Link href="/kids">
                    <Breadcrumb.Item active>Kids</Breadcrumb.Item>
                </Link>
                <Link href="/kids/quizzes">
                    <Breadcrumb.Item active>Numbers Quiz</Breadcrumb.Item>
                </Link>
            </Breadcrumb>
            <h1 className="mb-4">Learn about Numbers</h1>

            <nav>
                <ul>
                    <li>
                        <Link href="numbers">
                            <a>Numbers For Kids</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="numbers-chart">
                            <a>Counting Chart 1-100</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="numbers-maths">
                            <a>Numbers for Maths</a>
                        </Link>
                    </li>
                    <li>Counting Quiz</li>
                </ul>
            </nav>
        </>
    );
}
