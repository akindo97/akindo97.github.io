var body = document.getElementsByClassName("body")[0];
var information = document.getElementsByClassName("information")[0];
var qrshow = document.getElementsByClassName("qrshow")[0];
var infopage = document.getElementsByClassName("infopage")[0];
var back = document.getElementsByClassName("back")[0];
var Submit = document.getElementsByClassName("Submit")[0];
var choose = document.getElementsByClassName("choose")[0];
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
    getaddress();
    
    
}
// trang thuê
rent_back.onclick = function () {
    rent_body.style.display = "none";
};
rent_Submit.onclick = function () {
    discount()
    qrshow_body.style.display = "block";
};
// trang QR
qr_back.onclick = function () {
    qrshow_body.style.display = "none";
};
function getaddress () {
    // lấy số bưa điện
    var zip_code = document.forms["myForm"]["zip_code"].value;
    zip_code.innerHTML = zip_code;
    document.getElementById("zip_code").innerHTML = zip_code;
    if (zip_code == "") {
    alert("郵便番号を入力してください");
    return false;
    };
    // lấy địa chỉ 1
    var address1 = document.forms["myForm"]["address1"].value;
    address1.innerHTML = address1;
    document.getElementById("address1").innerHTML = address1;

    if (address1 == "") {
    alert("都道府県を入力してください");
    return false;
    };
    // lấy địa chỉ 2
    var address2 = document.getElementsByClassName("address2")[0];
    address2.innerHTML = address2;
    document.getElementById("address2").innerHTML = address2;
    if (address2 == "") {
    alert("市区町村を入力してください");
    return false;
    };
    // lấy địa chỉ 3
    var address3 = document.getElementsByClassName("address3")[0].value;
    address3.innerHTML = address3;
    document.getElementById("address3").innerHTML = address3;

    if (address3 == "") {
    alert("その他の住所を入力してください");
    return false;
    };
    // lấy địa chỉ 4
    var address4 = document.forms["myForm"]["address4"].value;
    address4.innerHTML = address4;
    if (address4 == "") {
    alert("番地を入力してください");
    return false;
    };
    // lấy số điện thoại
    var phonenumber = document.forms["myForm"]["phonenumber"].value;
    phonenumber.innerHTML = phonenumber;
    if (phonenumber == "") {
    alertdd("電話番号を入力してください");
    return false;
    };
    
}