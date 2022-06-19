import React from "react";
import { Card } from "react-bootstrap";
// translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Link from "next/link";
import Image from "next/image";

import { slideUp, animateList } from "../helpers/Animation";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
export default function TenseCard({ data }) {
    const { t } = useTranslation("main");

    return (
        <ScrollReveal
            className="col-sm-12 col-md-6 col-lg-4 "
            variants={animateList}
        >
            <motion.div variants={slideUp} className="card mb-0">
                <Image
                    width={"200"}
                    height={"100"}
                    src={`${data.image}`}
                    alt={`${data.title}`}
                    layout="responsive"
                />
                <Card.Body>
                    <h5 className="card-title">{t(`${data.title}`)}</h5>
                    <p className="card-text" style={{ minHeight: "100px" }}>
                        {t(data.desc)}
                    </p>
                    <Link href={`/${data.link}`} className="btn btn-primary">
                        <a>{t("Details")}</a>
                    </Link>
                </Card.Body>
            </motion.div>
        </ScrollReveal>
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
