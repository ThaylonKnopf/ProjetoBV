$(document).ready(function(){

    carregar_dados_json('UF');
    
    function carregar_dados_json(elemento, grupo)
    {
     var html_do_select = '';
     var estados = []; //array para filtrar estados sem repetição 
     $.getJSON('https://api.npoint.io/d1c01e18aaaa38703203', function(data){
     
      html_do_select += '<option value="">Selecionar</option>';
      $.each(data.cidade, function(key, value){
      if ($.inArray(value.estado, estados) == -1) {
            estados.push(value.estado);
        
        if(elemento == 'UF')
         { 
              html_do_select += '<option value="'+value.estado+'">'+value.estado+'</option>';  
         }
      }
      if(elemento == 'cidade')
       {
         if(value.estado == grupo)
         {
           html_do_select += '<option value="'+value.nome+'">'+value.nome+'</option>';
         }
       }
      });
      $('#'+elemento).html(html_do_select);
     });
    }
    $(document).on('change', '#UF', function(){
         var UF = $(this).val();
         if(UF != '')
         {
            carregar_dados_json('cidade', UF);
         }
         else
         {
            $('#cidade').html('<option value="">Selecionar</option>');
         }
        });
    });


    const handlePhone = (event) => {
        let input = event.target
        input.value = phoneMask(input.value)
      }
      const phoneMask = (value) => {
        if (!value) return ""
        value = value.replace(/\D/g,'')
        value = value.replace(/(\d{2})(\d)/,"($1) $2")
        value = value.replace(/(\d)(\d{4})$/,"$1-$2")
        return value}