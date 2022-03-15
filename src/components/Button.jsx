import React from "react";

export default function Button (props) {
    let  { title, action } = props;
    return <button onClick={action}>{title}</button>
};