/*Build a function that takes in two arrays of five elements, with each
* array representing a player's hand and each element
* representing a card from a standard deck of cards:
* 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
*
* The function should return either the string "Player 1 wins", "Player 2 wins", or "Draw"
*  based on the two player's hands:
*
* 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card.
* (keeping in mind how cards out-rank eachother and possible draws)
*
* Start by hard-coding the array/hand inputs, but if there is time also
* create a deck of cards function that creates the two arrays for you,
* keeping in mind that there are only 4 of each card in a deck (52 total).
*
* BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
*
* Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
*/

function poker(hand1, hand2) {
    let handStr = ['high', '1 pair', '2 pair', '3 of a kind', 'straight', 'full house', '4 of a kind']
    let hand1Dup = [];
    let hand2Dup = [];
    let cards1 = {};
    let cards2 = {};
    for (i = 0; i < 5; i++) {
        //     switch (hand1[i]) {
        //         case "Jack":
        //             hand1[i] = 11
        //         case "Queen":
        //             hand1[i] = 12
        //         case "King":
        //             hand1[i] = 13
        //         case "Ace":
        //             hand1[i] = 14
        //     }
        //     switch (hand2[i]) {
        //         case "Jack":
        //             hand2[i] = 11
        //         case "Queen":
        //             hand2[i] = 12
        //         case "King":
        //             hand2[i] = 13
        //         case "Ace":
        //             hand2[i] = 14
        //     }
        if (cards1[hand1[i]]) cards1[hand1[i]]++
        else {
            cards1[hand1[i]] = 1;
            hand1Dup.push(hand1[i]);

        }
        if (cards2[hand2[i]]) cards2[hand2[i]]++
        else {
            cards2[hand2[i]] = 1;
            hand2Dup.push(hand1[i]);
        }
    }
    function handStrCheck(handArr, cardsObj) {
        let dup = handArr.slice().sort((a, b) => { return a - b });
        if (handArr.length == 2) {
            for (let key in cardsObj) {
                if (cardsObj[key] == 1 || cardsObj[key] == 4) cardsObj.hand = '4 of a kind'
                if (cardsObj[key] == 2 || cardsObj[key] == 3) cardsObj.hand = 'full house'
            }
        }
        if (handArr.length == 3) {
            for (let key in cardsObj) {
                if (cardsObj[key] == 2) cardsObj.hand = '2 pair'
                if (cardsObj[key] == 3) cardsObj.hand = '3 of a kind'
            }
        }
        if (handArr.length == 4) {
            cardsObj.hand = 'pair'
        }
        if (handArr.length == 5) {
            if (dup[0] == dup[1] - 1 && dup[1] == dup[2] - 1 && dup[2] == dup[3] - 1 && dup[3] == dup[4] - 1)
                cardsObj.hand = 'straight'
            else cardsObj.hand = 'high'
        }
    }
    handStrCheck(hand1Dup, cards1);
    handStrCheck(hand2Dup, cards2);
    console.log(cards1.hand, cards2.hand)
    if (handStr.indexOf(cards1.hand) > handStr.indexOf(cards2.hand)) return "Player 1 wins"
    if (handStr.indexOf(cards1.hand) < handStr.indexOf(cards2.hand)) return "Player 2 wins"
}
console.log(poker([2, 3, 4, 5, 6], [3, 4, 14, 14, 3]))
module.exports = poker;
