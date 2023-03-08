const btnCadastrar = document.querySelector('#btn-cadastrar');


function cadastrar(event){
    
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    
    event.preventDefault();
    const modelo = document.querySelector('#modelo');
    const placa = document.querySelector('#placa');
    if(modelo.value == ''){
      alert('digite o modelo do veículo');
      return false;
    }
   
    if(placa.value == ''){
      alert('digite a placa do veículo');
      return false;
    }

    let linha = `
    <tr>
    <td>${modelo.value}</td>
    <td>${placa.value}</td>
    <td>${horas}:${minutos}</td>
    <td><button onclick="deletar(this.parentNode.parentNode)" class="btn btn-danger"><i class="fa fa-close"></i></button></td>
    </tr>`;

    const lista = document.querySelector('#lista');
    lista.innerHTML = lista.innerHTML + linha;
    modelo.value = '';
    placa.value = '';
}

btnCadastrar.addEventListener('click', cadastrar);

function deletar(registro){

  Swal.fire({
    title: 'Você tem certeza?',
    text: "Você não poderá reverter isto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, quero apagar'
  }).then((result) => {
    if (result.isConfirmed) {
        registro.remove();
      Swal.fire(
        'Deletado',
        'Veículo removido do pátio.',
        'sucesso!'
      )
    }
  })


}