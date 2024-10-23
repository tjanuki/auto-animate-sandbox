type TodoItemProps = {
    id: number;
    text: string;
    onDelete: (id: number) => void;
};

export const TodoItem = ({ id, text, onDelete }: TodoItemProps) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
            <span>{text}</span>
            <button
                onClick={() => onDelete(id)}
                className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
            >
                Delete
            </button>
        </div>
    );
};