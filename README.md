# Backend para controle de site de uma banda genérica

## IMPORTANTE: Rotas com a tag A são necessárias passar o token Authorization no header, precedendo a tag Bearer, exemplo: "Authorization: Bearer <token>" sem <>

## IMPORTANTE: Atualmente para criar um usuário é necessário estar logado, então temporariamente para criar o primeiro usuário, é necessário comentar a linha 9 do arquivo /src/users/user.controller.ts, após criar o primeiro usuário, descomentar a linha
  
## Getting Started
  Necessário clonar este rep, dentro da pasta do mesmo rodar o comando npm install seguido de npm run start
  Também é possível executar com o dockerfile presente no rep
  
  Em ambos os casos é necessário ter um banco MySQL rodando, é necessário inserir as configurações do seu banco em um arquivo .env na raíz do projeto com as seguintes variáveis:
      TYPEORM_CONNECTION=mysql
      TYPEORM_HOST
      TYPEORM_PORT
      TYPEORM_USERNAME
      TYPEORM_PASSWORD
      TYPEORM_DATABASE

## Routes (baseURL: localhost:3333/api/v1/)

### Authentication (/login)
  #### Request:
    Informar username e password em um JSON
    { 
	    "username": "admindoseextra",
	    "password": "Aa1234@@"
    }
  
### Get User (/users/{id}) - A
  #### Request:
    Informar o ID do usuário na URL (opcional)

### Post User (/users/) - A
  #### Request:
    Informar name, user, password e level em um JSON:
    {
	    "username": "admindoseextra",
	    "name": "adm",
	    "password": "Aa1234@@",
	    "level":1
    }
  
### Get medias (/medias/{id}) 
  #### Request:
    Informar o ID da media na URL (opcional)

### Post medias (/medias) - A
  IMPORTANTE: O link passado é um ID da mídia presente no google Drive, extraído do link de compartilhamento da mídia, exemplo: 
  link: https://drive.google.com/file/d/1RGbJOtyWqn0Rl4zXfPMOrojzsCAUhIYX/view?usp=sharing
  link que deve ser passado no JSON: 1RGbJOtyWqn0Rl4zXfPMOrojzsCAUhIYX
  
  #### Request:
    Informar link e type em um JSON, exemplo: 
      {
	      "link":"1EY15AFVQup7oBytB0MGH4cpGCM_o5HhH",
	      "type":"photo"
      }
  
### Get medias (/medias/type/{type}) 
  #### Request:
    Informar o tipo da media na URL 
  
### Get events (/events)
  
### Delete events (/events/{id}) - A
  
### Put events (/events/{id}) - A
    Request: Informar JSON, exemplo:
    {
	    "title": "Live Tocando 2",
	    "desc": "Somente no YouTube as 21h",
	    "price": 2.00
    }
    
