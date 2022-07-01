import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DataServices from "../../../lib/firebase/services";

const AddCollocation = () => {
    const [show, setShow] = useState(false);
    const { darkMode } = useSelector((state) => state.config);

    const handleClose = () => {
        setShow(false);
        reset();
    };
    const handleShow = () => setShow(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ mode: "onBlur" });
    const onSubmit = async (data) => {
        const Data = {
            en: {
                Name: data.NameEn,
                Ex: data.ExEn || "Not available right now.",
                Desc: data.DescEn || "Not available right now.",
            },
            ar: {
                Name: data.NameAr,
                Ex: data.ExAr || "غير متوفر.",
                Desc: data.DescAr || "غير متوفر.",
            },
        };
        try {
            await DataServices.addItem("Collocations", Data).then(() => {
                toast.success(`Collocation ( ${Data.en.Name} ) is  added`);
            });
        } catch (error) {
            console.log(error);
            toast.error("Sorry there is an error");
        }
        handleClose();
    };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add a collocation
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header
                    className={`${darkMode ? "bg-dark" : null}`}
                    closeButton
                >
                    <Modal.Title>Add a collocation</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body className={`${darkMode ? "bg-dark" : null}`}>
                        <Row>
                            <Col md={6}>
                                <h2>English</h2>
                                <InputGroup className="mt-2">
                                    <Form.Control
                                        {...register("NameEn", {
                                            required: "Name is required",
                                        })}
                                        autoFocus
                                        name="NameEn"
                                        placeholder={"Name"}
                                        type="text"
                                        aria-label="Name"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <Form.Text className="err-msg text-danger">
                                    {errors?.NameEn?.message}
                                </Form.Text>

                                <InputGroup className="mt-2">
                                    <Form.Control
                                        {...register("ExEn")}
                                        name="ExEn"
                                        placeholder={"Example"}
                                        type="text"
                                        aria-label="Ex"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <InputGroup className="mt-2">
                                    <Form.Control
                                        {...register("DescEn")}
                                        name="DescEn"
                                        placeholder={"Descreption"}
                                        type="text"
                                        aria-label="Descreption"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>

                            <Col md={6}>
                                <h2>Arabic</h2>
                                <InputGroup className="mt-2">
                                    <Form.Control
                                        {...register("NameAr", {
                                            required: "Name is required",
                                        })}
                                        name="NameAr"
                                        placeholder={"الاسم"}
                                        type="text"
                                        aria-label="Name"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <Form.Text className="err-msg text-danger">
                                    {errors?.NameAr?.message}
                                </Form.Text>
                                <InputGroup className="mt-2">
                                    <Form.Control
                                        {...register("ExAr")}
                                        name="ExAr"
                                        placeholder={"مثال"}
                                        type="text"
                                        aria-label="Example"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <InputGroup className="mt-2">
                                    <Form.Control
                                        {...register("DescAr")}
                                        name="DescAr"
                                        placeholder={"الوصف"}
                                        type="text"
                                        aria-label="Descreption"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer
                        className={`justify-content-around ${
                            darkMode ? "bg-dark" : null
                        }`}
                    >
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default AddCollocation;
