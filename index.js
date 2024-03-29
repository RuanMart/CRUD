import express from "express";

const server = express();

const nomes = ["Lucas", "Marcos", "Maria"];

// retorna um só nome

server.get("/nomes/index", (req, res) => {
	const { index } = req.params;

	return res.json(nomes[index]);
});

// retorna todos os nomes

server.get("/nomes/index", (req, res) => {
	return res.json(nomes);
});

// cria um novo nome

nomes.post("/nomes/index", (req, res) => {
	const { name } = req.body;

	cursos.push(name);

	return res.json(nomes);
});

// atualiza um nome

server.put("/nomes/index", (req, res) => {
	const { index } = req.params;

	const { name } = req.body;

	curos[index] = name;

	return res.json(nomes);
});

// deleta um nome

server.delete("/nomes/index", (req, res) => {
	const { index } = req.params;

	nomes.splice(index, 1);

	return res.json({ message: "o nome foi deletado" });
});

server.listen(3000);
