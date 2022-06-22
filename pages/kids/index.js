import Link from "next/link";
import React from "react";
import { Breadcrumb } from "react-bootstrap";
import Meta from "../../components/meta";

export default function Index() {
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
            </Breadcrumb>
            <h1 className="mb-4">English for Kids</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/kids/numbers">
                            <a>Numbers</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/kids/numbers-chart">
                            <a>Numbers Chart</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/kids/numbers-maths">
                            <a>Numbers Maths</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/kids/quizzes">
                            <a>kids Quizzes</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
