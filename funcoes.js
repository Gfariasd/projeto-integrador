
/*função JavaScript para validar se o conteudo de dois campos é igual*/
function checkIguais(campo1, campo2) {
    if (campo2.value !== document.getElementById(campo1).value) {
        campo2.setCustomValidity('Os dois campos não conferem!!!!');
    } else {
        // entrada é válida - redefinir a mensagem de erro
        campo2.setCustomValidity('');
    }
}













/*
        <script>
            /*função JavaScript para validar se o conteudo de dois campos é igual* /
            function checkIguais(campo1, campo2) {
                if (campo2.value !== document.getElementById(campo1).value) {
                    campo2.setCustomValidity('Os dois campos não conferem!!!!');
                } else {
                    // entrada é válida - redefinir a mensagem de erro
                    campo2.setCustomValidity('');
                }
            }
        </script>

            inicio exemplo de API de validação de restrição com JavaScript 
            no resenha colocar oninput="checkIguais( 'senha' , this)"
            fim exemplo de API de validação de restrição com JavaScript 

incluir um form
-->
 
  
 */



