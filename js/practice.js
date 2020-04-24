var deck = $(".wrap");
var cards = deck.children();
while (cards.length) {
    deck.append(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
}
