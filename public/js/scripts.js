function calcularValor(){
    console.log('valorPeso', $("#valorPeso").val());
    console.log('valorCubagem', $("#valorCubagem").val());

    var valorPeso = $("#valorPeso").val();
    var valorCubagem = $("#valorCubagem").val();

    var valorCalculado = valorPeso * valorCubagem;

    Swal.fire({
        icon: 'success',
        title: '',
        text: 'Valor do frete é R$ ' + valorCalculado,
        footer: '<a href="">Entenda o cálculo</a>'
    });
}