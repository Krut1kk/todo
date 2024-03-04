export interface TodoItem {
  text: string;
  id: string;
  completed: boolean;
}

export interface TodoSchema {
  todos: TodoItem[];
}
