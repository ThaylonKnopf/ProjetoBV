function select_sol() {
    var sel1 = document.querySelector('#solicitante').value
    var sel2 = document.querySelector('#solicitante-indaial').value

    //alert(sel2)
     if (sel1 === 'Parente de 1º Grau' && sel2 ==='Sim'){
        location.assign('/AcidenteTransito/transitoparente/Form.html')
    } 
    
    else if (sel1 === 'Vitima' && sel2 ==='Sim'){
        location.assign('/AcidenteTransito/transitosolicitante/Form.html')
    } 
    
    else if (sel1 === '' && sel2 ===''){
        document.getElementById('solicitante').style.border='2px solid red'
        document.getElementById('solicitante-indaial').style.border='2px solid red'
        document.getElementById('solicitante').style.color='red'
        document.getElementById('solicitante-indaial').style.color='red'
        alert('selecione as opções')
    } 

    else if (sel1 === '' && sel2 !== '' ){
        document.getElementById('solicitante').style.border='2px solid red'
        document.getElementById('solicitante-indaial').style.border='2px solid red'
        document.getElementById('solicitante').style.color='red'
        document.getElementById('solicitante-indaial').style.color='red'
        alert('Selecione a opção, quem esta solicitando ?')
    }

    else if (sel1 !== '' && sel2 === '' ){
        document.getElementById('solicitante').style.border='2px solid red'
        document.getElementById('solicitante-indaial').style.border='2px solid red'
        document.getElementById('solicitante').style.color='red'
        document.getElementById('solicitante-indaial').style.color='red'
        alert('Selecione a opção, se foi atendido pelo Bombeiros de Indaial !')
    }

    else{
        location.assign('/../rejeicao/rejeicao.html')
    }
}