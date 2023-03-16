import React, { useState } from 'react';
import todo from "../assets/todo_list.jpg"
import "../stylesheets/todo.css"

const TodoList = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('all');

    const addItem = (text) => {
        const newItems = [...items, { text, completed: false }];
        setItems(newItems);
    };

    const deleteItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
        // console.log(items)
    };


    const toggleCompleted = (index) => {
        const newItems = [...items];
        newItems[index].completed = !newItems[index].completed;
        setItems(newItems);
    };

    const filteredItems = items.filter((item) => {
        if (filter === 'completed') {
            return item.completed;
        } else if (filter === 'not-completed') {
            return !item.completed;
        } else {
            return true;
        }
    });

    return (
        <div className='justify-content-center w-100'>
            <h1 className=" mb-4 text-success">Todo List</h1>

            <div className="main-div ">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>

                    <div >
                        <label className="m-2">
                            <input
                                type="radio"
                                name="filter"
                                value="all"
                                checked={filter === 'all'}
                                onChange={() => setFilter('all')}
                            />
                            All
                        </label >
                        <label className="m-2">
                            <input
                                type="radio"
                                name="filter"
                                value="completed"
                                checked={filter === 'completed'}
                                onChange={() => setFilter('completed')}
                            />
                            Completed
                        </label>
                        <label className="m-2">
                            <input
                                type="radio"
                                name="filter"
                                value="not-completed"
                                checked={filter === 'not-completed'}
                                onChange={() => setFilter('not-completed')}
                            />
                            Not Completed
                        </label>
                    </div>

                    <form className="addItems"
                        onSubmit={(event) => {
                            event.preventDefault();
                            addItem(event.target.elements.text.value);
                            event.target.reset();
                        }}
                    >
                        <input type="text" name="text" placeholder="✍ Add Items..." required />

                        <button className='btn m-2' type="submit">Add</button>
                    </form>

                    <ul className='showItems'>
                        {filteredItems.map((item, index) => {
                            // <h3
                            //     key={index}
                            //     style={{
                            //         textDecoration: item.completed ? 'line-through' : 'none',
                            //         color: item.completed ? 'gray' : 'black'
                            //     }}
                            //     onClick={() => toggleCompleted(index)}
                            // >
                            //     {item.text}
                            //     <button className='m-4' onClick={() => deleteItem(index)}>delete</button>
                            // </h3>

                            return (
<<<<<<< HEAD
                                <div className="eachItem2" key={index}>
                                    <input onChange={() => toggleCompleted(index)} type='checkbox' checked={item.completed ? 'checked' : ''} />

=======
                                <div className="eachItem" key={index}>
>>>>>>> 3c34dbbe0fce5cc0e238ed59f96527e02ad5e90b
                                    <h3
                                        style={{
                                            textDecoration: item.completed ? 'line-through' : 'none',
                                            color: item.completed ? 'gray' : 'white'
                                        }}
<<<<<<< HEAD
                                        onClick={() => toggleCompleted(index)}>{item.text}
                                    </h3>
=======
                                        onClick={() => toggleCompleted(index)}>{item.text}</h3>
>>>>>>> 3c34dbbe0fce5cc0e238ed59f96527e02ad5e90b
                                    <div className="todo-btn">
                                        <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(index)}></i>
                                    </div>
                                </div>
                            )

                        })}
                    </ul>


                </div>
            </div>
        </div>
    );
};

export default TodoList;
