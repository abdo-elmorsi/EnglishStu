import React from "react";
import Link from "next/link";

import Styles from "../styles/404.module.scss";
import Meta from "../components/meta";
export default function PageNotFound() {
    return (
        <>
            <Meta title="EnglishStu - Page Not Found" />
            <div className={`${Styles.not_found_container}`}>
                <div className={`${Styles.notfound}`}>
                    <h1 className="mb-4">Oops! This Page Could Not Be Found</h1>
                    <p>
                        "Sorry but the page you are looking for does not exist,
                        have been removed. name changed or is temporarily
                        unavailable"
                    </p>
                    <Link href="/">
                        <a>Back To Home Page</a>
                    </Link>
                </div>
            </div>
        </>
    );
}
