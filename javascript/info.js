// JavaScript Document
function validateForm() {
    // đặt giá trị cho từng biến
    //firsname
    var firstname = document.forms["myForm"]["firstname"].value;
    firstname.innerHTML = firstname;
    document.getElementById("firstname").innerHTML = firstname;
    if (firstname == "") {
    alert("名を入力してください");
    return false;
    };
    //lastname
    var lastname = document.forms["myForm"]["lastname"].value;
    lastname.innerHTML = lastname;
    document.getElementById("lastname").innerHTML = lastname;
    if (lastname == "") {
    alert("性を入力してください");
    return false;
    };
    //seiname
    var firstname_sei = document.forms["myForm"]["firstname_sei"].value;
    firstname_sei.innerHTML = firstname_sei;
    document.getElementById("firstname_sei").innerHTML = firstname_sei;
    if (firstname_sei == "") {
    alert("メイを入力してください");
    return false;
    };
    //meiname
    var lastname_mei = document.forms["myForm"]["lastname_mei"].value;
    lastname_mei.innerHTML = lastname_mei;
    document.getElementById("lastname_mei").innerHTML = lastname_mei;
    if (lastname_mei == "") {
    alert("セイを入力してください");
    return false;
    };
    //age
    var age = document.forms["myForm"]["age"].value;
    document.getElementById("age").innerHTML = age;
    if (age == "0") {
        alert("年齢を選んでしてください");
        return false;
        };
    //chọn giới tính
    var select = document.getElementById("select");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if ((male.checked == false) && (female.checked == false)) {
    alert("性別選んでください");
    return false;
    }
    //lấy giới tính
    var checkbox = document.getElementsByName("sex");
    for (var i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked == true){
    document.getElementById("male").innerHTML = checkbox[i].value;
        };
    };
    //lấy chiều cao
    var height = document.forms["myForm"]["height"].value;
    height.innerHTML = height;
    document.getElementById("height").innerHTML = height;
    if (height == "") {
    alert("身長を入力してください");
    return false;
    };
    //lấy cân nặng
    var weight = document.forms["myForm"]["weight"].value;
    weight.innerHTML = weight;
    document.getElementById("weight").innerHTML = weight;
    if (weight == "") {
    alert("体重を入力してください");
    return false;
    };
    //lấy size của giày
    var size = document.forms["myForm"]["size"].value;
    size.innerHTML = size;
    document.getElementById("size").innerHTML = size;
    if (size == "") {
    alert("靴のサイズを入力してください");
    return false;
    };
    // lấy スタンス
    var stance = document.getElementsByName("stance");
    for (var i = 0; i < stance.length; i++){
        if (stance[i].checked === true){
    document.getElementById("stance").innerHTML = stance[i].value;

            console.log(stance[i].value);
        }
    }
    
};
// khi ấn tiếp tục mới chạy
var submit = document.getElementsByName("Submit")[0];
submit.onclick = function () {
    validateForm()
}
//chọn tuổi
var age = document.forms["myForm"]["age"];
    var agehtml = ``
    for (var i = 0; i < 100 ; i++) {
        agehtml += `<option value="${i}">${i}</option>`
    }
    age.innerHTML = agehtml;


// trang cho thuê ////////////////////////////////////////////
    // lấy phiếu giảm giá
var qrdiscount = document.getElementsByClassName("qrdiscount")[0];
function discount (disc) {
    var discount = document.getElementsByName("discount");
    for (var i = 0; i < discount.length; i++){
        if (discount[i].checked === true){
            var getdiscount = discount[i].value
            qrdiscount.innerHTML = getdiscount            
            return;
        }
    }  
    
};