function coupons500 () {
    var discount = document.getElementsByName("discount");
    for (var i = 0; i < discount.length; i++){
        var qrdiscount = document.getElementById("qrdiscount");
        if (discount[i].checked == true){
        var getdiscount = discount[i].value;
        // qrdiscount.innerHTML = getdiscount;
        // var getarray = getdiscount.split('.');
        // document.getElementById("discountname").innerHTML = getarray[0];
        // document.getElementById("discountquantity").innerHTML = getarray[1];               
        };
        var set_1 = document.getElementsByName("set-1");
        document.getElementById("set-1").onclick = function () {
        for (var i = 0; i < set_1.length; i++) {
            if (set_1[i].checked === true && getdiscount == "¥500引き.−¥500") {
                $('input:radio[name=set-2]').prop('checked', false);
                $('input:radio[name=set-3]').prop('checked', false);
                $('input:radio[name=set-3-2]').prop('checked', false);
                $('input:radio[name=set-4]').prop('checked', false);
                $('input:radio[name=set-4-3]').prop('checked', false);
            };
        };
        };
        var set_2 = document.getElementsByName("set-2");
        document.getElementById("set-2").onclick = function () {
        for (var i = 0; i < set_2.length; i++) {
            if (set_2[i].checked === true && getdiscount == "¥500引き.−¥500") {
                $('input:radio[name=set-1]').prop('checked', false);
                $('input:radio[name=set-3]').prop('checked', false);
                $('input:radio[name=set-3-2]').prop('checked', false);
                $('input:radio[name=set-4]').prop('checked', false);
                $('input:radio[name=set-4-3]').prop('checked', false);
            };
        };
        };
        var set_3 = document.getElementsByName("set-3");
        document.getElementById("set-3").onclick = function () {
        for (var i = 0; i < set_3.length; i++) {
            if (set_3[i].checked === true && getdiscount == "¥500引き.−¥500") {
                $('input:radio[name=set-1]').prop('checked', false);
                $('input:radio[name=set-2]').prop('checked', false);
                $('input:radio[name=set-3-2]').prop('checked', false);
            };
        };
        };
        var set_4 = document.getElementsByName("set-4");
        document.getElementById("C__8").onclick = function () {
        for (var i = 0; i < set_4.length; i++) {
            if (set_4[i].checked === true && getdiscount == "¥500引き.−¥500") {
                $('input:radio[name=set-1]').prop('checked', false);
                $('input:radio[name=set-2]').prop('checked', false);
                $('input:radio[name=set-3-2]').prop('checked', false);
                $('input:radio[name=set-4][value="ブーツ/スキー.¥2,600"]').prop('checked', false);
                $('input:radio[name=set-4][value="ブーツ/ボード.¥2,600"]').prop('checked', false);
            };
        };
        };
        var set_4_1_2 = document.getElementsByName("set-4");
        document.getElementById("C__9").onclick = function () {
        for (var i = 0; i < set_4_1_2.length; i++) {
            if (set_4_1_2[i].checked === true && getdiscount == "¥500引き.−¥500") {
                $('input:radio[name=set-1]').prop('checked', false);
                $('input:radio[name=set-2]').prop('checked', false);
                $('input:radio[name=set-3-2]').prop('checked', false);
                $('input:radio[name=set-4-3]').prop('checked', false);
            };
        };
        };
        var set_4_2_1 = document.getElementsByName("set-4");
        document.getElementById("C__10").onclick = function () {
        for (var i = 0; i < set_4_2_1.length; i++) {
            if (set_4_2_1[i].checked === true && getdiscount == "¥500引き.−¥500") {
                $('input:radio[name=set-1]').prop('checked', false);
                $('input:radio[name=set-2]').prop('checked', false);
                $('input:radio[name=set-3-2]').prop('checked', false);
            };
        };
        };
        var set_4_2_2 = document.getElementsByName("set-4");
        document.getElementById("C__11").onclick = function () {
        for (var i = 0; i < set_4_2_2.length; i++) {
            if (set_4_2_2[i].checked === true && getdiscount == "¥500引き.−¥500") {
                $('input:radio[name=set-1]').prop('checked', false);
                $('input:radio[name=set-2]').prop('checked', false);
                $('input:radio[name=set-3-2]').prop('checked', false);
                $('input:radio[name=set-4-3]').prop('checked', false);
            };
        };
        };
        var set_4_3 = document.getElementsByName("set-4");
        document.getElementById("C__11").onclick = function () {
        for (var i = 0; i < set_4_3.length; i++) {
            if (set_4_3[i].checked === true && getdiscount == "¥500引き.−¥500") {
                $('input:radio[name=set-1]').prop('checked', false);
                $('input:radio[name=set-2]').prop('checked', false);
                $('input:radio[name=set-3-2]').prop('checked', false);
                $('input:radio[name=set-4][value="ボード板.¥2,600"]').prop('checked', false);
                $('input:radio[name=set-4][value="ブーツ/ボード.¥2,600"]').prop('checked', false);
            };
        };
        };
    };
};