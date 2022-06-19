// import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

// translation
import { Trans, useTranslation } from "next-i18next";

export default function ColorSwitcher({ text }) {
    const { t } = useTranslation("main");
    const { darkMode } = useSelector((state) => state.config);

    return (
        <span
            className={`${"className"} ${
                darkMode ? "text-info" : "text-primary"
            }`}
        >
            <Trans t={t}> {text} </Trans>
        </span>
    );
}
