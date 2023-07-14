import React, { useState } from "react";
import '../App.css';

import Form from "./form";
import Table from "./table";

const Workouts = () => {
    let [list, setList] = useState([])

    function addListItem (data) {
        const doubles = list.findIndex((item) => item.date === data.date);
        if (doubles === -1) {
            setList((prevList) => [...prevList, data]);
        } else {
            setList((prevList) => {
                const updated = [...prevList];
                updated[doubles].steps = Number(updated[doubles].steps) + Number(data.steps);
                return updated;
            })
        }
    }

    function sortByData(list) {
        if (list.length >= 2) {
            const sorted = list.sort((a, b) => {
                const collator = new Intl.Collator();
                return collator.compare(b.date, a.date);
            });
            return sorted;
        } else return list;
    }

    function onDelete(item) {
        setList((prevList) => prevList.filter((list) => list.id !== item));
    }

    return (
        <div>
            <Form onSubmit={addListItem}/>
            <Table items={sortByData(list)} onDelete={onDelete}/>
        </div>
    );

}

export default Workouts;