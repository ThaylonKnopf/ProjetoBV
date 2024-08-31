                function Login() {
                    var username = document.getElementById('iemail');
                    var password = document.getElementById('isenha');

                    // Validação simples para usuário e senha
                    if (username.value === 'admin' && password.value === 'admin') {
                        window.location = "/index.html"
                    } else if (username !== 'admin' && password !== 'admin') {
                        username.value = '';
                        password.value = '';
                        document.getElementById("isenha").style.border = "1px solid red";
                        document.getElementById("iemail").style.border = "1px solid red";
                        document.getElementById("isenha").Placeholder = "senha incorreta";

                    }
                }
                                
                var style = document.createElement('style');
                style.innerHTML = '::placeholder { color: red; }';

                function mostrarMensagemTemporaria(mensagem, tempo) {
                    // Cria um elemento <div> para a mensagem temporária
                    var tempMessage = document.createElement('div');
                    
                    tempMessage.textContent = mensagem;
                    tempMessage.style.position = 'fixed';
                    tempMessage.style.color = 'black';
                    tempMessage.style.top = '5%';
                    tempMessage.style.left = '50%';
                    tempMessage.style.transform = 'translate(-50%, -50%)';
                    tempMessage.style.backgroundColor = '#49e202a6';
                    tempMessage.style.padding = '10px 20px';
                    tempMessage.style.border = '1px solid #ccc';
                    tempMessage.style.borderRadius = '5px';
                    tempMessage.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
                    tempMessage.style.fontWeight = 'bolder';
                    tempMessage.style.zIndex = '3000';

                    // Adiciona o elemento à página
                    document.body.appendChild(tempMessage);

                    // Remove a mensagem após o tempo especificado
                    setTimeout(function () {
                        tempMessage.remove();
                    }, tempo);
                }

                function mostrarMensagemTemporariaErro(mensagem, tempo) {
                    // Cria um elemento <div> para a mensagem temporária
                    var tempMessage = document.createElement('div');
                    tempMessage.textContent = mensagem;
                    tempMessage.style.position = 'fixed';
                    tempMessage.style.color = 'black';
                    tempMessage.style.top = '5%';
                    tempMessage.style.left = '50%';
                    tempMessage.style.transform = 'translate(-50%, -50%)';
                    tempMessage.style.backgroundColor = '#e20202ce';
                    tempMessage.style.padding = '10px 20px';
                    tempMessage.style.border = '1px solid #ccc';
                    tempMessage.style.borderRadius = '5px';
                    tempMessage.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
                    tempMessage.style.fontWeight = 'bolder';
                    tempMessage.style.zIndex = '3000';
                    tempMessage.style.transform= 'transition(.3s,.3s)';
                    tempMessage.style.transition_timing_function= 'ease' ;

                    // Adiciona o elemento à página
                    document.body.appendChild(tempMessage);

                    // Remove a mensagem após o tempo especificado
                    setTimeout(function () {
                        tempMessage.remove();
                    }, tempo);
                }


                // Adiciona o estilo ao cabeçalho da página
                //document.head.appendChild(style);

                document.getElementById('loginForm').addEventListener('submit', function(event) {entrar(event); });

                function entrar(event) {
                    var login = document.getElementById('iemail');
                    var senha = document.getElementById('isenha');
                                  

                    if (login.value == 'admin' && senha.value == 'admin') {
                        event.preventDefault() 
                        login.style.border = '2.5px solid #49e202a6'
                        senha.style.border = '2.5px solid #49e202a6'
                        mostrarMensagemTemporaria('Logado com sucesso !', 1400);
                        setTimeout(function () {
                            location.assign('/index.html');
                        }, 1500);


                    } else if (login.value != 'admin' && senha.value == 'admin') {
                        event.preventDefault() 
                        login.value = ''
                        senha.value = ''
                        login.style.border = '2.5px solid red'
                        login.placeholder = "E-mail incorreto"
                        document.head.appendChild(style);
                        mostrarMensagemTemporariaErro('Login e senha não conferem !', 2000);

                    } else if (login.value == 'admin' && senha.value !== 'admin') {
                        event.preventDefault() 
                        isenha.value = '';
                        login.style.border = '1px solid black';
                        senha.style.border = '2.5px solid red';
                        senha.placeholder = "Senha incorreta";
                        document.head.appendChild(style);
                        mostrarMensagemTemporariaErro('Senha não confere !', 2000);

                    } else if (login.value !== 'admin' && senha.value !== 'admin') {
                        event.preventDefault() 
                        login.value = '';
                        isenha.value = '';
                        login.style.border = '2.5px solid red';
                        senha.style.border = '2.5px solid red';
                        login.placeholder = "E-mail incorreto";
                        senha.placeholder = "Senha incorreta";
                        document.head.appendChild(style);
                        mostrarMensagemTemporariaErro('Login e senha não conferem !', 2000);

                    }
                    else {
                        event.preventDefault() 
                        alert('Login e senha não conferem !')
                    }
                }