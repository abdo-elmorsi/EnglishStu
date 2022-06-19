import React from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";
// translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Styles from "../styles/404.module.scss";
import Meta from "../components/meta";
export default function PageNotFound() {
    const { t } = useTranslation("main");

    return (
        <>
            <Meta title="English Stu | Page Not Found" />
            <Card className={`${Styles.not_found_container}`}>
                <div className={`${Styles.notfound}`}>
                    <Card.Header>
                        <h1>{t("Oops! This Page Could Not Be Found")}</h1>
                    </Card.Header>
                    <Card.Body>
                        <p>
                            {t(
                                " Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable"
                            )}
                        </p>
                        <Link href="/">
                            <a>{t("Back To Home Page")}</a>
                        </Link>
                    </Card.Body>
                </div>
            </Card>
        </>
    );
}
// translation ##################################
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["main"])),
        },
    };
}
// translation ##################################
