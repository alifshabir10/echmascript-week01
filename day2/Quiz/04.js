let bag = ["Asus laptop rog", "AK-47","manga one piece", "keyboard", "mouse", "tv"];

function filterBg(space, prefix){
    let result = [];
    for (let i = 0; i < space.length; i++) {
        if (space[i].startsWith(prefix)){
            result.push(space[i]);
        }
        
    }
    return result;
}

console.log(filterBg(bag, "a"));
console.log(filterBg(bag, "m"));