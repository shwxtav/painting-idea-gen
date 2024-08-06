const ideas = [
    "Your favorite flowers in a vase.",
    "A beach scape with a sunset background.",
    "Cityview from a window at night.",
    "Still life of your favorite fruit.",
    "A meadow at twilight hour.",
    "A self portrait.",
    "Your favorite animal in its natural habitat.",
    "Your favorite album cover on a vinyl record.",
    "A butterfly with a mandala design.",
    "Your favorite movie poster.",
    "Your favorite cartoon character.",
    "A peaceful mountain scape."
];

function generateIdea() {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    document.getElementById('idea').innerText = ideas[randomIndex];
}
