import { TodoList } from './components/TodoList';

function App() {
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">
                    Auto-Animate Todo List
                </h1>
                <TodoList />
            </div>
        </div>
    );
}

export default App;