/*-------------------------------------------------------------------------------------------------
Listeners
-------------------------------------------------------------------------------------------------*/
$('button').click(calculate);
$('input,select').change(calculate);

/*-------------------------------------------------------------------------------------------------
Calculate the total estimated expenses & Calculate the remaining amount left in user's budget
-------------------------------------------------------------------------------------------------*/
function calculate() {
    
    var budget      = $('#budget').val();
    var size          = $('#id_size').val();
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