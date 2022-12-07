# Trabalho-de-Web

## Requerimentos

* Node 14.17 (ou superior)
* Docker
* Postman

---

## Configuração Geral

Clone o repositório e instale as dependêcias

```bash
git clone https://github.com/elisionara/Trabalho-de-Web.git
cd Trabalho-de-Web
```

---

## Passos para rodar o Backend

primeiramente acesse a pasta do backend:

```bash
cd TrabalhoWEB-Backend
```

agora intale as dependências com o npm:

```bash
npm i
```

apos isso execute:

```bash
docker-compose up -d
```
```bash
npx prisma db push
```

e finalmente... Para iniciar o servidor, execute o seguinte comando:

```bash
npm run dev
```

---

## Passos para rodar o Frontend

em outro terminal abra a pasta do frontend:

```bash
cd TrabalhoWEB-Backend/points-frontend
```

agora intale as dependências com o npm:

```bash
npm i
```

e para iniciar o frontend, execute o seguinte comando:

```bash
npm start
```
