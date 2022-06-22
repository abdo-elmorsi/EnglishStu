import React, { useMemo } from "react";
import { useSelector } from "react-redux";

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
    const { Name, filter, setfilter, Data, DataType, setDataType } = props;
    const { speak } = useSpeechSynthesis();
    const { darkMode } = useSelector((state) => state.config);

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
        <ExpandedComp data={data} darkMode={darkMode} />
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
                name: `Voice`,
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
                name: `Name En`,
                selector: (row) => row.en.Name,
                sortable: true,
            },
            {
                name: `Name Ar`,
                selector: (row) => row.ar.Name,
                sortable: true,
            },
        ],

        [speak]
    );
    const rowPreExpanded = (row) => row.id === 1;
    return (
        <Card className="mt-4">
            <Card.Body>
                <Row>
                    <Col sm="12">
                        <Form.Group>
                            <Form.Label>Search</Form.Label>
                            <Form.Control
                                value={filter}
                                type="search"
                                id="search"
                                onChange={(e) => setfilter(e.target.value)}
                                placeholder={`Name...`}
                            />
                        </Form.Group>
                    </Col>
                    <Col sm="12 mt-3">
                        <Form.Group>
                            <Form.Label>Choose ${Name} type</Form.Label>
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
                            title={Name}
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
