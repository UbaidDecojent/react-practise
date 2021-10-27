import React, { useEffect, useState } from "react"
import List from "./List";

// get localStorage items
const getList = () => {
    let list = localStorage.getItem('list');
    if (list) {
        return JSON.parse(localStorage.getItem('list'));
    }
}


const Courses = () => {

    const [additem, setAddItem] = useState("")
    const [items, setItems] = useState(getList())

    //add item
    const add = () => {
        if (!additem) {
            alert("Enter Value")
        } else {
            setItems([...items, additem]);
            setAddItem("")
        }

    }

    //remove item
    const remove = (id) => {
        console.log(id)
        const deleteItems = items.filter((elem, index) => {
            return index !== id
        });
        setItems(deleteItems)
    }

    // set data in localStorage
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(items))
    }, [items]);




    return (
        <div className="Courses">
            <div className="container">
                <div className="todo-list">
                    <span className="courses-heading">Courses</span>
                    <div className="row ">
                        <div className="col-xl-6 col-lg-12">
                            <div className="add-items">
                                <span className="add-course">Add Courses</span>
                                <input type="text" className="add-item-inpt" value={additem} onChange={(e) => setAddItem(e.target.value)} />
                                <i className="fa-plus" onClick={add}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ fill: "#fdc800" }}><path d="M24 10H14V0h-4v10H0v4h10v10h4V14h10z" /></svg></i>
                            </div>
                            <List removeItem={remove} state={items} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;