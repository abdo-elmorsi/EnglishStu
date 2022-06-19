import React from "react";
import { Card } from "react-bootstrap";
// translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Meta from "../../components/meta";
export default function Basics() {
    const { t } = useTranslation("main");

    return (
        <>
            <Meta title="English Stu | Basics" />
            <Card>
                <Card.Body>
                    <h2>{t("basics")}</h2>
                </Card.Body>
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
