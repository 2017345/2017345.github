function jack(player){
    var hand = ['グー','パー','チョキ']
    console.log('あなたが出したのは' + hand[player])

    var random = Math.random() * 100;
    console.log(random)

    var randomInt = Math.floor(random)
    console.log(randomInt)

    var CP = randomInt % 3;
    console.log('CPが出したのは' + hand[CP]);

    var victory = 0;

    victory = (player - CP + 3) % 3;

    var mesaage = ['、あいこです。もう一度。','、あなたの勝ちです。おめでとうございます！','、CPの勝ちです。残念...']
 
    $('#jack-R').text('あなたが出したのは' + hand[player] + '、CPが出したのは' + hand[CP] + mesaage[victory]);
}