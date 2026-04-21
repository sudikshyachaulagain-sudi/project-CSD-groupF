const foodDetails = {
    f1: "<p>Dal Bhat Tarkari is Nepal's national dish, consisting of steamed rice (bhat), lentil soup (dal), and vegetable curry (tarkari). It's a staple meal eaten daily by many Nepalese, providing balanced nutrition with proteins from lentils, carbohydrates from rice, and vitamins from vegetables.</p><p>Traditionally served with pickles (achar) and sometimes meat or fish, it's a symbol of Nepali hospitality and is often the first meal offered to guests. The dish reflects Nepal's agricultural heritage and is enjoyed across all regions, with variations in spices and ingredients based on local availability.</p>",
    f2: "<p>Momo is a popular Nepali dumpling, typically filled with spiced meat (buff, chicken, or pork) or vegetables, wrapped in a thin dough, and steamed. Originating from Tibetan influences, it has become a beloved street food and restaurant favorite in Nepal.</p><p>Served with a tangy tomato-based sauce or sesame seed chutney, momo comes in various forms: steamed, fried (kothey), or pan-fried (jhol). It's a versatile snack enjoyed during festivals, family gatherings, or as a quick meal, showcasing Nepal's culinary diversity.</p>",
    f3: "<p>Selroti is a traditional Nepali sweet bread, shaped into rings and deep-fried until crispy on the outside and soft inside. Made from rice flour, sugar, milk, and spices, it's a festive treat associated with celebrations like Dashain and Tihar.</p><p>The batter is fermented overnight, giving it a unique flavor and texture. Often served with buffalo meat curry or simply enjoyed with tea, selroti represents the joy and abundance of Nepali festivals, bringing families together in sweet indulgence.</p>",
    f4: "<p>Tharu cultural food highlights the traditional cuisine of the Tharu community in Nepal's Terai region. Dishes are often served on banana leaves or green plates, emphasizing fresh, local ingredients and communal eating.</p><p>Popular items include fried fish, spicy lentil snacks (badi), rich curries, and fermented foods. This cuisine reflects the Tharu people's close connection to nature and their agricultural lifestyle, offering a rustic yet flavorful experience that celebrates regional diversity.</p>"
};

function toggleFood(id, button) {
    var p = button.previousElementSibling;
    var original = p.getAttribute('data-original');
    var details = foodDetails[id];
    var isOpen = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', String(!isOpen));
    button.textContent = isOpen ? 'Details' : 'Hide details';
    p.innerHTML = isOpen ? original : details;
}