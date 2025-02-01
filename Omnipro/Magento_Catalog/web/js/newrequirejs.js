define([
    "jquery",
    'Magento_Ui/js/modal/alert',
    "jquery/ui",
], function ($, alert) {
    'use strict';
    $(document).on('change',"[name='country_id']",function(){
        var valor = $(this).find('option:selected').val();
        console.log(valor);
        if (valor == 'Colombia'){
            $('#opc-sidebar .opc-block-summary.active').append("<span> Pais:"+ valor +"</span>");
        }
    });
});
