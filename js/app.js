//sidebar
/*
1. create paragraph
2. insert content
3. make it clickable plus function
*/


createPara("panda");

function createPara(animal) {
    let newPara = document.getElementsByClassName("sidebar").createElement("p")
    newPara.textContent(animal);

    document.getElementsByClassName("sidebar").appendChild(animal);
}