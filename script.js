+function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')

    resultado.innerHTML = "";

    var anoDigitado = Number(formularioAno.value)


    if (formularioAno.value.trim() === "" || isNaN(anoDigitado)) {
        resultado.innerHTML = '<span class="texto"> Por favor, digite um ano!</span>';
        return;
    } else if (anoDigitado <= 0 || anoDigitado < 1950 || anoDigitado > ano) {
        resultado.innerHTML = '<span class="texto"> Confira o ano e tente novamente!';
        return;
    }

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    var nomeTecnologia = "";
    var descricao = "";


    if (anoDigitado >= 1950 && anoDigitado < 1960) {
        img.setAttribute('src', 'imagens/televisao.jpg.png')
        nomeTecnologia = "Televisão"
        descricao = "A televisão é, sem dúvidas, uma das invenções mais significativas da história recente da humanidade, tornando-se o meio de comunicação mais importante do mundo na segunda metade do século XX. Seu surgimento não foi resultado exclusivo do esforço de uma pessoa, mas sim de uma série de avanços científicos que foram sendo conquistados aos poucos."

    } else if (anoDigitado >= 1960 && anoDigitado < 1970) {
        img.setAttribute('src', 'imagens/arpanet.jpg.png')
        nomeTecnologia = "Criação do ARPANET"
        descricao = "A ARPAnet (Advanced Research Projects Agency Network, em português, Rede da Agência de Pesquisas em Projetos Avançados) foi a primeira rede de computadores, construída em 1969 como um meio robusto para transmitir dados militares sigilosos e para interligar os departamentos de pesquisa por todo os Estados Unidos."

    } else if (anoDigitado >= 1970 && anoDigitado < 1980) {
        img.setAttribute('src', 'imagens/atari.jpg.png')
        nomeTecnologia = "Atari"
        descricao = "Atari é uma marca que pertenceu a várias entidades desde a sua criação em 1972. Atualmente, pertence à empresa francesa Atari SA (antiga Infogrames) por meio de uma subsidiária chamada Atari Interactive. A Atari, Inc. original, fundada em Sunnyvale, Califórnia, Estados Unidos, em 1972, por Nolan Bushnell e Ted Dabney, foi pioneira em jogos de fliperama, consoles de jogos eletrônicos e computadores domésticos."

    } else if (anoDigitado >= 1980 && anoDigitado < 1990) {
        img.setAttribute('src', 'imagens/computador.jpg.png')
        nomeTecnologia = "Computadores pessoais"
        descricao = "A partir dos anos 80, os computadores pessoais evoluíram rapidamente, com o lançamento do IBM PC em 1981 e o surgimento de concorrentes como a Compaq e a Dell. A IBM foi a primeira a adotar um padrão aberto para seus computadores, permitindo que outras empresas criassem hardware e software compatíveis."

    } else if (anoDigitado >= 1990 && anoDigitado < 2000) {
        img.setAttribute('src', 'imagens/internet.jpg.png')
        nomeTecnologia = "Internet"
        descricao = "Em 1989, Tim Berners-Lee desenvolveu aWorld Wide Webpara facilitar o trabalho colaborativo no CERN. O sistema se tornou tão popular no CERN que, em 1991, foi aberto ao público externo. Isso foi possível graças à criação do navegador Mosaic em 1993. De fato, sua recepção foi tão rápida que em 1997 havia mais de 200 mil sites."

    } else if (anoDigitado >= 2000 && anoDigitado < 2010) {
        img.setAttribute('src', 'imagens/redes-sociais.png')
        nomeTecnologia = "Redes Sociais"
        descricao = "Lançada em 2003, o MySpace pode ser considerado o primeiro site com cara de rede social como conhecemos hoje. Isso porque a plataforma já trazia algumas funções básicas, como troca rápida de mensagens entre usuários, fóruns de discussão e grupos. Apesar de ter liderado o mercado por muitos anos, caiu em desuso com a popularização do Facebook e Orkut."

    } else if (anoDigitado >= 2010 && anoDigitado < 2020) {
        img.setAttribute('src', 'imagens/realidade-aumentada.png')
        nomeTecnologia = "Realidade virtual e aumentada"
        descricao = "Enquanto a RV estava ressurgindo, a RA também estava em ascensão. O conceito de realidade aumentada começou a tomar forma já na década de 90, mas foi em 2013, com o lançamento do jogo Pokémon GO, que a RA conquistou milhões de usuários ao redor do mundo. O jogo utilizava a câmera do celular para sobrepor Pokémon ao ambiente real, criando uma experiência interativa e divertida."

    } else if (anoDigitado >= 2020 && anoDigitado < 2030) {
        img.setAttribute('src', 'imagens/AI.png')
        nomeTecnologia = "Inteligência artificial"
        descricao = "A inteligência artificial foi fundada como disciplina acadêmica em 1956 e o campo passou por múltiplos ciclos de otimismo ao longo de sua história, seguidos por períodos de decepção e perda de financiamento. Os recursos e o interesse aumentaram após 2012, quando a aprendizagem profunda superou as técnicas de IA anteriores. Este crescimento acelerou e no início da década de 2020 muitos investimentos começaram a ser feitos em IA e o campo experimentou um rápido progresso que ficou conhecido como o boom da IA."

    }

    var container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
    

    container.appendChild(img);

    var titulo = document.createElement('p');
    titulo.textContent = nomeTecnologia;
    titulo.style.fontSize = '30px';;
    container.appendChild(titulo);

    var texto = document.createElement('p');
    texto.textContent = descricao;
    texto.style.fontSize = '20px';

    container.appendChild(texto);

    resultado.innerHTML = `<span class="texto"> Você nasceu em ${anoDigitado}, a tecnologia era:</span>`
    resultado.appendChild(container);

    formularioAno.value = '';


}
