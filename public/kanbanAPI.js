export default class KanbanAPI {
    static getItem(columnId){
        // Grab every column and find if column id = column id being passed in
        const column = aquire().find(column => column.id == columnId);

        if (!column){
            return[];
        }
        return column.items;
    }
}

function aquire(){
    const json = localStorage.getItem("kanbanData")
// default data if kanban has not been used before
    if (!json) {
        return [
        {
            id: 1,
            items: []
        },
        {
            id: 2,
            items: []
        },
        {
            id: 3,
            items: []
        },                
    ];
    }
    return JSON.parse(json);
}
function save(data) {
    localStorage.setItem("kanbanData", JSON.Stringify(data));
}