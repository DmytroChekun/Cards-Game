let deck = $(".wrap");
let cards = deck.children();
while (cards.length) {
    deck.append(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
}


let cardsValue = [6,7,8,9,10,'J','Q','K','A'];
let randomCard = cardsValue[Math.floor(Math.random()*(cardsValue.length))];
$('.card-to-find').text(`"${randomCard}"`);
let counter = 0;
let counterCommon = 0;
let test = '';
$('.card').on('click', function() {
    $(this).children('.card__front').addClass('flip-front');
    $(this).children('.card__back').addClass('flip-back');
    flipChecker = true;
    counterCommon++;
    if ($(this).find('.name').html() == randomCard) {
        counter++;
        $('.result').html('<p style="color: green;"> Your`e goddamn right!</p>');
    }else{
        $(this).children('.card__front').removeClass('flip-front');
        $(this).children('.card__back').removeClass('flip-back');
        $('.result').html('<p style="color: red;"> Wrong!</p>');
    }
    if (counter == 4){
        $('.result').css("background-color", "#3ff576");
        $('.result').html(`<p style="font-size: 16px;">Congrats! You did it in ${counterCommon} moves.</p>`);
    }
});


