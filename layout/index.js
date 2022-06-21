import React from "react";

//header
import Header from "./header";
//footer
import Footer from "./footer";
import ShortLink from "../components/ShortLink";
import { Col, Row } from "react-bootstrap";

const DualHorizontal = (props) => {
    return (
        <>
            <main className="main-content">
                <Header />
                <div className="content-inner">
                    <Row>
                        <ShortLink />
                        <Col lg={6} className="order-1 order-lg-2">
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
