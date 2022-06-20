import React from "react";
import { Card, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ScrollReveal from "../../../../components/ScrollReveal";
import { animateList, slideUp } from "../../../../helpers/Animation";
const Present = ({ data }) => {
    const { t } = useTranslation("present");

    return (
        <Row className="row-cols-1 row-cols-md-2 g-4">
            {data?.map((ele, i) => {
                return (
                    <ScrollReveal
                        key={i}
                        className="col-sm-12 col-md-6 col-lg-4 "
                        variants={animateList}
                    >
                        <motion.div variants={slideUp} className="card mb-0">
                            <Image
                                width={"200"}
                                height={"100"}
                                src={`${ele.image}`}
                                alt={`${ele.title}`}
                                layout="responsive"
                            />
                            <Card.Body>
                                <h5 className="card-title">
                                    {t(`${ele.title}`)}
                                </h5>
                                <p
                                    className="card-text"
                                    style={{ minHeight: "100px" }}
                                >
                                    {t(ele.desc)}
                                </p>
                                <Link href={`/${ele.link}`}>
                                    <a className="btn btn-primary">
                                        {t("details", { ns: "main" })}
                                    </a>
                                </Link>
                            </Card.Body>
                        </motion.div>
                    </ScrollReveal>
                );
            })}
        </Row>
    );
};

export default Present;

// Fetch Tenses Data ##################################
export async function getStaticProps({ locale }) {
    let data = [];
    try {
        const res = await fetch(
            `${process.env.API_URL}/api/Tenses/Titles/Present`
        );
        data = await res.json();
    } catch (error) {
        console.error(error);
    }
    return {
        props: {
            data,
            ...(await serverSideTranslations(locale, ["main", "present"])),
        }, // will be passed to the page component as props
    };
}
