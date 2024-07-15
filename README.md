# Desafio Dio bitcoins wallet
## Este projeto demonstra como gerar uma carteira Bitcoin utilizando Node.js.

### Requisitos:
 * Docker instalado em sua máquina.

### Como executar o projeto.

Clone o repositório:

    git clone https://github.com/raunerlucas/dio-btc-wallet.git
Acesse o diretório do projeto:

    cd dio-btc-wallet
Construa a imagem Docker:

    docker build -t bitcoin-wallet .
Execute o container Docker:

    docker run bitcoin-wallet

### Resultado esperado:
Ao executar o projeto, uma nova carteira Bitcoin com um endereço, chave privada e frase mnemônica serão gerados e exibidos no console do docker.

Informações importantes:

   - Frase Mnemônica: Guarde sua frase mnemônica em um local seguro. Ela é essencial para recuperar sua carteira e seus fundos.

   - Chave Privada: A chave privada concede acesso total à sua carteira. Nunca a compartilhe com ninguém.

   - Segurança: Este código é apenas para fins educacionais. Não o utilize para armazenar grandes quantias de Bitcoin.

## Aviso Legal:

Este código é fornecido "como está", sem garantia de qualquer tipo, expressa ou implícita. O uso deste código é por sua conta e risco. Em nenhuma circunstância os autores ou colaboradores deste código serão responsáveis por quaisquer reivindicações, danos ou outras responsabilidades, sejam em ação de contrato, ato ilícito ou de outra forma, decorrentes de, fora de ou em conexão com o código ou o uso ou outras negociações no código.
 Estes tem como fins educacionais e não deve ser utilizado para armazenar grandes quantias de Bitcoin.
