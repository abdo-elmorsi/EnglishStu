import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useTranslation } from "next-i18next";

// Bootstrap
import { Button, Card, Col, Form, Row } from "react-bootstrap";
// Animation
import { motion } from "framer-motion";
import { itemSlideUp } from "../../helpers/Animation";

// table component
import DataTable from "react-data-table-component";

import ExpandedComp from "./ExpandedComponent";
// Speath
import { useSpeechSynthesis } from "react-speech-kit";

export default function Index(props) {
    const { filter, setfilter, Data, DataType, setDataType } = props;
    const { t } = useTranslation("main");
    const { speak } = useSpeechSynthesis();
    const { pathname } = useRouter();
    const { language, darkMode } = useSelector((state) => state.config);

    // get Collocations Keys from Collocations
    const uniqueValues = useMemo(() => {
        let unique = [];
        Data.forEach((ele) => {
            if (
                unique.indexOf(
                    ele?.en?.Name.split(" ").slice(0, 1).join(" ")
                ) === -1
            ) {
                unique.push(ele?.en?.Name.split(" ").slice(0, 1).join(" "));
            }
        }),
            (unique = unique.sort());
        return unique;
    }, [Data]);

    const ExpandedComponent = ({ data }) => (
        <ExpandedComp data={data} darkMode={darkMode} Language={language} />
    );

    const columns = useMemo(
        () => [
            {
                name: "id",
                selector: (row) => row.id,
                sortable: true,
            },

            {
                name: `${t("Voice")}`,
                selector: (row) => {
                    return (
                        <Button
                            size="sm"
                            onClick={() => speak({ text: row?.en?.Name })}
                        >
                            🎤
                        </Button>
                    );
                },
            },
            {
                name: `${t("Name")}`,
                selector: (row) =>
                    language === "ar" ? row?.ar?.Name : row?.en?.Name,
                sortable: true,
            },
        ],

        [language, speak, t]
    );
    const rowPreExpanded = (row) => row.id === 1;
    return (
        <Card className="mt-4" style={{ minHeight: "400px" }}>
            <Card.Body>
                <Row>
                    <Col sm="12" md="6">
                        <Form.Group className="col-12 col-md-8 mx-auto text-center text-md-start">
                            <Form.Label>{t("Search")}</Form.Label>
                            <Form.Control
                                value={filter}
                                type="search"
                                id="search"
                                onChange={(e) => setfilter(e.target.value)}
                                placeholder={`${t("Name")}...`}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm="12" md="6">
                        <Form.Group className="col-12 col-md-8 mx-auto text-center text-md-start mt-3 mt-md-0">
                            <Form.Label>
                                {t("Choose Collocations Type")}
                            </Form.Label>
                            <Form.Select
                                style={{ cursor: "pointer" }}
                                aria-label="Floating label select example"
                                onChange={(e) => setDataType(e.target.value)}
                            >
                                <option value="">All Types</option>
                                {/* map on number */}
                                {uniqueValues.map((ele, i) => {
                                    return (
                                        <option
                                            key={i}
                                            style={{
                                                cursor: "auto",
                                            }}
                                            className="btn btn-secondary mx-2"
                                        >
                                            {ele}{" "}
                                        </option>
                                    );
                                })}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <motion.div
                        variants={itemSlideUp}
                        initial="hidden"
                        animate="visible"
                        className="col"
                    >
                        <DataTable
                            title={
                                pathname.includes("collocations")
                                    ? `${t("collocations")}`
                                    : `${t("phrasal_verbs")}`
                            }
                            columns={columns}
                            data={Data?.filter((ele) =>
                                ele?.en?.Name.toString().startsWith(
                                    `${DataType}`
                                )
                            )}
                            highlightOnHover
                            theme={`${darkMode && "solarized"}`}
                            pagination
                            expandableRows
                            expandableRowsComponent={ExpandedComponent}
                            expandableRowExpanded={rowPreExpanded}
                        />
                    </motion.div>
                </Row>
            </Card.Body>
        </Card>
    );
}
