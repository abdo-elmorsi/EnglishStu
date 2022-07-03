import React from "react";
import Link from "next/link";

import { Button, Card } from "react-bootstrap";

import { motion } from "framer-motion";
import { slideDown } from "../helpers/Animation";
import dynamic from "next/dynamic";

// import ColorSwitcher from "../components/ColorSwitcher";
const ColorSwitcher = dynamic(() => import("../components/ColorSwitcher"), {
    ssr: false,
});
export default function Index() {
    return (
        <>
            <motion.div
                variants={slideDown}
                initial="hidden"
                animate="visible"
                transition={{
                    ease: "easeOut",
                    duration: 0.6,
                    delay: 0.6,
                }}
                className="card"
            >
                <Card.Header>
                    <h1 className="fw-bold mb-4">
                        LEARN <ColorSwitcher text="ENGLISH " />
                        ONLINE
                    </h1>
                    <h3>Feel good about your English!</h3>
                </Card.Header>
                <Card.Body>
                    <p>
                        Stagnant English?Tired of not getting results and
                        throwing in the towel over and over again? Don't you
                        worry! You have landed in the right place.
                        <br />
                        <br />
                        Learn all the English you need for real life, in a
                        practical, fun and in-context way.
                        <br />
                        <br />
                        Say "bye-bye" to your textbooks and start living English
                        as if you were in the UK, but without the cold and rain
                        part. ☔️
                    </p>
                    <h4>Ready to start your fluency journey? ☺</h4>
                    <Link href="/grammar">
                        <a>
                            <Button
                                className="mt-4 mx-auto w-50 d-block"
                                variant="primary"
                                size="lg"
                            >
                                Get Started
                            </Button>
                        </a>
                    </Link>
                </Card.Body>
            </motion.div>
        </>
    );
}
