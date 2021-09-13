// ẩn khi chọn vé theo mùa
var qrdiscount = document.getElementsByClassName("qrdiscount")[0];
    function discount (disc) {
        var discount = document.getElementsByName("discount");
        for (var i = 0; i < discount.length; i++){
            if (discount[i].checked === true){
                var getdiscount = discount[i].value
                if (getdiscount == "シーズン券割引") {
                    document.getElementById('set-1').classList.add('ban-click');
                }           
                return;
            }
        }  
        
    };
// ẩn phần còn lại khi chọn vé full set 1
var set_1 = document.getElementsByName("set-1");
document.getElementById("set-1").onclick = function () {
for (var i = 0; i < set_1.length; i++) {
    if (set_1[i].checked === true) {
        document.getElementById('set-2').classList.add('ban-click');
        document.getElementById('set-3').classList.add('ban-click');
        document.getElementById('set-3-2').classList.add('ban-click');
        document.getElementById('set-4').classList.add('ban-click');
        document.getElementById('set-4-2').classList.add('ban-click');
        document.getElementById('set-4-3').classList.add('ban-click');
    };
};
};
// ẩn set full 1 và set tanpin khi chọn vé set 2
var set_2 = document.getElementsByName("set-2");
document.getElementById("set-2").onclick = function () {
for (var i = 0; i < set_2.length; i++) {
    if (set_2[i].checked === true) {
        document.getElementById('set-1').classList.add('ban-click');
        document.getElementById('set-4').classList.add('ban-click');
        document.getElementById('set-4-2').classList.add('ban-click');
        document.getElementById('set-4-3').classList.add('ban-click');
    };
};
};
// ẩn set full 1 và set 2 khi chọn vé set tanpin
var set_4 = document.getElementsByName("set-4");
document.getElementById("set-4").onclick = function () {
for (var i = 0; i < set_4.length; i++) {
    if (set_4[i].checked === true) {
        document.getElementById('set-1').classList.add('ban-click');
        document.getElementById('set-2').classList.add('ban-click');
    };
};
};
document.getElementById("set-4-2").onclick = function () {
    for (var i = 0; i < set_4.length; i++) {
        if (set_4[i].checked === true) {
            document.getElementById('set-1').classList.add('ban-click');
            document.getElementById('set-2').classList.add('ban-click');
        };
    };
    };
document.getElementById("set-4-3").onclick = function () {
for (var i = 0; i < set_4.length; i++) {
    if (set_4[i].checked === true) {
        document.getElementById('set-1').classList.add('ban-click');
        document.getElementById('set-2').classList.add('ban-click');
    };
};
};
// ẩn set full 1 và set 3-2 khi chọn vé set 3-1
var set_3 = document.getElementsByName("set-3");
document.getElementById("set-3").onclick = function () {
for (var i = 0; i < set_2.length; i++) {
    if (set_3[i].checked === true) {
        document.getElementById('set-1').classList.add('ban-click');
        document.getElementById('set-3-2').classList.add('ban-click');
    };
};
};
// ẩn set full 1 và set 3-1 khi chọn vé set 3-2
var set_3 = document.getElementsByName("set-3");
document.getElementById("set-3-2").onclick = function () {
for (var i = 0; i < set_2.length; i++) {
    if (set_3[i].checked === true) {
        document.getElementById('set-1').classList.add('ban-click');
        document.getElementById('set-3').classList.add('ban-click');
    };
};
};


