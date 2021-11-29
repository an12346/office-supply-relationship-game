import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// document.getElementById("play").addEventListener("click", nextPage)




$(document).ready(function () {

  let staple = 0;
  let sticky = 0;
  let trash = 0;


  $('#play').click(function () {




    $('#enterName').hide();
    $('#question1').show();
  });

  $(".buttonStapler").click(function () {

    staple ++;

    $('#question1').hide();
    $('#question2').show();
  })



});