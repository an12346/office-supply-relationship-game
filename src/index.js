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
    
 
    $('#enterName').hide();
    $('#question1').show();

    function calculateWinner() {
      if (trash === staple || trash === sticky) {
        trash += 1;
      } else if (sticky === staple) {
        sticky += 1;
      }
      
      if (trash > sticky && trash > staple) {
        $('#trashImg').fadeIn();
        $('#answer').fadeIn();
      } else if (sticky > trash && sticky > staple) {
        $('#stickyImg').fadeIn();
        $('#answer').fadeIn();
      } else if (staple > trash && staple > sticky) {
        $('#staplerImg').fadeIn();
        $('#answer').fadeIn();
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
      $("#reset-button").show();
    }

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

    
    $('.8buttonStapler').click(function () {
      staple += 1;
      eighthQ();
    });
    $('.8buttonTrash').click(function () {
      trash += 1;
      eighthQ();
    });
    $('.8buttonSticky').click(function () {
      sticky += 1;
      eighthQ();
    });
    
    let reset = document.getElementById("reset-button");
    reset.addEventListener("click", function(e) {
      location.reload();
    });
  
  });
});
