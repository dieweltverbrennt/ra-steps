import React from "react";

const TableItem = ({ item, onDelete }) => {
    function deleteItem () {
        onDelete(item);
    }


    return (
        <div className="table__item">
            <p className="table__item-date"> {item.date} </p>
            <p className="table__item-steps"> {item.steps} </p>
            <button className="table__item-btn" onClick={deleteItem}> &#10006; </button>
        </div>
    );
}

export default TableItem;