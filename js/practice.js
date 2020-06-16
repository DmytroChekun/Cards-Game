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


$( document ).ready(function() {
    setTimeout(function(){
        $('.card').on('click', function() {
            $(this).children('.card__front').addClass('flip-front');
            $(this).children('.card__back').addClass('flip-back');
            // flipChecker = true;
            if ($(this).find('.name').html() == randomCard) {
                counter++;
                $('.result').html('<p class="result__text" style="color: green;"> Your`e goddamn right!</p>');
            }else{
                $(this).children('.card__front').removeClass('flip-front');
                $(this).children('.card__back').removeClass('flip-back');
                $('.result').html('<p style="color: red;"> Wrong!</p>');
            }
            if (counterCommon > -1){
                $('.result').removeClass('invisible');
            }
            if (counter < 4){
                counterCommon++;
            }
            else if (counter == 4){
                $('.result').css("background-color", "#3ff576");
                if ((counterCommon+1) == 4){
                    $('.result').html(`<p style="font-size: 16px;"><span style="font-size: 20px;">WOW! PERFECT RESULT!</span> <br/> You did it in ${counterCommon+1} moves!</p>`);
                }
                else if((counterCommon+1) >= 5 && (counterCommon+1) <= 6){
                $('.result').html(`<p style="font-size: 16px;"> <span style="font-size: 20px;">Congrats! Almost perfect!</span> <br/> You did it in ${counterCommon+1} moves!</p>`);
                $('.result').css( 'background-color', '#70df30');
                }
                else if((counterCommon+1) >= 7 && (counterCommon+1) <= 8){
                    $('.result').html(`<p style="font-size: 16px;"> <span style="font-size: 20px;">Not bad!</span> <br/> You did it in ${counterCommon+1} moves.</p>`);
                    $('.result').css( 'background-color', '#c8ec2a');
                    }
                else if((counterCommon+1) >= 9 && (counterCommon+1) < 15){
                        $('.result').html(`<p style="font-size: 16px;"> <span style="font-size: 20px;">I think you can do better.</span> <br/> You did it in ${counterCommon+1} moves.</p>`);
                        $('.result').css( 'background-color', '#ec9e2a');
                    }
                else if((counterCommon+1) >= 15){
                    $('.result').html(`<p style="font-size: 16px;"> <span style="font-size: 20px;">I hope you do it on purpose?</span> <br/> You did it in ${counterCommon+1} moves...</p>`);
                    $('.result').css( 'background-color', '#ec2a2a');
                }
                $('.new-game').addClass('visible');
                counterCommon = counterCommon;
            }
        });

        $('.new-game').on('click', function() {
            location.reload();
        });
    },6500);
});