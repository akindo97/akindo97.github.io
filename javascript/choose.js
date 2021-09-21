

// thay đổi giá --------------------
var areabtn1 = document.getElementById("select1");
var areabtn2 = document.getElementById("select2");
var areabtn3 = document.getElementById("select3");
var areabtn4 = document.getElementById("select4");
var select_2 = document.getElementsByName("area-1");
var select_3 = document.getElementsByName("area-2");
// 子供　end 1日　------------------
areabtn3.onclick = function () {
for (var i = 0; i < select_2.length; i++){
    if (select_2[i].checked === true){
        var sl = select_2[i].value            
    }
}
for (var i = 0; i < select_3.length; i++){
    if (select_3[i].checked === true){
        var sl2 = select_3[i].value            
    }
}
if ( sl == "子供" && sl2 == "１日") {
    // set 1
    $("#C1").html(`<font size="2px">スキーセット＋ウェア上下<br>(板、ブーツ、ストック)</font><br>
    <font size="5px"><center>¥5,000</center></font>`);
    $('#C_1').val('スキーセット＋ウェア上下.¥5,000');
    // ---
    $("#C2").html(`<font size="2px">ボードセット＋ウェア上下<br>(板、ブーツ)</font><br>
    <font size="5px"><center>¥5,000</center></font>`);
    $('#C_2').val('ボードセット＋ウェア上下.¥5,000');
    // ---
    $("#C3").html(`<font size="2px">スキーセット<br>(板、ブーツ、ストック)</font><br>
    <font size="5px"><center>¥3,000</center></font>`);
    $('#C_3').val('スキーセット.¥3,000');
    // ---
    $("#C4").html(`<font size="2px">ボードセット<br>(板、ブーツ)</font><br>
    <font size="5px"><center>¥3,000</center></font>`);
    $('#C_4').val('ボードセット.¥3,000');
    // ---
    $("#C5").html(`<font size="2px">ウェア上下セット<br></font><br>
    <font size="5px"><center>¥3,000</center></font>`);
    $('#C_5').val('ウェア上下セット.¥3,000');
    // ---
    $("#C6").html(`<font size="2px">ウエア/ジャケット<br></font><br>
    <font size="5px"><center>¥2,000</center></font>`);
    $('#C_6').val('ウエア/ジャケット.¥2,000');
    // ---
    $("#C7").html(`<font size="2px">ウエア/パンツ<br></font><br>
    <font size="5px"><center>¥2,000</center></font>`);
    $('#C_7').val('ウエア/パンツ.¥2,000');
    // ---
    $("#C8").html(`<font size="2px">スキー板<br></font><br>
    <font size="5px"><center>¥2,000</center></font>`);
    $('#C_8').val('スキー板.¥2,000');
    // ---
    $("#C9").html(`<font size="2px">ボード板<br></font><br>
    <font size="5px"><center>¥2,000</center></font>`);
    $('#C_9').val('ボード板.¥2,000');
    // ---
    $("#C10").html(`<font size="2px">ブーツ/スキー<br></font><br>
    <font size="5px"><center>¥2,000</center></font>`);
    $('#C_10').val('ブーツ/スキー.¥2,000');
    // ---
    $("#C11").html(`<font size="2px">ブーツ/ボード<br></font><br>
    <font size="5px"><center>¥2,000</center></font>`);
    $('#C_11').val('ブーツ/ボード.¥2,000');
    document.getElementById('set-3-2').classList.remove('ban-click');
    document.getElementById('set-4').classList.remove('ban-click');
    document.getElementById('set-4-2').classList.remove('ban-click');
    document.getElementById('set-4-3').classList.remove('ban-click');
    



};
if ( sl == "大人" && sl2 == "１日") {
    // set 1
    $("#C1").html(`<font size="2px">スキーセット＋ウェア上下<br>(板、ブーツ、ストック)</font><br>
    <font size="5px"><center>¥7,300</center></font>`);
    $('#C_1').val('スキーセット＋ウェア上下.¥7,300');
    // ---
    $("#C2").html(`<font size="2px">ボードセット＋ウェア上下<br>(板、ブーツ)</font><br>
    <font size="5px"><center>¥7,300</center></font>`);
    $('#C_2').val('ボードセット＋ウェア上下.¥7,300');
    // ---
    $("#C3").html(`<font size="2px">スキーセット<br>(板、ブーツ、ストック)</font><br>
    <font size="5px"><center>¥4,200</center></font>`);
    $('#C_3').val('スキーセット.¥4,200');
    // ---
    $("#C4").html(`<font size="2px">ボードセット<br>(板、ブーツ)</font><br>
    <font size="5px"><center>¥4,200</center></font>`);
    $('#C_4').val('ボードセット.¥4,200');
    // ---
    $("#C5").html(`<font size="2px">ウェア上下セット<br></font><br>
    <font size="5px"><center>¥4,200</center></font>`);
    $('#C_5').val('ウェア上下セット.¥4,200');
    // ---
    $("#C6").html(`<font size="2px">ウエア/ジャケット<br></font><br>
    <font size="5px"><center>¥2,600</center></font>`);
    $('#C_6').val('ウエア/ジャケット.¥2,600');
    // ---
    $("#C7").html(`<font size="2px">ウエア/パンツ<br></font><br>
    <font size="5px"><center>¥2,600</center></font>`);
    $('#C_7').val('ウエア/パンツ.¥2,600');
    // ---
    $("#C8").html(`<font size="2px">スキー板<br></font><br>
    <font size="5px"><center>¥2,600</center></font>`);
    $('#C_8').val('スキー板.¥2,600');
    // ---
    $("#C9").html(`<font size="2px">ボード板<br></font><br>
    <font size="5px"><center>¥2,600</center></font>`);
    $('#C_9').val('ボード板.¥2,600');
    // ---
    $("#C10").html(`<font size="2px">ブーツ/スキー<br></font><br>
    <font size="5px"><center>¥2,600</center></font>`);
    $('#C_10').val('ブーツ/スキー.¥2,600');
    // ---
    $("#C11").html(`<font size="2px">ブーツ/ボード<br></font><br>
    <font size="5px"><center>¥2,600</center></font>`);
    $('#C_11').val('ブーツ/ボード.¥2,600');
    document.getElementById('set-3-2').classList.remove('ban-click');
    document.getElementById('set-4').classList.remove('ban-click');
    document.getElementById('set-4-2').classList.remove('ban-click');
    document.getElementById('set-4-3').classList.remove('ban-click');
    
};

};
// 子供　end 2日　------------------
areabtn4.onclick = function () {
    for (var i = 0; i < select_2.length; i++){
        if (select_2[i].checked === true){
            var sl = select_2[i].value            
        }
    }
    for (var i = 0; i < select_3.length; i++){
        if (select_3[i].checked === true){
            var sl2 = select_3[i].value            
        }
    }
    if ( sl == "子供" && sl2 == "２日") {
        // set 1
        $("#C1").html(`<font size="2px">スキーセット＋ウェア上下<br>(板、ブーツ、ストック)</font><br>
        <font size="5px"><center>¥8,000</center></font>`);
        $('#C_1').val('スキーセット＋ウェア上下.¥8,000');
        // ---
        $("#C2").html(`<font size="2px">ボードセット＋ウェア上下<br>(板、ブーツ)</font><br>
        <font size="5px"><center>¥8,000</center></font>`);
        $('#C_2').val('ボードセット＋ウェア上下.¥8,000');
        // ---
        $("#C3").html(`<font size="2px">スキーセット<br>(板、ブーツ、ストック)</font><br>
        <font size="5px"><center>¥5,000</center></font>`);
        $('#C_3').val('スキーセット.¥5,000');
        // ---
        $("#C4").html(`<font size="2px">ボードセット<br>(板、ブーツ)</font><br>
        <font size="5px"><center>¥5,000</center></font>`);
        $('#C_4').val('ボードセット.¥5,000');
        // ---
        $("#C5").html(`<font size="2px">ウェア上下セット<br></font><br>
        <font size="5px"><center>¥5,000</center></font>`);
        $('#C_5').val('ウェア上下セット.¥5,000');
        // ---
        document.getElementById('set-3-2').classList.add('ban-click');
        document.getElementById('set-4').classList.add('ban-click');        
        document.getElementById('set-4-2').classList.add('ban-click');        
        document.getElementById('set-4-3').classList.add('ban-click');  
        $('input:radio[name=set-3][value="ウエア/ジャケット.¥2,600"]').prop('checked', false);
        $('input:radio[name=set-3][value="ウエア/パンツ.¥2,600"]').prop('checked', false);
        $('input:radio[name=set-4]').prop('checked', false);
        $('input:radio[name=set-4-3]').prop('checked', false);      
    };
    if ( sl == "大人" && sl2 == "２日") {
        // set 1
        $("#C1").html(`<font size="2px">スキーセット＋ウェア上下<br>(板、ブーツ、ストック)</font><br>
        <font size="5px"><center>¥12,400</center></font>`);
        $('#C_1').val('スキーセット＋ウェア上下.¥12,400');
        // ---
        $("#C2").html(`<font size="2px">ボードセット＋ウェア上下<br>(板、ブーツ)</font><br>
        <font size="5px"><center>¥12,400</center></font>`);
        $('#C_2').val('ボードセット＋ウェア上下.¥12,400');
        // ---
        $("#C3").html(`<font size="2px">スキーセット<br>(板、ブーツ、ストック)</font><br>
        <font size="5px"><center>¥7,300</center></font>`);
        $('#C_3').val('スキーセット.¥7,300');
        // ---
        $("#C4").html(`<font size="2px">ボードセット<br>(板、ブーツ)</font><br>
        <font size="5px"><center>¥7,300</center></font>`);
        $('#C_4').val('ボードセット.¥7,300');
        // ---
        $("#C5").html(`<font size="2px">ウェア上下セット<br></font><br>
        <font size="5px"><center>¥7,300</center></font>`);
        $('#C_5').val('ウェア上下セット.¥7,300');
        // ---
        document.getElementById('set-3-2').classList.add('ban-click');
        document.getElementById('set-4').classList.add('ban-click');        
        document.getElementById('set-4-2').classList.add('ban-click');        
        document.getElementById('set-4-3').classList.add('ban-click');  
        $('input:radio[name=set-3][value="ウエア/ジャケット.¥2,600"]').prop('checked', false);
    $('input:radio[name=set-3][value="ウエア/パンツ.¥2,600"]').prop('checked', false);
    $('input:radio[name=set-4]').prop('checked', false);
    $('input:radio[name=set-4-3]').prop('checked', false);      
    };
    };
// 大人　end 1日　------------------
areabtn1.onclick = function () {
    for (var i = 0; i < select_2.length; i++){
        if (select_2[i].checked === true){
            var sl = select_2[i].value            
        }
    }
    for (var i = 0; i < select_3.length; i++){
        if (select_3[i].checked === true){
            var sl2 = select_3[i].value            
        }
    }
    if ( sl == "大人" && sl2 == "１日") {
        // set 1
        $("#C1").html(`<font size="2px">スキーセット＋ウェア上下<br>(板、ブーツ、ストック)</font><br>
        <font size="5px"><center>¥7,300</center></font>`);
        $('#C_1').val('スキーセット＋ウェア上下.¥7,300');
        // ---
        $("#C2").html(`<font size="2px">ボードセット＋ウェア上下<br>(板、ブーツ)</font><br>
        <font size="5px"><center>¥7,300</center></font>`);
        $('#C_2').val('ボードセット＋ウェア上下.¥7,300');
        // ---
        $("#C3").html(`<font size="2px">スキーセット<br>(板、ブーツ、ストック)</font><br>
        <font size="5px"><center>¥4,200</center></font>`);
        $('#C_3').val('スキーセット.¥4,200');
        // ---
        $("#C4").html(`<font size="2px">ボードセット<br>(板、ブーツ)</font><br>
        <font size="5px"><center>¥4,200</center></font>`);
        $('#C_4').val('ボードセット.¥4,200');
        // ---
        $("#C5").html(`<font size="2px">ウェア上下セット<br></font><br>
        <font size="5px"><center>¥4,200</center></font>`);
        $('#C_5').val('ウェア上下セット.¥4,200');
        // ---
        $("#C6").html(`<font size="2px">ウエア/ジャケット<br></font><br>
        <font size="5px"><center>¥2,600</center></font>`);
        $('#C_6').val('ウエア/ジャケット.¥2,600');
        // ---
        $("#C7").html(`<font size="2px">ウエア/パンツ<br></font><br>
        <font size="5px"><center>¥2,600</center></font>`);
        $('#C_7').val('ウエア/パンツ.¥2,600');
        // ---
        $("#C8").html(`<font size="2px">スキー板<br></font><br>
        <font size="5px"><center>¥2,600</center></font>`);
        $('#C_8').val('スキー板.¥2,600');
        // ---
        $("#C9").html(`<font size="2px">ボード板<br></font><br>
        <font size="5px"><center>¥2,600</center></font>`);
        $('#C_9').val('ボード板.¥2,600');
        // ---
        $("#C10").html(`<font size="2px">ブーツ/スキー<br></font><br>
        <font size="5px"><center>¥2,600</center></font>`);
        $('#C_10').val('ブーツ/スキー.¥2,600');
        // ---
        $("#C11").html(`<font size="2px">ブーツ/ボード<br></font><br>
        <font size="5px"><center>¥2,600</center></font>`);
        $('#C_11').val('ブーツ/ボード.¥2,600');
        document.getElementById('set-3-2').classList.remove('ban-click');
        document.getElementById('set-4').classList.remove('ban-click');
        document.getElementById('set-4-2').classList.remove('ban-click');
        document.getElementById('set-4-3').classList.remove('ban-click');
        
    };
    if ( sl == "大人" && sl2 == "２日") {
        // set 1
        $("#C1").html(`<font size="2px">スキーセット＋ウェア上下<br>(板、ブーツ、ストック)</font><br>
        <font size="5px"><center>¥12,400</center></font>`);
        $('#C_1').val('スキーセット＋ウェア上下.¥12,400');
        // ---
        $("#C2").html(`<font size="2px">ボードセット＋ウェア上下<br>(板、ブーツ)</font><br>
        <font size="5px"><center>¥12,400</center></font>`);
        $('#C_2').val('ボードセット＋ウェア上下.¥12,400');
        // ---
        $("#C3").html(`<font size="2px">スキーセット<br>(板、ブーツ、ストック)</font><br>
        <font size="5px"><center>¥7,300</center></font>`);
        $('#C_3').val('スキーセット.¥7,300');
        // ---
        $("#C4").html(`<font size="2px">ボードセット<br>(板、ブーツ)</font><br>
        <font size="5px"><center>¥7,300</center></font>`);
        $('#C_4').val('ボードセット.¥7,300');
        // ---
        $("#C5").html(`<font size="2px">ウェア上下セット<br></font><br>
        <font size="5px"><center>¥7,300</center></font>`);
        $('#C_5').val('ウェア上下セット.¥7,300');
        // ---
        document.getElementById('set-3-2').classList.add('ban-click');
        document.getElementById('set-4').classList.add('ban-click');        
        document.getElementById('set-4-2').classList.add('ban-click');        
        document.getElementById('set-4-3').classList.add('ban-click');  
        $('input:radio[name=set-3][value="ウエア/ジャケット.¥2,600"]').prop('checked', false);
    $('input:radio[name=set-3][value="ウエア/パンツ.¥2,600"]').prop('checked', false);
    $('input:radio[name=set-4]').prop('checked', false);
    $('input:radio[name=set-4-3]').prop('checked', false);      
    };
    };
// 大人　end 2日　------------------
areabtn2.onclick = function () {
    for (var i = 0; i < select_2.length; i++){
        if (select_2[i].checked === true){
            var sl = select_2[i].value            
        }
    }
    for (var i = 0; i < select_3.length; i++){
        if (select_3[i].checked === true){
            var sl2 = select_3[i].value            
        }
    }
    if ( sl == "子供" && sl2 == "２日") {
        // set 1
        $("#C1").html(`<font size="2px">スキーセット＋ウェア上下<br>(板、ブーツ、ストック)</font><br>
        <font size="5px"><center>¥8,000</center></font>`);
        $('#C_1').val('スキーセット＋ウェア上下.¥8,000');
        // ---
        $("#C2").html(`<font size="2px">ボードセット＋ウェア上下<br>(板、ブーツ)</font><br>
        <font size="5px"><center>¥8,000</center></font>`);
        $('#C_2').val('ボードセット＋ウェア上下.¥8,000');
        // ---
        $("#C3").html(`<font size="2px">スキーセット<br>(板、ブーツ、ストック)</font><br>
        <font size="5px"><center>¥5,000</center></font>`);
        $('#C_3').val('スキーセット.¥5,000');
        // ---
        $("#C4").html(`<font size="2px">ボードセット<br>(板、ブーツ)</font><br>
        <font size="5px"><center>¥5,000</center></font>`);
        $('#C_4').val('ボードセット.¥5,000');
        // ---
        $("#C5").html(`<font size="2px">ウェア上下セット<br></font><br>
        <font size="5px"><center>¥5,000</center></font>`);
        $('#C_5').val('ウェア上下セット.¥5,000');
        // ---
        document.getElementById('set-3-2').classList.add('ban-click');
        document.getElementById('set-4').classList.add('ban-click');        
        document.getElementById('set-4-2').classList.add('ban-click');        
        document.getElementById('set-4-3').classList.add('ban-click'); 
        $('input:radio[name=set-3][value="ウエア/ジャケット.¥2,600"]').prop('checked', false);
    $('input:radio[name=set-3][value="ウエア/パンツ.¥2,600"]').prop('checked', false);
    $('input:radio[name=set-4]').prop('checked', false);
    $('input:radio[name=set-4-3]').prop('checked', false);       
    };
    if ( sl == "子供" && sl2 == "１日") {
        // set 1
        $("#C1").html(`<font size="2px">スキーセット＋ウェア上下<br>(板、ブーツ、ストック)</font><br>
        <font size="5px"><center>¥5,000</center></font>`);
        $('#C_1').val('スキーセット＋ウェア上下.¥5,000');
        // ---
        $("#C2").html(`<font size="2px">ボードセット＋ウェア上下<br>(板、ブーツ)</font><br>
        <font size="5px"><center>¥5,000</center></font>`);
        $('#C_2').val('ボードセット＋ウェア上下.¥5,000');
        // ---
        $("#C3").html(`<font size="2px">スキーセット<br>(板、ブーツ、ストック)</font><br>
        <font size="5px"><center>¥3,000</center></font>`);
        $('#C_3').val('スキーセット.¥3,000');
        // ---
        $("#C4").html(`<font size="2px">ボードセット<br>(板、ブーツ)</font><br>
        <font size="5px"><center>¥3,000</center></font>`);
        $('#C_4').val('ボードセット.¥3,000');
        // ---
        $("#C5").html(`<font size="2px">ウェア上下セット<br></font><br>
        <font size="5px"><center>¥3,000</center></font>`);
        $('#C_5').val('ウェア上下セット.¥3,000');
        // ---
        $("#C6").html(`<font size="2px">ウエア/ジャケット<br></font><br>
        <font size="5px"><center>¥2,000</center></font>`);
        $('#C_6').val('ウエア/ジャケット.¥2,000');
        // ---
        $("#C7").html(`<font size="2px">ウエア/パンツ<br></font><br>
        <font size="5px"><center>¥2,000</center></font>`);
        $('#C_7').val('ウエア/パンツ.¥2,000');
        // ---
        $("#C8").html(`<font size="2px">スキー板<br></font><br>
        <font size="5px"><center>¥2,000</center></font>`);
        $('#C_8').val('スキー板.¥2,000');
        // ---
        $("#C9").html(`<font size="2px">ボード板<br></font><br>
        <font size="5px"><center>¥2,000</center></font>`);
        $('#C_9').val('ボード板.¥2,000');
        // ---
        $("#C10").html(`<font size="2px">ブーツ/スキー<br></font><br>
        <font size="5px"><center>¥2,000</center></font>`);
        $('#C_10').val('ブーツ/スキー.¥2,000');
        // ---
        $("#C11").html(`<font size="2px">ブーツ/ボード<br></font><br>
        <font size="5px"><center>¥2,000</center></font>`);
        $('#C_11').val('ブーツ/ボード.¥2,000');
        document.getElementById('set-3-2').classList.remove('ban-click');
        document.getElementById('set-4').classList.remove('ban-click');
        document.getElementById('set-4-2').classList.remove('ban-click');
        document.getElementById('set-4-3').classList.remove('ban-click');
    };
    };
