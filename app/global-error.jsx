"use client";
import Error from "next/error";


export default function GlobalError({ error }) {
    return (
        <div>
            <Error statusCode={statusCode} />
        </div>
    );
}
