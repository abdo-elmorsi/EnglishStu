import React from "react";
import { useSession } from "next-auth/react";
import Loader from "../loader";
export default function Index(props) {
    const { status } = useSession({ required: true });
    if (status === "loading") {
        return <Loader />;
    }
    return <>{props.children}</>;
}
