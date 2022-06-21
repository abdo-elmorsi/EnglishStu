import React, { useMemo } from "react";
import { useSelector } from "react-redux";
// import { useTranslation } from "next-i18next";

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
    const { Name, filter, setfilter, t, Data, DataType, setDataType } = props;
    const { speak } = useSpeechSynthesis();
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
                name: "ID",
                selector: (row) => row.id,
                sortable: true,
                width: "18%",
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
                width: "24%",
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
                    <Col sm="12">
                        <Form.Group>
                            <Form.Label>
                                {t("search", { ns: "main" })}
                            </Form.Label>
                            <Form.Control
                                value={filter}
                                type="search"
                                id="search"
                                onChange={(e) => setfilter(e.target.value)}
                                placeholder={`${t("name", { ns: "main" })}...`}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm="12 mt-3">
                        <Form.Group>
                            <Form.Label>{t(`choose_${Name}_type`)}</Form.Label>
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
                                            className="btn btn-secondary"
                                        >
                                            {ele}
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
                            title={t(Name, { ns: "main" })}
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
