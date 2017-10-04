$(function(){
    $('form input[type=submit]').click(function(e){
        if(!$('form')[0].checkValidity()){
             return;
        }
        e.preventDefault();
         $.ajax({
            url: "https://formspree.io/rubaha0994@gmail.com",
            method: "POST",
            data: { 
                personName: $('#visitor-name').val(),
                personEmail: $('#visitor-email').val(),
                message: $('#visitor-message').val(),
                bestbike: $('#bike').val()},
            dataType: "json"
        }).done(function(){
            $('form')[0].reset();
        $('#message-box').html('Thank you!');
        }).fail(function() {
            $('#message-box').html('Error');
        });
    })
    
    
})