export interface Todo{
    _id:string,
    todo:string,
}
export interface State{
    todo:{
        todo: Todo[];
    }
}