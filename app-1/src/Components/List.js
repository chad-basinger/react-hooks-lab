import React, {useState} from 'react'

const List = () => {
    const [todoos, setTodoos] = useState(['Find a job', 'Mow the lawn', 'Clean garage'])
    const [userToDo, setUserToDo] = useState('')

    function addToDoItem() {
        const newToDoList = [userToDo, ...todoos]
        setTodoos(newToDoList)
        setUserToDo('')
    }

    return (
        <div>
            <button onClick={addToDoItem}>Add To Do Item</button>
            <input 
                onChange={e => setUserToDo(e.target.value)}
                placeholder= 'Enter a new To Do'
                value= {userToDo}
            />
            {
                todoos.map(todoosStr => <h2>{todoosStr}</h2>)
            }
        </div>
    )
}

export default List;