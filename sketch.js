var txt = `
The sheep (Ovis aries) is a quadrupedal, ruminant mammal typically kept as livestock. Like all ruminants, sheep are members of the order Artiodactyla, the even-toed ungulates. Although the name "sheep" applies to many species in the genus Ovis, in everyday usage it almost always refers to Ovis aries. Numbering a little over one billion, domestic sheep are also the most numerous species of sheep. An adult female sheep is referred to as a ewe (/juː/), an intact male as a ram or occasionally a tup, a castrated male as a wether, and a younger sheep as a lamb.

Sheep are most likely descended from the wild mouflon of Europe and Asia. One of the earliest animals to be domesticated for agricultural purposes, sheep are raised for fleece, meat (lamb, hogget or mutton) and milk. A sheep's wool is the most widely used animal fiber, and is usually harvested by shearing. Ovine meat is called lamb when from younger animals and mutton when from older ones. Sheep continue to be important for wool and meat today, and are also occasionally raised for pelts, as dairy animals, or as model organisms for science.

Sheep husbandry is practised throughout the majority of the inhabited world, and has been fundamental to many civilizations. In the modern era, Australia, New Zealand, the southern and central South American nations, and the British Isles are most closely associated with sheep production.

Sheepraising has a large lexicon of unique terms which vary considerably by region and dialect. Use of the word sheep began in Middle English as a derivation of the Old English word scēap; it is both the singular and plural name for the animal. A group of sheep is called a flock, herd or mob. Many other specific terms for the various life stages of sheep exist, generally related to lambing, shearing, and age.

Being a key animal in the history of farming, sheep have a deeply entrenched place in human culture, and find representation in much modern language and symbology. As livestock, sheep are most often associated with pastoral, Arcadian imagery. Sheep figure in many mythologies—such as the Golden Fleece—and major religions, especially the Abrahamic traditions. In both ancient and modern religious ritual, sheep are used as sacrificial animals.`;
var order = 6;
var ngrams = {};

var button;

function setup() {
    noCanvas();
    for (var i = 0; i < txt.length - order; i++) {
        var gram = txt.substring(i, i + order);

        if (!ngrams[gram]) {
            ngrams[gram] = [];
            ngrams[gram].push(txt.charAt(i + order));

        } else {
            ngrams[gram].push(txt.charAt(i + order));
        }
    }

    button = createButton("generate");
    button.mousePressed(markovIt);
    console.log(ngrams);
}

function markovIt() {
    var currentGram = txt.substring(0, order);
    var result = currentGram;
    for (let i = 0; i < 100; i++) {

        var possibilities = ngrams[currentGram];
        if (!possibilities) {
            break;
        }
        var next = random(possibilities);
        result += next;
        currentGram = result.substring(result.length - order, result.length);
    }
    createP(result);



}