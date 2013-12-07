/*-------------------------------------------------------------------------------------------------
Unhide the optional service checkboxes when "size" of property is selected
-------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
    var $servicesTr = $('#id_A').closest('tr').hide();


    $('#id_size').change(function() {         
        var selectedValue = $(this).val();
        
        if(selectedValue  === 'A') {

            $servicesTr.hide();

        } else {
            $servicesTr.show();
        }
    });
});