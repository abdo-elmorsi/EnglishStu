import React from "react";
import { Card } from "react-bootstrap";

import Link from "next/link";
import Image from "next/image";

import { slideUp, animateList } from "../helpers/Animation";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
export default function TenseCard({ data }) {
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
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text" style={{ minHeight: "100px" }}>
                        {data.desc}
                    </p>
                    <Link href={`/${data.link}`} className="btn btn-primary">
                        <a>Details</a>
                    </Link>
                </Card.Body>
            </motion.div>
        </ScrollReveal>
    );
}
