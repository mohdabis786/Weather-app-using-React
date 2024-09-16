$(document).ready(function() {
    start();
    function start() {
    var orig = $('#container').html();
    var backBtn = '<a id="backBtn" class="waves-effect waves-light btn light-green darken-2">Go Back</a>';
    $('#btn').click(function() {
       if(!$('#container > input').val()) {
         alert("IFSC can't be blank!");
       }
      else{
        change(1);
      }
    });
  
    function change(i) {
      if(i==0) {
        $('#container').fadeOut(function() {
          $('#backBtn').remove();
          $('#container').empty().append(orig);  
          $('#container').css({
            'width': '20%'
          });
          
        });
        $('#container').fadeIn(function() {
          start();
        });
      }
      else if(i==1) {
        var ifsc = String($('#container > input').val());
        $('#container').fadeOut(function() {
         $('#container').empty();
         $.getJSON('https://ifsc.razorpay.com/'+ifsc, function(data){
  
              var table = '<table class="striped">'
             +'<thead>'
             +'<tr><td>Bank Name</td><td>IFSC Code</td><td>Branch</td><td>Address</td><td>City</td><td>State</td></tr>'
             +'</thead>'
             +'<tbody>'
             +'<tr><td>'+data.BANK+'</td><td>'+data.IFSC+'</td><td>'+data.BRANCH+'</td><td>'+data.ADDRESS+'</td><td>'+data.CITY+'</td><td>'+data.STATE+'</td></tr>'
             +'</tbody>'
             +'</table>';
             $('#container').append('<div id="header">Bank Details</div>');
             $('#container').append(table); 
             $('#backBtn').show(); 
          
         }).fail(function(){
           var msg = '<div id="errMsg">Invalid IFSC code</div>';
           $('#container').append(msg);
         });
         $('#container').css({
           'width':'90%'
         });
         $('body').append(backBtn);
          
       });
        
       $('#container').fadeIn(function() {
        $('#backBtn').click(function() {
            change(0);
          });
       });
       
      }
    }
  }
  });