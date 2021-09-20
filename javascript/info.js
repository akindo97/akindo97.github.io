// JavaScript Document
function validateForm() {
    // đặt giá trị cho từng biến
    //firsname
    var firstname = document.forms["myForm"]["firstname"].value;
    document.getElementById("firstname").innerHTML = firstname;
    if (firstname == "") {
    alert("名を入力してください");
    
    };
    //lastname
    var lastname = document.forms["myForm"]["lastname"].value;
    lastname.innerHTML = lastname;
    document.getElementById("lastname").innerHTML = lastname;
    if (lastname == "") {
    alert("性を入力してください");
    
    };
    //seiname
    var firstname_sei = document.forms["myForm"]["firstname_sei"].value;
    firstname_sei.innerHTML = firstname_sei;
    document.getElementById("firstname_sei").innerHTML = firstname_sei;
    if (firstname_sei == "") {
    alert("メイを入力してください");
    
    };
    //meiname
    var lastname_mei = document.forms["myForm"]["lastname_mei"].value;
    lastname_mei.innerHTML = lastname_mei;
    document.getElementById("lastname_mei").innerHTML = lastname_mei;
    if (lastname_mei == "") {
    alert("セイを入力してください");
    
    };
    //age
    var age = document.forms["myForm"]["age"].value;
    document.getElementById("age").innerHTML = age;
    if (age == "0") {
    alert("年齢を選んでしてください");
    
    };

    //lấy chiều cao
    var height = document.forms["myForm"]["height"].value;
    document.getElementById("height").innerHTML = height;
    if (height == "") {
    alert("身長を入力してください");
    
    };
    //lấy cân nặng
    var weight = document.forms["myForm"]["weight"].value;
    document.getElementById("weight").innerHTML = weight;
    //lấy size của giày
    var size = document.forms["myForm"]["size"].value;
    document.getElementById("size").innerHTML = size;
    if (size == "") {
    alert("靴のサイズを入力してください");
    
    };
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
    
    };
    // lấy địa chỉ 1
    var address1 = document.forms["myForm"]["address1"].value;
    document.getElementById("address_1").innerHTML = address1;
    if (address1 == "") {
    alert("都道府県を入力してください");
    
    };
    // lấy địa chỉ 2
    var address2 = document.getElementsByClassName("address2")[0].value;
    document.getElementById("address_2").innerHTML = address2;
    if (address2 == "") {
    alert("市区町村を入力してください");
    
    };
    // lấy địa chỉ 3
    var address3 = document.forms["myForm"]["address3"].value;
    document.getElementById("address_3").innerHTML = address3;

    if (address3 == "") {
    alert("その他の住所を入力してください");
    
    };
    // lấy địa chỉ 4
    var address4 = document.forms["myForm"]["address4"].value;
    document.getElementById("address_4").innerHTML = address4;
    
    // lấy số điện thoại
    var phonenumber = document.forms["myForm"]["phonenumber"].value;
    document.getElementById("phonenumber").innerHTML = phonenumber;
    if (phonenumber == "") {
    alert("電話番号を入力してください");
    
    };
    
};
// khi ấn tiếp tục mới chạy
// var submit = document.getElementsByName("Submit")[0];
// submit.onclick = function () {
//     validateForm()
// }
//chọn tuổi
var age = document.forms["myForm"]["age"];
    var agehtml = ``
    for (var i = 0; i < 100 ; i++) {
        agehtml += `<option value="${i}">${i}</option>`
    }
    age.innerHTML = agehtml;


// trang cho thuê ////////////////////////////////////////////
    // lấy phiếu giảm giá // không dùng được
// function discount () {
//     var discount = document.getElementsByName("discount");
//     for (var i = 0; i < discount.length; i++){
//         var qrdiscount = document.getElementById("qrdiscount");
//         if (discount[i].checked == true){
//         var getdiscount = discount[i].value;
//         qrdiscount.innerHTML = getdiscount;
//         var getarray = getdiscount.split('.');
//         document.getElementById("discountname").innerHTML = getarray[0];
//         document.getElementById("discountquantity").innerHTML = getarray[1];
//         console.log(getdiscount)
//         if (getdiscount == "シーズン券割引.0") { // hãy thay đổi khi sửa giá trị của value của vé
//             document.getElementById('set-1').classList.add('ban-click');
//         };               
//         };
//     };   
// };
