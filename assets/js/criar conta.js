const btn=document.getElementById('btn')
formulario = document.getElementById('formulario')

const cadastrarUsuario = async (usuario)=>{
    await fetch('https://json-teste-eight.vercel.app/usuarios',{
        method:'POST',  
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(usuario)
      })

      console.log("Cadastrado com sucesso!")
  
      window.location="/pages/login/cadastro/Dados da instituicao.html"
}

 const pegarDados = (e) => {
    event.preventDefault();
    console.log('teste')

    const nome=document.getElementById('nome').value
    const cpf=document.getElementById('cpf').value
    const celular=document.getElementById('celular').value
    const telefone=document.getElementById('telefone').value
    const email=document.getElementById('email').value
    const senha=document.getElementById('senha').value
    
    console.log(nome)
    console.log(email)
    console.log(senha)

    const usuario={
        nome,
        email,
        senha,
        celular,
        telefone,
        cpf,
    }

    cadastrarUsuario(usuario)
 
}

