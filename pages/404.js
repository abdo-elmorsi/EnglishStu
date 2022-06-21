import React from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";

import Styles from "../styles/404.module.scss";
import Meta from "../components/meta";
export default function PageNotFound() {
    return (
        <>
            <Meta title="EnglishStu - Page Not Found" />
            <Card className={`${Styles.not_found_container}`}>
                <div className={`${Styles.notfound}`}>
                    <Card.Header>
                        <h1>Oops! This Page Could Not Be Found</h1>
                    </Card.Header>
                    <Card.Body>
                        <p>
                            "Sorry but the page you are looking for does not
                            exist, have been removed. name changed or is
                            temporarily unavailable"
                        </p>
                        <Link href="/">
                            <a>Back To Home Page</a>
                        </Link>
                    </Card.Body>
                </div>
            </Card>
        </>
    );
}
