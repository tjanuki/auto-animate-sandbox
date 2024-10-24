import {useEffect, useRef, useState} from 'react';
import { TodoItem } from './TodoItem';
import autoAnimate from '@formkit/auto-animate';

export const TodoList = () => {
    const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);
    const [input, setInput] = useState('');
    const parent = useRef(null);

    useEffect(() => {
        parent.current && autoAnimate(parent.current);
    }, [parent]);

    const addTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setTodos([...todos, { id: Date.now(), text: input }]);
        setInput('');
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={addTodo} className="mb-4">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 p-2 border rounded"
                        placeholder="Add a new todo"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                        Add
                    </button>
                </div>
            </form>

            <div ref={parent} className="space-y-2">
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        onDelete={deleteTodo}
                    />
                ))}
            </div>
        </div>
    );
};
