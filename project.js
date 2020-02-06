$(document).ready(function() {

    $('form').on('submit', function (e) {

        e.preventDefault();

        $.ajax({
            type: 'post',
            url: 'send_form.php',
            data: $('form').serialize(),
        }).done(function (res) {
            $(".contact__btn").click(function () {
                $(".contact__btn").hide();
                $(".form__success").css('opacity', '1');
                $(this).closest('form').find("input[type=text], input[type=email], textarea").val("");
            });
        })

    });

});


$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});