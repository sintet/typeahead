$(document).ready(function() {
  'use strict';
  var minCharLength = 3;
  var mock = [{
    name: "asd",
    tags: "asd aaa ddd",
    desc: "loremasdasdasdasdasdasd"
  }, {
    name: "qwe",
    tags: "qwe www eee",
    desc: "assss"
  }, {
    name: "zxc",
    tags: "zxc zzz ccc",
    desc: "zxczxcacsasc"
  }];

  $("#typeaheadInput").on('keyup',function () {

    if($(this).val().length >= minCharLength ){
      console.log($(this).val());
      $(".dropdown").removeClass('hidden');
    }

  });


  $("#typeaheadInput").on('blur', function () {
    $(".dropdown").addClass('hidden');
  });

  $(".dropdown").find(".itm").on('click', function () {
    var val = $(this).html();
    $("#typeaheadInput").val(val)
  });


});
