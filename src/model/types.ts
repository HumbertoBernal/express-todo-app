export type TodoItem = {
  id: string;
  name: string,
  description: string,
  updated_at: Date,
  created_at: Date,
}

export type TodoPost = {
  name: string,
  description: string,
}

export type TodoPatch = {
  name?: string,
  description?: string,
}