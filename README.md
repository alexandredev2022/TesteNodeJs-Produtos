Para executar o projeto é necessario ter o docker e principalmente o docker-compose na maquina.

Para rodar o projeto temos as seguintes opções:
    
    1 - apenas abrir o local.sh
    2 - rodar o ./local.sh no terminal
    3 - entrar no database e rodar o "docker-compose up -d" e na raiz do projeto rodar "npm run server"
    4 - utilizar a rota http://localhost:3000/api/v1/product
        queryParams para paginação e filtros são
            - limit -> define quantidade de item que vai ser exibido
            - page -> a pagina atual que você deseja estar
            - name -> Filtro por nome do produto
            OBS : Esses filtros não querys não obrigatórios para rodar. Deixarei uma img de exemplo caso precisar -> https://uploaddeimagens.com.br/imagens/HNqvQ-k