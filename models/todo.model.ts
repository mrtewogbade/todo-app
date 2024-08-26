import { model, Schema } from "mongoose";
import { ITodo } from "../interfaces/ITodo";


const TodoSchema: Schema = new Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    file: { type: String }
},
    {
        timestamps: true
    }
);

const Todo = model<ITodo>("Todo", TodoSchema);
export default Todo;



