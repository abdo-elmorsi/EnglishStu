import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import IsAdmin from "../../../components/Admin";

// Firebase
import { db } from "../../../lib/firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

// Bootstrap
import { Breadcrumb } from "react-bootstrap";

// Components
import Loader from "../../../components/loader";
import TableComp from "../../../components/Table/Index";
import AddAcollocation from "./AddCollcations";
import UpdateCollocation from "./UpdateCollocation";

export default function Collocations() {
    const [loading, setloading] = useState(true);
    const [Collocations, setCollocations] = useState([]);
    const [DataType, setDataType] = useState("");
    const [filter, setfilter] = useState("");

    useEffect(() => {
        onSnapshot(
            query(collection(db, "Collocations"), orderBy("createdAt")),
            (snapshot) => {
                if (snapshot.empty) {
                    return;
                }
                setCollocations([
                    ...snapshot.docs.map((doc, i) => ({
                        index: i + 1,
                        id: doc.id,
                        ...doc.data(),
                    })),
                ]);
                setloading(false);
            }
        );
    }, []);
    // filter data by search input
    const filteredData = useMemo(() => {
        if (filter === "") Collocations;

        return Collocations.filter((item) => {
            return item.en.Name.toLowerCase().includes(filter.toLowerCase());
        });
    }, [filter, Collocations]);

    const columns = useMemo(
        () => [
            {
                name: "ID",
                selector: (row) => row?.index || row.id,
                sortable: true,
                width: "18%",
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
            {
                name: `Actions`,
                cell: (row) => <UpdateCollocation status={row} />,
            },
        ],

        []
    );
    return (
        <IsAdmin>
            <Breadcrumb>
                <Link href="/">
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Link>
                <Link href="/admin">
                    <Breadcrumb.Item active>Admin</Breadcrumb.Item>
                </Link>
                <Link href="/admin/collocations">
                    <Breadcrumb.Item active>Collocations</Breadcrumb.Item>
                </Link>
            </Breadcrumb>
            <h1 className="mb-4">Collocation List</h1>

            <AddAcollocation />
            {loading ? (
                <Loader />
            ) : (
                <TableComp
                    Name="collocations"
                    filter={filter}
                    Columns={columns}
                    setfilter={setfilter}
                    Data={filteredData}
                    DataType={DataType}
                    setDataType={setDataType}
                />
            )}
        </IsAdmin>
    );
}
