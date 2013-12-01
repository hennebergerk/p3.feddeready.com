/*-------------------------------------------------------------------------------------------------
Listeners
-------------------------------------------------------------------------------------------------*/
$('button').click(front_calculate);
$('input,select').change(front_calculate);
$('button').click(back_calculate);
$('input,select').change(back_calculate);

/*-------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------*/
function front_calculate() {
    
    var budget              = $('#budget').val();
    var front_size          = $('#front_size').val();
    var front_services      = $('input[name=front_services]:checked');
    var front_total         = 0;

    
    front_services.each(function() {
            
            var price = $(this).val();
            
            var amount = price * front_size;
            
            front_total = front_total + amount;
            
    }); // end of loop
    
    $('#front_output').html(front_total);
    
}

/*-------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------*/
function back_calculate() {
    
    var budget              = $('#budget').val();
    var back_size           = $('#back_size').val();
    var back_services       = $('input[name=back_services]:checked');
    var back_total         = 0;

    
    back_services.each(function() {
            
            var price = $(this).val();
            
            var amount = price * back_size;
            
            back_total = back_total + amount;
            
    }); // end of loop
    
    $('#back_output').html(back_total);
    
}        
