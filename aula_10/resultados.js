$(document).ready(
    function(){
       var params = new URLSearchParams(location.search);
       var opcao = params.get("opcao");
       alert(opcao)
    }
)

       