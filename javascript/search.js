// $(document).ready(function(){

//     // 住所検索ボタンを押すと外部apiを叩く処理が走る。
//     $('#search_address_btn').click(function() {
//         $.getJSON('http://zipcloud.ibsnet.co.jp/api/search?callback=?',
//             {
//             zipcode: $('#zip_code').val()
//             }
//         )
//         .done(function(data) {
//             if (!data.results) {
//                 alert('該当の住所がありません');
//             } else {
//                 let result = data.results[0];
//                 $('#address1').val(result.address1);
//                 $('#address2').val(result.address2);
//                 $('#address3').val(result.address3);
//             }
//         }).fail(function(){
//             alert('入力値を確認してください。');
//         })
//     })

//     // クリアボタンを押すと、フォームの中身がリセットされる。
//     $('#search_clear_btn').click(function(){
//         $('#zip_code').val('');
//         $('#address1').val('');
//         $('#address2').val('');
//         $('#address3').val('');
//     })
// })

$(document).ready(function () {
  $("#search_address_btn").on("click", function () {

    const zip = $("input#if010").val();

    $.ajax({
      url: "https://zipcoda.net/api",
      dataType: "jsonp",
      data: {
        zipcode: zip
      }
    }).then((data) => {
      const pref = data.items[0].components[0];
      const city = data.items[0].components[1];
      const addr = data.items[0].components[2];
      $("input#if011").val(pref);
      $("input#if012").val(city);
      $("input#if013").val(addr);
    });

  });
  $('#search_clear_btn').click(function(){
            $('#if010').val('');
            $('#if011').val('');
            $('#if012').val('');
            $('#if013').val('');
        })
});
