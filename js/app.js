//sidebar
/*
1. create paragraph
2. insert content
    from object (that is turned into an array and selects the animals name only)
3. make it clickable plus function
*/


createPara("panda");
createPara("apa");

function createPara(animal) {
    let newPara = document.createElement("p");
    newPara.textContent = animal;

    document.querySelector(".sidebar").appendChild(newPara);
}

funciton 