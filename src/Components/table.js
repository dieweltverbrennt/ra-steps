import React from "react";
import '../App.css';

import TableItem from "./tableItem";

const Table = ({ items, onDelete}) => {

    function handleDelete (item) {
        onDelete(item.id);
    }

    return (
        <div className="table">
            <div className="table__head">
                <h3>Дата</h3>
                <h3>Пройдено км</h3>
                <h3>Действия</h3>
            </div>
            <div className="table__list">
                {items.map((item) => (
                    <TableItem key={item.id} item={item} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default Table;