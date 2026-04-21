const festivalDetails = {
    d1: "<p>Dashain is the most important and longest festival in Nepal, celebrated for 15 days in September or October. It honors the victory of good over evil, with families worshiping Goddess Durga and receiving blessings (tika) from elders.</p><p>Activities include animal sacrifices, feasts with sel roti and meat, and playing cards. Homes are decorated with marigolds, and people wear new clothes. Dashain unites communities, fostering family bonds and cultural pride across Nepal.</p>",
    d2: "<p>Tihar, also known as the Festival of Lights, is a five-day celebration in October/November, honoring animals, wealth, and relationships. The first day worships crows, the second dogs, and the third cows, reflecting gratitude to nature.</p><p>The fourth day honors Laxmi, the goddess of wealth, with homes illuminated by oil lamps (diyos). The fifth day celebrates brothers and sisters with special foods and gifts. Tihar fills the air with music, dance, and the glow of lights, symbolizing prosperity and harmony.</p>",
    d3: "<p>Holi is the vibrant Festival of Colors, celebrated in March, marking the arrival of spring and the triumph of good over evil. People throw colored powders (gulal) and water at each other, dancing to folk music in joyful abandon.</p><p>Traditional sweets like gujiya and thandai are shared, and bonfires are lit to symbolize the burning of evil. Holi transcends social barriers, bringing communities together in a riot of colors, laughter, and celebration of renewal.</p>",
    d4: "<p>Maghi is the Nepali New Year festival for the Tharu community in the Terai region, celebrated in January. It involves prayers, traditional dances, and feasts to welcome the new year with happiness and prosperity.</p><p>Special dishes like dhikri (rice cakes) and buffalo meat curry are prepared, and people gather for cultural performances. Maghi reflects the Tharu people's agricultural roots and communal spirit, blending rituals with festive merriment.</p>"
};

function toggleText(id, button) {
    var p = button.previousElementSibling;
    var original = p.getAttribute('data-original');
    var details = festivalDetails[id];
    var isOpen = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', String(!isOpen));
    button.textContent = isOpen ? 'Details' : 'Hide details';
    p.innerHTML = isOpen ? original : details;
}