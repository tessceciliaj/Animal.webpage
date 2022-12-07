function Animal(name, lifespan, group, food, description, length, weight, found) {
    this.name = name;
    this.lifespan = lifespan;
    this.group = group;
    this.food = food;
    this.description = description;
    this.length = length;
    this.weight = weight;
    this.found = found; 
}

let echidna = new Animal(
    "Echidna", 
    "50 years", 
    "Mammals", 
    "Insects such as ants and termites, beetle larvae and worms", 
    "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.", 
    "76 cm", 
    "10 kg", 
    "Throughout Australia");
let lizard = new Animal(
    "Frill-Necked Lizard", 
    "20 years", 
    "Reptile", 
    "Small insects and spiders", 
    "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.", 
    "90 cm", 
    "1 kg", 
    "Northern Australia");
let cassowary = new Animal(
    "Cassowary",
    "20 years",
    "bird",
    "Plants matter like fruit, insects and small animals like mice amd lizards",
    "It is not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
    "1.7 m",
    "44 kg",
    "Queensland"
);

let animalArray = [echidna, lizard, cassowary];

/*
let birdsArray = [cassowary];
let mammalsArray = [echidna];
let reptilesArray = [lizard];
let birdsDiv = document.querySelector(".birds");
*/



function createPara(animal) {
    let newPara = document.createElement("p");
    newPara.textContent = animal;
    newPara.className = "animalTab";

    document.querySelector(".sidebar").appendChild(newPara);
}

/*
function addAnimalB(targetElement, source) {
    if(Array.isArray(source)) {
        source.forEach(function(element) {
            targetElement.appendChild(createPara(element));
        });
    } else {
        console.log("the target element is not an array")
    }
}
*/

animalArray.forEach(function(animal) {
    createPara(animal.name);

});

// Therese experiment with click-active

document.querySelector(".animalTab").forEach(function (item) {
    item.addEventListener("click", setActive);
        /*
    animal.addEventListener("mouseenter", displayAnimal);
    animal.addEventListener("mouseleave", hideAnimal);
    */
});

function setActive() {
    animalArray.forEach(function (item) {
        item.classList.remove("active");
    })
    this.classList.add("active");
};

/*

function displayAnimal() {
    let animalName = this.classList[0];
    this.classList.add("active");

    animalArray.forEach(function (item) {
        if (item.classList.contains(animalName)) {
            item.classList.add("show");
            return;
        } else {
            item.classList.remove("show");
        }
    });
}

function hideAnimal() {
    this.classList.remove("active");
    animalArray.forEach(function (item) {
        item.classList.remove("show");
    });
}
*/
