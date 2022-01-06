export interface TodoDTOInterface {
    id?: number;
    done: boolean;
    taskName: string;
}

export class Todo{
    id: number | undefined;
    done: boolean = false;
    taskName: string ='';

    constructor(data: TodoDTOInterface | null = null){
        if (data) {
            this.taskName = data.taskName;
            this.done = data.done;
            this.id = data.id || new Date().getTime();
        } else {
            this.id= new Date().getTime();
        }

    }
}