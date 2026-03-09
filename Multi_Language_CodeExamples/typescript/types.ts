type Status = 'active' | 'inactive' | 'pending';

interface Todo {
    id: number;
    title: string;
    status: Status;
}

const todo: Todo = {
    id: 1,
    title: "Learn TypeScript",
    status: "active"
};

console.log(todo);
