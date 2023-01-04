 # <h1 align="center"> University </h1>


# 🛠️ Abrir e rodar o projeto

**Para inicializar o projeto por favor instale o docker na sua máquina,  o link para ajuda na instalação do docker é esse: 

https://docs.docker.com/engine/install/ubuntu/ 

Caso já o tenha instalado rode o comando docker-compose up**

# :hammer: Funcionalidades do projeto

- `Populate`: Para popular o banco de dados existe a rota  GET   /populate
- `POST`: Para criar uma univesity nova a rote é POST   /universities   com o body:

{

        "alpha_two_code": "string",
        "name": "string",
        "web_pages": ["string", "string"],
        "state_province": "string",
        "domains": "string",
        "country": "string"
        
}
- `GET ALL`: Para retornar todas as universities a rota é GET     /universities  podendo passar o parâmetro de página ?page e filtrando por país ?country
- `GET ONE`: Para retornar uma university com todas as informações  a rota é GET   /universities/:id
- `UPDATE`: Para atualizar uma university a rota é PUT  /universities/:id   com o body:

{
       
        "name": "string",
        "web_pages": ["string", "string"],    
        "domains": "string"
}
- `DELETE`: Para deletar uma university a rota é DELETE   /universities/:id







