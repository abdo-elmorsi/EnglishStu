import React from "react";

//header
import Header from "./header";
//footer
import Footer from "./footer";
import ShortLink from "../components/ShortLink";
import { Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";

const DualHorizontal = (props) => {
    const { pathname } = useRouter();
    return (
        <>
            <main className="main-content">
                <Header />
                <div className="content-inner">
                    <Row>
                        {!pathname.includes("admin") && <ShortLink />}
                        <Col
                            lg={`${!pathname.includes("admin") && "6"}`}
                            className="order-1 order-lg-2"
                        >
                            {props.children}
                        </Col>
                    </Row>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default DualHorizontal;
