# Desenvolvimento Web
### Repositório criado para a disciplina de Desenvolvimento Web.

#

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

Primeiramente acesse a pasta do backend:

```bash
cd TrabalhoWEB-Backend
```

Instale as dependências com o npm:

```bash
npm i
```

Após isso execute:

```bash
docker-compose up -d
```
```bash
npx prisma db push
```

E finalmente... Para iniciar o servidor, execute o seguinte comando:

```bash
npm run dev
```

---

## Passos para rodar o Frontend

Em outro terminal abra a pasta do frontend:

```bash
cd TrabalhoWEB-Frontend/points-frontend
```

Instale as dependências com o npm:

```bash
npm i
```

e para iniciar o frontend, execute o seguinte comando:

```bash
npm start
```
