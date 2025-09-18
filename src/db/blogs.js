
export const blogs = [
    {
id:1,
title:"my first blog",
author:"darkerkin",
isPublished: false,
createdAt:"2025-06-25 sometime",
updatedAt:"2025-06-25 sometime",
publishedAt:null,
}
]

let uniqueId = blogs[blogs.length-1].id;
export function nextUniqueId(){
    uniqueId++;
    return uniqueId;
}

//blogs.js
export function resetDb() {
blogs.length = 0;
nextId = blogs.length;
}

/*
{
id:1,
title:"my first blog",
author:"darkerkin",
isPublished: False,
createdAt:"2025-06-25 sometime",
updatedAt:"2025-06-25 sometime",
publishedAt:null,
}
*/