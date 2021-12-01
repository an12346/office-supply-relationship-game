import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  $("#nameForm").submit(function(event) {
    event.preventDefault();

    let staple = 0;
    let sticky = 0;
    let trash = 0;
    let userName = $('#userName').val();
 
    function calculateWinner() {
      if (trash === staple || trash === sticky) {
        trash += 1;
      } else if (sticky === staple) {
        sticky += 1;
      }
      
      if (trash > sticky && trash > staple) {
        $('#trashImg').show();
      } else if (sticky > trash && sticky > staple) {
        $('#stickyImg').show();
      } else if (staple > trash && staple > sticky) {
        $('#staplerImg').show();
      }
    }

    function firstq() {
      $('.name').text(userName);
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
      $('#question6').show();
    }

    function sixthQ() {
      $('#question6').hide();
      $('#question7').show();
    }

    function seventhQ() {
      $('#question7').hide();
      $('#question8').show();
    }

    function eighthQ() {
      $('#question8').hide();
      calculateWinner();
    }

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
      fifthQ();
    });
    $('.5buttonTrash').click(function () {
      trash += 1;
      fifthQ();
    });
    $('.5buttonSticky').click(function () {
      sticky += 1;
      fifthQ();
    });

    //SIXTH QUESTION PHASE
    $('.6buttonStapler').click(function () {
      staple += 1;
      sixthQ();
    });
    $('.6buttonTrash').click(function () {
      trash += 1;
      sixthQ();
    });
    $('.6buttonSticky').click(function () {
      sticky += 1;
      sixthQ();
    });

    //SEVENTH QUESTION PHASE
    $('.7buttonStapler').click(function () {
      staple += 1;
      seventhQ();
    });
    $('.7buttonTrash').click(function () {
      trash += 1;
      seventhQ();
    });
    $('.7buttonSticky').click(function () {
      sticky += 1;
      seventhQ();
    });

    //EIGHT QUESTION PHASE
    $('.8buttonStapler').click(function () {
      staple += 1;
      console.log("St: " + staple);
      console.log("T: " + trash);
      console.log("St: " + sticky);
      eighthQ();
    });
    $('.8buttonTrash').click(function () {
      trash += 1;
      console.log("St: " + staple);
      console.log("T: " + trash);
      console.log("St: " + sticky);
      eighthQ();
    });
    $('.8buttonSticky').click(function () {
      sticky += 1;
      console.log("St: " + staple);
      console.log("T: " + trash);
      console.log("St: " + sticky);
      eighthQ();
    });

  });
});
