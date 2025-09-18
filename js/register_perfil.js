btn-menu /*arrumar menu sanduiche para exibir o menu*/

resp-student /*arrumar para aparecer só se o estudante for de menor*/

btn-makeacc /*arrumar para fazer o envio das informações*/


//Regex do Curador

//formata o numero de telefone no input
function formatarTelefone(input) {
    let telefone = input.value.replace(/\D/g, ''); // Remove tudo que não for número
    if (telefone.length > 10) {
      // Formato para 11 dígitos (DDD + 9 + número)
      telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (telefone.length > 6) {
      // Formato para 10 dígitos (DDD + número)
      telefone = telefone.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    } else if (telefone.length > 2) {
      // Formato para DDD
      telefone = telefone.replace(/^(\d{2})(\d{1,4})$/, '($1) $2');
    }
    input.value = telefone; // Atualiza o valor do campo
  }


function formatarCPF(input) {
    // Remove qualquer caractere não numérico
    let cpf = input.value.replace(/\D/g, '');
    
    // Aplica a formatação apenas quando o CPF tiver 11 caracteres
    if (cpf.length <= 11) {
        input.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
        input.value = cpf;
    }
}

function btnSendOnClickCurador() {
    const txtNameCurador = document.getElementById('txtNameCurador')
    const txtCpfCurador = document.getElementById('txtCpfCurador')
    const numbTelCurador = document.getElementById('numbTelCurador')
    const emailCurador = document.getElementById('emailCurador')
    const emailCuradorConf = document.getElementById('emailCuradorConf')
    const passAccCurador = document.getElementById('passAccCurador')
    const confPassCurador = document.getElementById('confPassCurador')

    if (txtNameCurador.value.trim() == "") {
        alert('Preenchimento Obrigatório: Nome')
        txtNameCurador.focus()
    }

    else if (txtCpfCurador.value.trim() == ""){
        alert('Preenchimento Obrigatório: CPF')
        txtCpfCurador.focus()
    }

    else if (!validarCPF(txtCpfCurador.value)) {
        alert('CPF inválido')
        txtCpfCurador.value = ""
        txtCpfCurador.focus()
    }


    else if (numbTelCurador.value.trim() == "") {
        alert('Preenchimento Obrigatório: Telefone')
        numbTelCurador.focus()
    }

    else if (!validarTelefone(numbTelCurador.value)) {
        alert('Telefone inválido')
        numbTelCurador.value = ""
        numbTelCurador.focus()
    }

    else if (emailCurador.value.trim() == "") {
        alert('Preenchimento Obrigatório: Email')
        emailCurador.focus()
    }

    else if (!validarEmail(emailCurador.value)) {
        alert('Email inválido')
        emailCurador.value = ""
        emailCurador.focus()
    }

    else if (emailCuradorConf.value.trim() == "") {
        alert('Preenchimento Obrigatório: Confirmação de Email')
        emailCuradorConf.focus()
    }

    else if ((emailCuradorConf.value !== emailCurador.value)) {
        alert('Email não correspondente')
        emailCuradorConf.value = ''
        emailCuradorConf.focus()
    }

    else if (passAccCurador.value.trim() == "") {
        alert('Preenchimento Obrigatório: Senha')
        passAccCurador.focus()
    }

    else if (!validarSenha(passAccCurador.value)) {
        alert('Senha deve conter no mínimo 5 caractéres e no máximo 10')
        passAccCurador.value = ''
        passAccCurador.focus()
    }

    else if (confPassCurador.value.trim() == "") {
        alert('Preenchimento Obrigatório: Senha')
        confPassCurador.focus()
    }

    else if ((confPassCurador.value !== passAccCurador.value)) {
        alert('Senha não correspondente')
        confPassCurador.value = ''
        confPassCurador.focus()
    }

    else {
        formCadCurador.submit()
    }
}


function validarCPF(cpf) {
    const re = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/
    return re.test(cpf)
}

function validarEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(email)
}

function validarTelefone(telefone) {
    const re = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/
    return re.test(telefone)
}

function validarSenha(senha) {
    const re = /^[\w\W]{5,10}$/
    return re.test(senha)
}
  

//Regex do Professor

function btnSendOnClickProfessor() {
    const emailTeacher = document.getElementById('emailTeacher')
    const txtCpfTeacher = document.getElementById('txtCpfTeacher')
    const numbTelTeacher = document.getElementById('numbTelTeacher')
    const passAccTeacher = document.getElementById('passAccTeacher')



    if (!validarCPF(txtCpfTeacher.value)) {
        alert('CPF inválido')
        txtCpfTeacher.value = ""
        txtCpfTeacher.focus()
    }

    else if (!validarTelefone(numbTelTeacher.value)) {
        alert('Telefone inválido')
        numbTelTeacher.value = ""
        numbTelTeacher.focus()
    }

    else if (!validarEmail(emailTeacher.value)) {
        alert('Email inválido')
        emailTeacher.value = ""
        emailTeacher.focus()
    }

    else if (!validarSenha(passAccTeacher.value)) {
        alert('Senha deve conter no mínimo 5 caractéres e no máximo 10')
        passAccTeacher.value = ''
        passAccTeacher.focus()
    }


    else {
        formTeacher.submit()
    }
}


function validarCPF(cpf) {
    const re = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/
    return re.test(cpf)
}

function validarEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(email)
}

function validarTelefone(telefone) {
    const re = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/
    return re.test(telefone)
}

function validarSenha(senha) {
    const re = /^[\w\W]{5,10}$/
    return re.test(senha)
}

//Regex do Aluno

function btnSendOnClickAluno() {
    const emresp = document.getElementById('emresp')
    const numbcpf = document.getElementById('numbcpf')
    const numtel = document.getElementById('numtel')
    const emailAluno = document.getElementById('emailAluno')
    const passacc = document.getElementById('passacc')



    if (!validarCPF(numbcpf.value)) {
        alert('CPF inválido')
        numbcpf.value = ""
        numbcpf.focus()
    }

    else if (!validarTelefone(numtel.value)) {
        alert('Telefone inválido')
        numtel.value = ""
        numtel.focus()
    }

    else if (!validarEmail(emailAluno.value)) {
        alert('Email inválido')
        emailAluno.value = ""
        emailAluno.focus()
    }

    else if (!validarEmail(emresp.value)) {
        alert('Email inválido')
        emresp.value = ""
        emresp.focus()
    }

    else if (!validarSenha(passacc.value)) {
        alert('Senha deve conter no mínimo 5 caractéres e no máximo 10')
        passacc.value = ''
        passacc.focus()
    }


    else {
        formCadAluno.submit()
    }
}


function validarCPF(cpf) {
    const re = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/
    return re.test(cpf)
}

function validarEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(email)
}

function validarTelefone(telefone) {
    const re = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/
    return re.test(telefone)
}

function validarSenha(senha) {
    const re = /^[\w\W]{5,10}$/
    return re.test(senha)
}