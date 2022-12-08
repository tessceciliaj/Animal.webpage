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


//siedebar para

function createPara(animal) {

    let newPara = document.createElement("p");
    newPara.textContent = animal;
    newPara.classList.add("animalTab");
    document.querySelector(".sidebar").appendChild(newPara);
}

animalArray.forEach(function (animal) {
    createPara(animal.name);

});

// show/hide

let animals = Array.from(document.getElementsByClassName("animalTab"));

let animalDivs = Array.from(document.getElementsByClassName("container"));

animals.forEach(function (tab) {
    tab.addEventListener("mouseenter", activeAnimal);
    tab.addEventListener("mouseleave", unactiveAnimal);
    tab.addEventListener("click", showAnimal);
});

function activeAnimal() {
    this.classList.add("active");
    
};

function unactiveAnimal() {
    this.classList.remove("active");
};

function showAnimal() {
    animalDivs.forEach(function (item) {
        let animalName = item.classList[1];
        console.log(animalName)
        if (item.classList.contains(animalName)) {
            item.classList.add("show");
        }
    })
};
