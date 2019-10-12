//Random Quote Generator pulling from NederlandseSpreekwoorden.js
window.onload = function quote() {
    let x = Math.floor(Math.random()*11);
    var quoteNd = document.getElementById('quoteNd');
    var quoteEn = document.getElementById('quoteEn');
    var quoteEx = document.getElementById('quoteEx');

    quoteNd.innerHTML = objSW[x]["sw"][0];
    quoteEn.innerHTML = objSW[x]["sw"][1];
    quoteEx.innerHTML = objSW[x]["sw"][2];

    }

var objSW = [
    {sw: ["Wie a zegt moet ook b zeggen", "Whoever says 'a' must also say 'b'", "In for a penny, in for a pound"]}, 
    {sw: ["Aan de vruchten kent men den boom", "From the fruit people knows the tree", "A tree is known by its fuit"]}, 
    {sw: ["Aanval is de beste verdediging", "Offence is the best defence", "The best defence is a good offense"]}, 
    {sw: ["Acht is meer dan duizand", "Eight (care) is more than a thousand", "Take care of the pennies and the pounds will take care of themselves"]}, 
    {sw: ["Al draagt een aap een gouden ring, het is en blijft een lelijk ding", "Even though a monkey wears a gold ring, it is and remains an ugly thing", "A golden bit does not make the horse any better."]}, 
    {sw: ["Als de kat van huis is, dansen de muizen op tafel", "When the cat is away from the house the mice dance on the table", "When the cat's away, the mice will play"]}, 
    {sw: ["Afwisseling van spijs doet eten", "Variety of food makes you eat", "Variety pleases (variety is the spice of life?)"]}, 
    {sw: ["Alle beetje helpen", "Every bit of help", "Every little bit helps"]}, 
    {sw: ["Alle waar is naar zijn geld", "All is true to his money", "Everything is worth its price"]}, 
    {sw: ["Alles heeft zijn reden", "Everything has its reason", "Everything has its reason"]}, 
    {sw: ["Als de berg niet tot Mohammed wil komen dan moet Mohammed naar de berg gaan", "If the mountain does not want to come to Muhammad then Muhammad must go to the mountain", "If you cannot get what you want, you must adapt yourself to the circumstances or adopt a different approach"]} 
];