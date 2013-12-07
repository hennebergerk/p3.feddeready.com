$(document).ready(function() {
    var $aerialTr = $('#id_A').closest('tr').hide();


    $('#id_size').change(function() {         
        var selectedValue = $(this).val();
        
        if(selectedValue  === 'A') {

            $aerialTr.hide();

        } else {
            $aerialTr.show();
        }
    });
});