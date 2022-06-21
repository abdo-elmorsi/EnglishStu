import React from "react";

export default function ExpandedComponent({ data, darkMode }) {
    return (
        <div className="pt-4">
            Description:
            <pre
                style={{
                    whiteSpace: "break-spaces",
                    padding: "0 10px",
                    color: `${darkMode ? "#FFEB3B" : "#dc3545d6"}`,
                }}
            >
                <p>{JSON.stringify(data?.en.Desc)}</p>

                <p dir="rtl">{JSON.stringify(data?.ar.Desc)}</p>
            </pre>
            Example:
            <pre
                style={{
                    whiteSpace: "break-spaces",
                    padding: "0 10px",
                    color: `${darkMode ? "#FFEB3B" : "#6f42c1"}`,
                }}
            >
                <p> {JSON.stringify(data?.en?.Ex)}</p>
                <p dir="rtl">{JSON.stringify(data?.ar.Ex)}</p>
            </pre>
        </div>
    );
}
