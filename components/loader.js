import React from "react";
import { Spinner } from "react-bootstrap";
// import Styles from "../styles/Loader.module.scss";
const Loader = () => {
    return (
        <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
        </div>
    )
};
export default Loader;
