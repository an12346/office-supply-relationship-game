import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

let staple = 0;
let sticky = 0;
let trash = 0;

function calculateWinner() {
  if (trash === staple || trash === sticky) {
    trash += 1;
  } else if (sticky === staple) {
    sticky += 1;
  }  

  if (trash > sticky && trash > staple) {
    console.log(trash);
    $('#trash').show();
  } else if (sticky > trash && sticky > staple) {
    console.log(sticky);
    $('#sticky').show();
  } else if (staple > trash && staple > sticky) {
    console.log(staple);
    $('#stapler').show();
  }

}
function firstq() {
  $('#question1').hide();
  $('#question2').show();
}

function secq() {
  $('#question2').hide();
  $('#question3').show();
}

function thirdq() {
  $('#question3').hide();
  $('#question4').show();
}

function fourthq() {
  $('#question4').hide();
  $('#question5').show();
}

function fifthQ() {
  $('#question5').hide();
  calculateWinner();
}



$(document).ready(function () {

  //START PLAY PHASE
  $('#play').click(function () {
    $('#enterName').hide();
    $('#question1').show();
  });

  //FIRST QUESTION PHASE
  $('.1buttonStapler').click(function () {
    staple += 1;
    firstq();
  });
  $('.1buttonTrash').click(function () {
    trash += 1;
    firstq();
  });
  $('.1buttonSticky').click(function () {
    sticky += 1;
    firstq();
  });

  //SECOND QUESTION PHASE
  $('.2buttonStapler').click(function () {
    staple += 1;
    secq();
  });
  $('.2buttonTrash').click(function () {
    trash += 1;
    secq();
  });
  $('.2buttonSticky').click(function () {
    sticky += 1;
    secq();
  });

  //THIRD QUESTION PHASE
  $('.3buttonStapler').click(function () {
    staple += 1;
    thirdq();
  });
  $('.3buttonTrash').click(function () {
    trash += 1;
    thirdq();
  });
  $('.3buttonSticky').click(function () {
    sticky += 1;
    thirdq();
  });


  //FOURTH QUESTION PHASE
  $('.4buttonStapler').click(function () {
    staple += 1;
    fourthq();
  });
  $('.4buttonTrash').click(function () {
    trash += 1;
    fourthq();
  });
  $('.4buttonSticky').click(function () {
    sticky += 1;
    fourthq();
  });
 
  //FIFTH QUESTION PHASE
  $('.5buttonStapler').click(function () {
    staple += 1;
    console.log(staple);
    fifthQ();
  });
  $('.5buttonTrash').click(function () {
    trash += 1;
    console.log(trash);
    fifthQ();
  });
  $('.5buttonSticky').click(function () {
    sticky += 1;
    console.log(sticky);
    fifthQ();
  });

});
