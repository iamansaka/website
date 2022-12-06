import * as React from "react"

const Arrow = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-up-right"
        width={44}
        height={44}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M17 7 7 17M8 7h9v9" />
    </svg>
)

export default Arrow;
