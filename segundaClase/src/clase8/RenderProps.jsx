/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState } from "react"

const TasksList = ({task}) => {
    return (
        <ul>
            {task.map(task =>(
                <li key={task.id}>{task.nombre}</li>
            ))}
        </ul>
    )
}

const Filter = ({children}) => {
    const [filterState, setFilterState] = useState("all");

    const handlerFilterState = (evento) => {
        setFilterState(evento.target.value);
    }

    return children (filterState, handlerFilterState);
}


const RenderProps = () => {
    const tasks = [
        {id:1, nombre:"Tender la Cama", completed:true},
        {id:2, nombre:"Hacer el desayuno", completed:false},
        {id:3, nombre:"Hacer el Almuerzo", completed:false}
    ]

    return (
       <Filter>
            {(filterState, handlerFilterState) => {

              <div className="container">
                <div className="row">
                    <div className="col">
                        <label htmlFor="filtros">Tareas</label>
                        <select select={filterState} onChange={handlerFilterState}>
                            <option value={"all"}>Todos</option>
                            <option value={"true"}>Completados</option>
                            <option value={"all"}>No completados</option>
                        </select>
                        <TasksList task={filterState == "all" ? tasks : tasks.filter(item => (item.completed == filterState ? tasks.completed : !tasks.completed))} />
                    </div>
                </div>
              </div>  
                
            }}
            
       </Filter>
       

    )
}
export default RenderProps;