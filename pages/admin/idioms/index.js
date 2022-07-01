import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";

// Components
import AddIdioms from "./AddIdioms";
import UpdateIdioms from "./UpdateIdioms";
import ColorSwitcher from "../../../components/ColorSwitcher";
// Bootstrap
import { ListGroup, Row, Col, Form, Breadcrumb } from "react-bootstrap";

import Styles from "../../../styles/IdiomsExpressions.module.scss";

// Firebase
import { db } from "../../../lib/firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Loader from "../../../components/loader";
export default function Idioms() {
    const { status } = useSession({ required: true });

    const [Idioms, setIdioms] = useState([]);
    const { darkMode } = useSelector((state) => state.config);
    const [filter, setfilter] = useState("");

    // Fetch Data
    useEffect(() => {
        try {
            onSnapshot(
                query(collection(db, "Idioms"), orderBy("createdAt")),
                (snapshot) => {
                    setIdioms([
                        ...snapshot.docs.map((doc, i) => ({
                            index: i + 1,
                            id: doc.id,
                            ...doc.data(),
                        })),
                    ]);
                }
            );
        } catch (error) {
            console.log(error);
        }
    }, []);

    // filter data by search input
    const filteredData = useMemo(() => {
        if (filter === "") Idioms;
        return Idioms?.filter((item) => {
            return item.first.toLowerCase().includes(filter.toLowerCase());
        });
    }, [filter, Idioms]);

    if (status === "loading") {
        return <Loader />;
    }

    return (
        <>
            <Breadcrumb>
                <Link href="/">
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Link>
                <Link href="/admin">
                    <Breadcrumb.Item active>Admin</Breadcrumb.Item>
                </Link>
                <Link href="/admin/idioms">
                    <Breadcrumb.Item active>Idioms</Breadcrumb.Item>
                </Link>
            </Breadcrumb>
            <h1 className="mb-4">Idioms List</h1>

            <Row className="mb-2 align-items-center">
                <Form.Label htmlFor="search">Search</Form.Label>
                <Col sm="12" md="6" className="text-start text-lg-center">
                    <Form.Group>
                        <Form.Control
                            value={filter}
                            type="Search"
                            id="search"
                            onChange={(e) => setfilter(e.target.value)}
                            placeholder={`Name...`}
                        />
                    </Form.Group>
                </Col>
                <Col
                    sm="12"
                    lg="6"
                    className="mt-4 mt-lg-0 text-start text-lg-center"
                >
                    <AddIdioms />
                </Col>
            </Row>
            <Row>
                {filteredData?.map((ele) => {
                    return (
                        <ListGroup key={ele.id}>
                            <ListGroup.Item
                                className={`${Styles.col} ${
                                    darkMode ? "text-white" : ""
                                } d-flex justify-content-between align-items-center`}
                            >
                                <span className="flex-grow-1">
                                    {`${ele.index}: `}
                                    <ColorSwitcher text={ele?.first} />
                                </span>
                                <span >
                                    <UpdateIdioms status={ele} />
                                </span>
                            </ListGroup.Item>
                        </ListGroup>
                    );
                })}
            </Row>
        </>
    );
}
