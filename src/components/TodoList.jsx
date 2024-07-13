import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const { todos } = props    
    
  return (
    <ul className='main'>
        {/* Mapping out funtions - array map */}
        {todos.map((todo, todoIndex) => {
            return (
                <TodoCard {...props} key={todoIndex} index={todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
