const facts = [
    "I enjoy photography and often capture landscapes during my hikes.",
    "I have participated in various cooking classes to hone my culinary skills.",
    "I regularly practice yoga to improve flexibility and reduce stress.",
    "I have a passion for gardening and grow my own vegetables and herbs.",
    "I'm fascinated by astronomy and often stargaze using my telescope."]

document.getElementById('factButton').addEventListener('click', function() {
    const fact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('factDisplay').textContent = fact;
});
