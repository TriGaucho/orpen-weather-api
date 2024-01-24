# Orpen Weather API

Api de consulta do clima, via Open Weather.

## Arquitetura

*Orpen Weather API* consulta o clima atual na *Open Weather API* e salva o retorno, junto da requisição, em um banco de dados hospedado na *Mongo Atlas*.

*Orpen Weather API* também fornece endpoint de cadastro de webhooks, para interessados em serem notificados quando alguma cidade tiver o clima consultado.

#### Links

* **Open Weather API**: <https://openweathermap.org/current>
* **Mongo Atlas**: <https://www.mongodb.com/pt-br/atlas>

### Tecnologias

* **NodeJS** com Express e Typescript.
* **MongoDB** banco de dados.
* **Mongoose** para conexão o MongoDB.
* **Axios** como cliente HTTP.
* **winston** para geração de logs.
* **date-fns** para trabalhar com datas Javascript.
* **@babel/*** para trasnpilação e build

## Rodar o projeto no Docker

Via CMD, executar o comando no diretorio raiz do projeto:

~~~bash
docker-compose up
~~~

## Rodar o projeto Local

1. Criar o arquivo **.env** com os seguintes valores:

      DATABASE_URL="mongodb+srv://diogo254:<kInjCdD7rcLiy7FM@cluster0.rxzkzzr.mongodb.net>/cluster0?retryWrites=true&w=majority"

      KEY_WEATHER=d81e162ef8df5d5b622c6337b2e82a74

2. Instalar as dependências:

  ```bash
    npm install
  ```

3. Executar com:

  ```bash
    npm run dev
  ```

---

## Rotas e parametros

*Orpen Weather API* roda na porta 3001, tanto via docker quanto local. Certifique-se de ter essa porta disponivel.

### Endpoints

* **get - localhost:3001/weather:** consulta o clima de uma cidade e envia dados consultados aos webhooks cadastrados.
* **get - localhost:3001/history:** historico de consultas do clima.
* **post - localhost:3001/webhook:** cadastra um webhook para receber notificação de quando o clima de uma cidade for consultado.

### Rota /weather

Param Query   | Tipe | Tamanho | Obrigatório
--------- | :------: | -------: | :------:
city | string | livre | sim
country | string | 2 | sim
---

### Rota /webhook

Param Query | Tipe | Tamanho | Obrigatório
--------- | :------: | -------: | :------:
city | string | livre | sim
country | string | 2 | sim
webhookURL | string | livre | sim

### Exemplo Collection

Você pode encontrar um exemplo de collection no direório: *collection\Orpen Weather API.postman_collection.json*
