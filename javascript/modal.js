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
}
choose.onclick = function () {
    rent_body.style.display = "block"
}
qrshow.onclick = function () {
    qrshow_body.style.display = "block";
}
// trang info
back.onclick = function () {
    infopage.style.display = "none";
}
Submit.onclick = function () {
    rent_body.style.display = "block";
    infopage.style.display = "none";
    validateForm();
        //chọn giới tính
    var select = document.getElementById("select");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if ((male.checked == false) && (female.checked == false) && (select.checked == false)) {
    alert("性別選んでください");
    return false;
    };
    //lấy giới tính
    var checkbox = document.getElementsByName("sex");
    for (var i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked == true){
    document.getElementById("sex").innerHTML = checkbox[i].value;
        };
    };
    // lấy số bưa điện
    var zip_code = document.forms["myForm"]["zip_code"].value;
    zip_code.innerHTML = zip_code;
    document.getElementById("zip_codeshow").innerHTML = zip_code;
    if (zip_code == "") {
    alert("郵便番号を入力してください");
    return false;
    };
    // lấy địa chỉ 1
    var address1 = document.forms["myForm"]["address1"].value;
    address1.innerHTML = address1;
    document.getElementById("address_1").innerHTML = address1;

    if (address1 == "") {
    alert("都道府県を入力してください");
    return false;
    };
    // lấy địa chỉ 2
    var address2 = document.getElementsByClassName("address2")[0].value;
    address2.innerHTML = address2;
    document.getElementById("address_2").innerHTML = address2;
    if (address2 == "") {
    alert("市区町村を入力してください");
    return false;
    };
    // lấy địa chỉ 3
    var address3 = document.forms["myForm"]["address3"].value;
    address3.innerHTML = address3;
    document.getElementById("address_3").innerHTML = address3;

    if (address3 == "") {
    alert("その他の住所を入力してください");
    return false;
    };
    // lấy địa chỉ 4
    var address4 = document.forms["myForm"]["address4"].value;
    address4.innerHTML = address4;
    document.getElementById("address_4").innerHTML = address4;
    if (address4 == "") {
    alert("番地を入力してください");
    return false;
    };
    // lấy số điện thoại
    var phonenumber = document.forms["myForm"]["phonenumber"].value;
    phonenumber.innerHTML = phonenumber;
    document.getElementById("phonenumber").innerHTML = phonenumber;
    if (phonenumber == "") {
    alertdd("電話番号を入力してください");
    return false;
    };
    
    
}
// trang thuê
rent_back.onclick = function () {
    rent_body.style.display = "none";
    body.style.display = "block";
};
rent_Submit.onclick = function () {
    discount()
    choose_body.style.display = "block";
    rent_body.style.display = "none";
    body.style.display = "none";
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
    }
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
        };
    };
    //
    var getset_2 = document.getElementsByName("set-2");
    for (var i = 0; i < getset_2.length; i++){
        if (getset_2[i].checked == true){
    document.getElementById("set--").insertAdjacentHTML('afterend', getset_2[i].value);
        };
    };
    //
    var getset_3 = document.getElementsByName("set-3");
    for (var i = 0; i < getset_3.length; i++){
        if (getset_3[i].checked == true){
    document.getElementById("set--").insertAdjacentHTML('afterend', getset_3[i].value);
        };
    };
    // 
    var getset_4 = document.getElementsByName("set-4");
    for (var i = 0; i < getset_4.length; i++){
        if (getset_4[i].checked == true){
    document.getElementById("set--").insertAdjacentHTML('afterend', getset_4[i].value);
        };
    };
};
// trang QR
qr_back.onclick = function () {
    qrshow_body.style.display = "none";
    body.style.display = "block";
};
