/*-------------------------------------------------------------------------------------------------
Listeners
-------------------------------------------------------------------------------------------------*/
$('button').click(calculate);
$('input,select').change(calculate);

/*-------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------*/
function calculate() {
    
    var budget      = $('#budget').val();
    var size          = $('#size').val();
    var services      = $('input[name=services]:checked');
    var total         = 0;

    
    services.each(function() {
            
            var price = $(this).val();
            
            var amount = price * size;
            
            total = total + amount;
            
    });
    
    $('#total_output').html(total);
    
    $('#remaining_budget').html(budget - total);

}

/*-------------------------------------------------------------------------------------------------
function total_calculate() {

    var front_output     = $("#front_output").val();
    var back_output      = $("#back_output").val();

     total_output = parseInt(front_output) + parseInt(back_output);

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
