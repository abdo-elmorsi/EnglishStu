import React, { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DataServices from "../../../lib/firebase/services";

const Addidioms = () => {
    const [show, setShow] = useState(false);
    const { darkMode } = useSelector((state) => state.config);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        if (data.first && data.second) {
            const Data = {
                first: data.first,
                second: data.second,
                Ex: data.Ex || "Not available",
            };
            try {
                await DataServices.addItem("Idioms", Data).then(() => {
                    toast.success(`Idioms ( ${Data.first} ) is  added`);
                });
            } catch (error) {
                console.log(error);
                toast.error("Sorry there is an error");
            }
            handleClose();
        }
    };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Idioms
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header
                    className={`${darkMode ? "bg-dark" : null}`}
                    closeButton
                >
                    <Modal.Title>Add An Idioms</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body className={`${darkMode ? "bg-dark" : null}`}>
                        <InputGroup className="mt-2">
                            <Form.Control
                                {...register("first", {
                                    required: "The name is required",
                                })}
                                autoFocus
                                name="first"
                                placeholder={"Name"}
                                type="text"
                                aria-label="first"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Form.Text className="err-msg text-danger">
                            {errors?.first?.message}
                        </Form.Text>

                        <InputGroup className="mt-2">
                            <Form.Control
                                {...register("second", {
                                    required: "The description is requird",
                                })}
                                name="second"
                                placeholder={"desc"}
                                type="text"
                                aria-label="second"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Form.Text className="err-msg text-danger">
                            {errors?.second?.message}
                        </Form.Text>

                        <InputGroup className="mt-2">
                            <Form.Control
                                {...register("Ex")}
                                name="Ex"
                                placeholder={"example"}
                                type="text"
                                aria-label="Ex"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Form.Text className="err-msg text-danger">
                            {errors?.Ex?.message}
                        </Form.Text>
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

export default Addidioms;
