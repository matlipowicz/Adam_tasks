import React, { useState } from "react";

const Row = ({ data, columns }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleData = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <tr>
            {columns.map((column) => {
                return <td>{data[column]}</td>;
            })}
            <td>
                <button onClick={handleData}>{isOpen ? "Close" : "Open"}</button>
                {isOpen ? (
                    <div>
                        <p>{data.address.street}</p>
                    </div>
                ) : null}
            </td>
        </tr>
    );
};

export default Row;
