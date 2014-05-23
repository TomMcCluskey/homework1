function singXmas(startDay) {
    var ordinals = ['first',
                 'second',
                 'third',
                 'fourth',
                 'fifth',
                 'sixth',
                 'seventh',
                 'eighth',
                 'ninth',
                 'tenth',
                 'eleventh',
                 'twelfth'];

    var gifts = ['A partridge in a pear tree', 
                'Two turtle doves, and',
                'Three french hens,',
                'Four calling birds,',
                'Five golden rings!',
                'Six geese a-laying,',
                'Seven swans a-swimming,',
                'Eight maids a-milking,',
                'Nine ladies dancing,',
                'Ten lords a-leaping,',
                'Eleven pipers piping,',
                'Twelve drummers drumming,'];
    for (startDay; startDay <= 12; startDay++) {
        console.log('On the ' + ordinals[startDay-1] + ' day of Christmas, my true love gave to me:');
        for (var counter = (startDay - 1); counter > -1; counter --) {
            console.log(gifts[counter]);
        }
}
}