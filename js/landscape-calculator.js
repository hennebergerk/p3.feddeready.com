/*-------------------------------------------------------------------------------------------------
Listeners
-------------------------------------------------------------------------------------------------*/
$('button').click(front_calculate);
$('input,select').change(front_calculate);
$('button').click(back_calculate);
$('input,select').change(back_calculate);
$('button').click(total_calculate);
$('input,select').change(total_calculate);     

/*-------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------*/
function front_calculate() {
    
    var front_size          = $('#front_size').val();
    var front_services      = $('input[name=front_services]:checked');
    var front_total         = 0;

    
    front_services.each(function() {
            
            var price = $(this).val();
            
            var amount = price * front_size;
            
            front_total = front_total + amount;
            
    });
    
    $('#front_output').html(front_total);
    
}
/*-------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------*/
function back_calculate() {
    
    var back_size           = $('#back_size').val();
    var back_services       = $('input[name=back_services]:checked');
    var back_total          = 0;

    
    back_services.each(function() {
            
            var price = $(this).val();
            
            var amount = price * back_size;
            
            back_total = back_total + amount;
            
    });
    
    $('#back_output').html(back_total);
    
}        
/*-------------------------------------------------------------------------------------------------
BROKEN: need to successfully add front_output and back_output together:
-------------------------------------------------------------------------------------------------*/
function total_calculate() {

    var front_output     = $('#front_output').val();
    var back_output      = $('#back_output').val();

    total_output = front_output + back_output;

    $('#total_output').html(total_output);
    
}
/*-------------------------------------------------------------------------------------------------


function budget_calculate() {

    var budget           = $('#budget').val();
    var total_output     = $('total_output]').val();

    remaining_budget = budget - total_output

    $('#remaining_budget').html(remaining_budget);
    
}

-------------------------------------------------------------------------------------------------*/
