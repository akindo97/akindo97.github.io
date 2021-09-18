var body = document.getElementsByClassName("body")[0];
var information = document.getElementsByClassName("information")[0];
var qrshow = document.getElementsByClassName("qrshow")[0];
var infopage = document.getElementsByClassName("infopage")[0];
var back = document.getElementsByClassName("back")[0];
var Submit = document.getElementsByClassName("Submit")[0];
var choose = document.getElementsByClassName("choose")[0];
var choose_body = document.getElementById("choosebody");
var choose_back = document.getElementsByClassName("choose-back")[0];
var choose_Submit = document.getElementsByClassName("choose-Submit")[0];
var rent_body = document.getElementsByClassName("rent-body")[0];
var rent_back = document.getElementsByClassName("rent-back")[0];
var rent_Submit = document.getElementsByClassName("rent-Submit")[0];
var qrshow_body = document.getElementsByClassName("qrshow-body")[0];
var qr_back = document.getElementsByClassName("qr-back")[0];
//khi click vào sẽ chuyển trang
//trang chủ
information.onclick = function () {
    infopage.style.display = "block";
    body.style.display = "none";
    updatainfo();
}
choose.onclick = function () {
    rent_body.style.display = "block";
    body.style.display = "none";
}
qrshow.onclick = function () {
    if (localStorage.getItem('data') == null) {
        alert("QRコードをエクスポートする前に情報を入力する必要です。")
    } else {
    updataQR()
    qrshow_body.style.display = "block";
    body.style.display = "none";
    }
}
// trang info
back.onclick = function () {
    infopage.style.display = "none";
    body.style.display = "block";
}
Submit.onclick = function () {

    validateForm();    
    // lấy スタンス
    var stance = document.getElementsByName("stance");
    for (var i = 0; i < stance.length; i++){
        if (stance[i].checked === true){
    document.getElementById("stance").innerHTML = stance[i].value;
        }
    }
    //lấy giới tính
    var checkbox = document.getElementsByName("sex");
    for (var i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked == true){
    document.getElementById("sex").innerHTML = checkbox[i].value;
        };
    };
    // lấy số bưa điện
    var zip_code = document.forms["myForm"]["zip_code"].value;
    document.getElementById("zip_codeshow").innerHTML = zip_code;
    if (zip_code == "") {
    alert("郵便番号を入力してください");
    return false;
    };
    // lấy địa chỉ 1
    var address1 = document.forms["myForm"]["address1"].value;
    document.getElementById("address_1").innerHTML = address1;
    if (address1 == "") {
    alert("都道府県を入力してください");
    return false;
    };
    // lấy địa chỉ 2
    var address2 = document.getElementsByClassName("address2")[0].value;
    document.getElementById("address_2").innerHTML = address2;
    if (address2 == "") {
    alert("市区町村を入力してください");
    return false;
    };
    // lấy địa chỉ 3
    var address3 = document.forms["myForm"]["address3"].value;
    document.getElementById("address_3").innerHTML = address3;

    if (address3 == "") {
    alert("その他の住所を入力してください");
    return false;
    };
    // lấy địa chỉ 4
    var address4 = document.forms["myForm"]["address4"].value;
    document.getElementById("address_4").innerHTML = address4;
    
    // lấy số điện thoại
    var phonenumber = document.forms["myForm"]["phonenumber"].value;
    document.getElementById("phonenumber").innerHTML = phonenumber;
    if (phonenumber == "") {
    alert("電話番号を入力してください");
    return false;
    };
    rent_body.style.display = "block";
    infopage.style.display = "none";
    // chạy hàm lưu vào local s
    saveinfo();
};
// trang thuê
rent_back.onclick = function () {
    rent_body.style.display = "none";
    body.style.display = "block";
    body.style.display = "block";
};
rent_Submit.onclick = function () {
    if (localStorage.getItem('data') == null) {
        alert("利用者情報ページに情報を完全に入力していません")
    } else {
    if (document.getElementById("500").checked == false
     && document.getElementById("1000").checked == false
     && document.getElementById("season").checked == false
     && document.getElementById("nashi").checked == false ) {
        alert("ボタンを選択してください")
    }　else {
    choose_body.style.display = "block";
    rent_body.style.display = "none";
    body.style.display = "none";
    //lấy vé giảm giá và thêm thuộc tính ẩn khi vé có giá trị bằng シーズン券割引.0
    var discount = document.getElementsByName("discount");
    for (var i = 0; i < discount.length; i++){
        var qrdiscount = document.getElementById("qrdiscount");
        if (discount[i].checked == true){
        var getdiscount = discount[i].value;
        qrdiscount.innerHTML = getdiscount;
        var getarray = getdiscount.split('.');
        document.getElementById("discountname").innerHTML = getarray[0];
        document.getElementById("discountquantity").innerHTML = getarray[1];
        if (getdiscount == "シーズン券割引.−¥0") { // hãy thay đổi khi sửa giá trị của value của vé
            document.getElementById('set-1').classList.add('ban-click')
            season()};
            if (getdiscount == "¥500引き.−¥500") { // hãy thay đổi khi sửa giá trị của value của vé
                document.getElementById('set-3-2').classList.add('ban-click');
                coupons500()} 
                if (getdiscount == "¥1,000引き.−¥1,000") { // hãy thay đổi khi sửa giá trị của value của vé
                    document.getElementById('set-3-2').classList.add('ban-click');
                    coupons1000()}   
                    if (getdiscount == "¥割引券なし.−¥0") { // hãy thay đổi khi sửa giá trị của value của vé
                        couponsnashi();} 

        };
    };
};
    
    
    
    
 
};
};
// trang chọn đồ thuê
choose_back.onclick = function () {
    choose_body.style.display = "none";
    rent_body.style.display = "block";
    // gỡ khi ấn quay lại
    if (document.getElementsByClassName("ban-click").length > 0) {
        document.getElementById('set-1').classList.remove('ban-click');
        document.getElementById('set-2').classList.remove('ban-click');
        document.getElementById('set-3').classList.remove('ban-click');
        document.getElementById('set-3-2').classList.remove('ban-click');
        document.getElementById('set-4').classList.remove('ban-click');
        document.getElementById('set-4-2').classList.remove('ban-click');
        document.getElementById('set-4-3').classList.remove('ban-click');
        $('#C__9').removeClass('ban-click')
        $('#C__11').removeClass('ban-click') 
    }
    // gỡ checked
    $('input:radio[name=area-1]').prop('checked', false);
    $('input:radio[name=area-2]').prop('checked', false);
    $('input:radio[name=set-1]').prop('checked', false);
    $('input:radio[name=set-2]').prop('checked', false);
    $('input:radio[name=set-3]').prop('checked', false);
    $('input:radio[name=set-3-2]').prop('checked', false);
    $('input:radio[name=set-4]').prop('checked', false);
    $('input:radio[name=set-4-2]').prop('checked', false);
    $('input:radio[name=set-4-3]').prop('checked', false);
    backupdata(); // trở về trạng thái ban đầu khi ấn quay lại
}
choose_Submit.onclick = function () {
    choose_body.style.display = "none";
    qrshow_body.style.display = "block";
    // lấy value area 1
    var getarea_1 = document.getElementsByName("area-1");
    for (var i = 0; i < getarea_1.length; i++){
        if (getarea_1[i].checked == true){
    document.getElementById("area--1").innerHTML = getarea_1[i].value;
        };
    };
    // lấy value area 2
    var getarea_2 = document.getElementsByName("area-2");
    for (var i = 0; i < getarea_2.length; i++){
        if (getarea_2[i].checked == true){
    document.getElementById("area--2").innerHTML = getarea_2[i].value;
        };
    };
    // lấy value set
    var getset = document.getElementsByName("set-1");
    for (var i = 0; i < getset.length; i++){
        if (getset[i].checked == true){
    document.getElementById("set--").innerHTML = getset[i].value;
    var getarray = getset[i].value.split('.');
    document.getElementById("setname").innerHTML = getarray[0];
    document.getElementById("setprice").innerHTML = getarray[1];
        };
    };
    //
    var getset_2 = document.getElementsByName("set-2");
    for (var i = 0; i < getset_2.length; i++){
        if (getset_2[i].checked == true){
    document.getElementById("set--2").innerHTML = getset_2[i].value;
    var getarray = getset_2[i].value.split('.');
    document.getElementById("setname").innerHTML = getarray[0];
    document.getElementById("setprice").innerHTML = getarray[1];
        };
    };
    //
    var getset_3 = document.getElementsByName("set-3");
    for (var i = 0; i < getset_3.length; i++){
        if (getset_3[i].checked == true){
    document.getElementById("set--3").innerHTML = getset_3[i].value;
    var getarray = getset_3[i].value.split('.');
    document.getElementById("setname-2").innerHTML = getarray[0];
    document.getElementById("setprice-2").innerHTML = getarray[1];
        };
    };
    // 
    var getset_4 = document.getElementsByName("set-4");
    for (var i = 0; i < getset_4.length; i++){
        if (getset_4[i].checked == true){
    document.getElementById("set--4").innerHTML = getset_4[i].value;
    var getarray = getset_4[i].value.split('.');
    document.getElementById("setname-3").innerHTML = getarray[0];
    document.getElementById("setprice-3").innerHTML = getarray[1];
        };
    };
    //
    var getset_4_3 = document.getElementsByName("set-4-3");
    for (var i = 0; i < getset_4_3.length; i++){
        if (getset_4_3[i].checked == true){
    document.getElementById("set--4-3").innerHTML = getset_4_3[i].value;
    var getarray = getset_4_3[i].value.split('.');
    document.getElementById("setname-4").innerHTML = getarray[0];
    document.getElementById("setprice-4").innerHTML = getarray[1];
        };
    };
    //tính tổng
    setTimeout(function(){
        var price_1 = document.getElementById("setprice").innerHTML.replace(/[^0-9]/g, '');
        if (price_1 == "") {price_1 = 0};
        var price_2 = document.getElementById("setprice-2").innerHTML.replace(/[^0-9]/g, '');
        if (price_2 == "") {price_2 = 0};
        var price_3 = document.getElementById("setprice-3").innerHTML.replace(/[^0-9]/g, '');
        if (price_3 == "") {price_3 = 0};
        var price_4 = document.getElementById("setprice-4").innerHTML.replace(/[^0-9]/g, '');
        if (price_4 == "") {price_4 = 0};
        var discountprice = document.getElementById("discountquantity").innerHTML.replace(/[^0-9]/g, '');
        if (discountprice == "") {discountprice = 0};
        var lastprice = parseInt(price_1) + parseInt(price_2) + parseInt(price_3) + parseInt(price_4) - parseInt(discountprice);
        document.getElementById("tatol").innerHTML = lastprice.toLocaleString("en");
    }, 1000);
    // qr code
    
setTimeout(function(){
    var discount = document.getElementsByName("discount");
    for (var i = 0; i < discount.length; i++){
        var qrdiscount = document.getElementById("qrdiscount");
        if (discount[i].checked == true){
        var getdiscount = discount[i].value;

        }};
    var showqr = $("#firstname").text() + "-" + $("#lastname").text() +  "-" +
    $("#firstname_sei").text() + "-" + $("#lastname_mei").text() + "-" +
    $("#age").text() + "-" + $("#sex").text() + "-" +
    $("#height").text() + "-" + $("#weight").text() + "-" +
    $("#size").text() + "-" + $("#stance").text() + "-" +
    $("#zip_codeshow").text() + "-" + $("#address_1").text() + "-" +
    $("#address_2").text() + "-" + $("#address_3").text() + "-" +
    $("#address_4").text() + "-" + $("#phonenumber").text() + "-" +
    getdiscount + "-" + $("#area--1").text() + "-" +
    $("#area--2").text() + "-" + $("#set--").text() + "-" +
    $("#set--2").text() + "-" + $("#set--3").text() + "-" +
    $("#set--4").text() + "-" + $("#set--4-3").text() + "-" + 
    $("#tatol").text();
    // lưu vào và lấy từ LocalStorage
    if ( typeof(Storage) !== 'undefined') {
        // Khởi tạo LocalStorage
        localStorage.setItem('data', showqr);
    } else {
        alert('お使いのブラウザはQRコードの保存をサポートしていません !');
    }
    $(function(){
        var qrtext = localStorage.getItem('data');
        var utf8qrtext = unescape(encodeURIComponent(qrtext));
        $("#img-qr").html("");
        $("#img-qr").qrcode({width:160,height:160,text:utf8qrtext}); 
      });
}, 1000);
};
// trang QR
qr_back.onclick = function () {
    qrshow_body.style.display = "none";
    body.style.display = "block";
};



// hàm thêm QR khi từu trang chủ vào
function updataQR() {
    // lấy dữu liệu từ LocalStorage  và  tạo QR
    $(function(){
        var qrtext = localStorage.getItem('data');
        var utf8qrtext = unescape(encodeURIComponent(qrtext));
        $("#img-qr").html("");
        $("#img-qr").qrcode({width:160,height:160,text:utf8qrtext}); 
      });
      var dataarray = localStorage.getItem('data').split("-");
      var coparray1 = dataarray[19].split(".");
      var coparray2 = dataarray[20].split(".");
      var coparray3 = dataarray[21].split(".");
      var coparray4 = dataarray[22].split(".");
      var coparray5 = dataarray[23].split(".");
      var waribiki = dataarray[16].split(".");
      console.log(waribiki)
      $("#setname").html(coparray1[0]);
      $("#setprice").html(coparray1[1]);
      $("#setname1").html(coparray2[0]);
      $("#setprice1").html(coparray2[1]);
      $("#setname-2").html(coparray3[0]);
      $("#setprice-2").html(coparray3[1]);
      $("#setname-3").html(coparray4[0]);
      $("#setprice-3").html(coparray4[1]);
      $("#setname-4").html(coparray5[0]);
      $("#setprice-4").html(coparray5[1]);
      $("#discountname").html(waribiki[0]);
      $("#discountquantity").html(waribiki[1]);
      console.log(dataarray)
      $("#tatol").html(dataarray[24]);
} 

// hàm updata info
function updatainfo () {
if (localStorage.getItem('data') == null) {
    $('input:radio[name=sex][value=未決定]').attr('checked', true);
    $('input:radio[name=stance][value=未選択]').attr('checked', true);
} 
else {
    var dataarray = localStorage.getItem('data').split("-");
}

    if (localStorage.getItem('data') == null) {

    } else {
      $('#if000').val(dataarray[0])
      $('#if001').val(dataarray[1])
      $('#if002').val(dataarray[2])
      $('#if003').val(dataarray[3])
      $('#if004').val(dataarray[4])
//      $('#if005').val(dataarray[5])
if (dataarray[5] == "男性") {
$('input:radio[name=sex][value=男性]').attr('checked', true);
}
if (dataarray[5] == "女性") {
    $('input:radio[name=sex][value=女性]').attr('checked', true);
    } if (dataarray[5] == "未決定") {
    $('input:radio[name=sex][value=未決定]').attr('checked', true);
    }
      $('#if006').val(dataarray[6])
      $('#if007').val(dataarray[7])
      $('#if008').val(dataarray[8])
//      $('#if009').val(dataarray[9])
if (dataarray[9] == "レギュラー") {
    $('input:radio[name=stance][value=レギュラー]').attr('checked', true);
}
if (dataarray[9] == "グーフィー") {
    $('input:radio[name=stance][value=グーフィー]').attr('checked', true);
} if (dataarray[9] == ">未選択") {
    $('input:radio[name=stance][value=未選択]').attr('checked', true);
}
      $('#if010').val(dataarray[10])
      $('#if011').val(dataarray[11])
      $('#if012').val(dataarray[12])
      $('#if013').val(dataarray[13])
      $('#if014').val(dataarray[14])
      $('#if015').val(dataarray[15])

    
    }
}

           //   tự động check
           $('input:radio[name=area-1][value="大人"]').attr('checked', true);
           $('input:radio[name=area-2][value="１日"]').attr('checked', true);
           $('input:radio[name=discount][value="割引券なし.−¥0"]').attr('checked', true);
// -------
function backupdata () {
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
    };

function saveinfo() {
    setTimeout(function(){
        var discount = document.getElementsByName("discount");
        for (var i = 0; i < discount.length; i++){
            if (discount[i].checked == true){
            var getdiscount = discount[i].value;
    
            }};
        var showqr = $("#firstname").text() + "-" + $("#lastname").text() +  "-" +
        $("#firstname_sei").text() + "-" + $("#lastname_mei").text() + "-" +
        $("#age").text() + "-" + $("#sex").text() + "-" +
        $("#height").text() + "-" + $("#weight").text() + "-" +
        $("#size").text() + "-" + $("#stance").text() + "-" +
        $("#zip_codeshow").text() + "-" + $("#address_1").text() + "-" +
        $("#address_2").text() + "-" + $("#address_3").text() + "-" +
        $("#address_4").text() + "-" + $("#phonenumber").text() + "-" +
        getdiscount + "-" + $("#area--1").text() + "-" +
        $("#area--2").text() + "-" + $("#set--").text() + "-" +
        $("#set--2").text() + "-" + $("#set--3").text() + "-" +
        $("#set--4").text() + "-" + $("#set--4-3").text() + "-" + 
        $("#tatol").text();
        // lưu vào và lấy từ LocalStorage
        if ( typeof(Storage) !== 'undefined') {
            // Khởi tạo LocalStorage
            localStorage.setItem('data', showqr);
        } else {
            alert('お使いのブラウザはQRコードの保存をサポートしていません !');
        }
        $(function(){
            var qrtext = localStorage.getItem('data');
            var utf8qrtext = unescape(encodeURIComponent(qrtext));
            $("#img-qr").html("");
            $("#img-qr").qrcode({width:160,height:160,text:utf8qrtext}); 
          });
    }, 1000);
};