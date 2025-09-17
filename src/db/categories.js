

export const categories = [
    {
        id:1,
        name:"Horror"
    },
    {
        id:2,
        name: "comedy"
    },
    {
        id:3,
        name: "romance"
    },
    {
        id:4,
        name: "action"
    }
]

//this will get the last element id at the beginning  
let uniqueId = categories[categories.length-1].id;

//this will get the next id
export function getUniqueId(){
    uniqueId++;
    return uniqueId;
}