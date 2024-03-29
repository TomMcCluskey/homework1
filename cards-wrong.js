// Simple version (no error-detection)

// function()--> possible return values
// This is the result of not reading the instructions closely enough.
// The assumption is that the cards are sorted by suit, then value,
// rather than value, then suit, as the instructions require.

function rank(card) { // --> 1..13
    while (card > 13)
        card -= 13;
    return card;
}

function suit(card) { // --> 1..4
    return 1 + Math.floor((card - 0.1) / 13);
}

function cardID(rank, suit) { // --> 0..51
    return (rank + (suit - 1) * 13) - 1;
}

function color(card) { // -->"red","black"
    if (card < 26) {
        return "red";
    } else {
        return "black";
    }
}

function name(card) { // --> string
    var nameString = "";
    switch (rank(card)) {
    case 1:
        nameString = nameString.concat("Ace");
        break;
    case 2:
        nameString = nameString.concat("Two");
        break;
    case 3:
        nameString = nameString.concat("Three");
        break;
    case 4:
        nameString = nameString.concat("Four");
        break;
    case 5:
        nameString = nameString.concat("Five");
        break;
    case 6:
        nameString = nameString.concat("Six");
        break;
    case 7:
        nameString = nameString.concat("Seven");
        break;
    case 8:
        nameString = nameString.concat("Eight");
        break;
    case 9:
        nameString = nameString.concat("Nine");
        break;
    case 10:
        nameString = nameString.concat("Ten");
        break;
    case 11:
        nameString = nameString.concat("Jack");
        break;
    case 12:
        nameString = nameString.concat("Queen");
        break;
    case 13:
        nameString = nameString.concat("King");
        break;
    }
    nameString = nameString.concat(" of ");
    switch (suit(card)) {
    case 1:
        nameString = nameString.concat("Hearts");
        break;
    case 2:
        nameString = nameString.concat("Diamonds");
        break;
    case 3:
        nameString = nameString.concat("Spades");
        break;
    case 4:
        nameString = nameString.concat("Clubs");
        break;
    }
    return nameString;
}

function precedes(cardA, cardB) { //-->false,true
    if (rank(cardB) - rank(cardA) === 1) {
        return true;
    } else {
        return false;
    }
}

function sameColor(cardA, cardB) { //-->false,true
    if (color(cardA) == color(cardB)) {
        return true;
    } else {
        return false;
    }
}

function nextInSuit(cardA) {//--> 0..51
    if (rank(cardA) != 13) {
        return cardA + 1;
    } else {
        return cardA - 12;
    }
}

function prevInSuit(cardB) {//--> 0..51
    if (rank(cardB) != 1) {
        return cardB - 1;
    } else {
        return cardB + 12;
    }
}


// TESTING:
function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(rank(0)===1,"Test 1 failed");
assert(rank(3)===1,"Test 2 failed");
assert(rank(51)===13,"Test 3 failed");
assert(suit(0)===1,"Test 4 failed");
assert(suit(5)===2,"Test 5 failed");
assert(suit(51)===4,"Test 6 failed");
assert(cardID(1,1)===0,"Test 7 failed");
assert(cardID(13,4)===51,"Test 8 failed");
assert(cardID(8,3)===30,"Test 9 failed");
assert(color(0)==='red',"Test 10 failed");
assert(color(2)==='black',"Test 11 failed");
assert(name(5)==='Two of Diamonds',"Test 12 failed");
assert(name(51)==='King of Clubs',"Test 13 failed");
assert(!precedes(0,1),"Test 14 failed");
assert(precedes(0,5),"Test 15 failed");
assert(precedes(51,0),"Test 16 failed");
assert(precedes(50,2),"Test 17 failed");
assert(sameColor(0,1),"Test 18 failed");
assert(!sameColor(1,2),"Test 19 failed");
assert(nextInSuit(0)===4,"Test 20 failed");
assert(nextInSuit(51)===3,"Test 21 failed");
assert(nextInSuit(48)===0,"Test 22 failed");
assert(prevInSuit(0)===48,"Test 23 failed");
assert(prevInSuit(3)===51,"Test 24 failed");
assert(prevInSuit(5)===1,"Test 25 failed");