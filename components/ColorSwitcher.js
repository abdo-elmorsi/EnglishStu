// import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

export default function ColorSwitcher({ text }) {
    const { darkMode } = useSelector((state) => state.config);

    return (
        <span className={` ${darkMode ? "text-secondary" : "text-primary"}`}>
            {text}
        </span>
    );
}
