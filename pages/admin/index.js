import React from "react";
import { useSession } from "next-auth/react";
import Loader from "../../components/loader";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import Link from "next/link";
export default function Admin() {
    const { data, status } = useSession({ required: true });
    if (status === "loading") {
        return <Loader />;
    }

    return (
        <div>
            <Breadcrumb>
                <Link href="/">
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Link>
                <Link href="/admin">
                    <Breadcrumb.Item active>Admin</Breadcrumb.Item>
                </Link>
            </Breadcrumb>
            <h1>Wecome {data.user.name}</h1>
            <Row>
                <Col sm="12" lg="4">
                    <h3>
                        <Link href="/admin/idioms">
                            <a>Idioms</a>
                        </Link>
                    </h3>
                </Col>
                <Col sm="12" lg="4">
                    <h3>
                        <Link href="/admin/collocations">
                            <a>Collocations</a>
                        </Link>
                    </h3>
                </Col>
                <Col sm="12" lg="4">
                    <h3>
                        <Link href="/admin/phrasal-verbs">
                            <a>Phrasal Verbs</a>
                        </Link>
                    </h3>
                </Col>
            </Row>
        </div>
    );
}
