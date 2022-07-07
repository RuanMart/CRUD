express = require("express"); // chama o express

const server = express(); // cria o servidor

const names = ["John", "Jane", "Mary"]; // array com os nomes

server.use(express.json()); // permite o envio de json

// retorna um nome
server.get("/nomes/:index", (req, res) => {
	const { index } = req.params; // pega o index do parametro

	return res.json(names[index]); // retorna os nomes
});

// retonar todos os nomes
server.get("/nomes", (req, res) => {
	return res.json(names); // retorna os nomes
});

// criar um novo nome
server.post("/nomes", (req, res) => {
	const { name } = req.body; // pega o nome do corpo da requisição

	names.push(name); // adiciona o nome ao array

	return res.json(names); // retorna os nomes
});

// atualizar um nome
server.put("/nomes/:index", (req, res) => {
	const { index } = req.params; // pega o index do parametro
	const { name } = req.body; // pega o nome do corpo da requisição

	names[index] = name; // atualiza o nome do array

	return res.json(names); // retorna os nomes
});

// deletar um nome
server.delete("/nomes/:index", (req, res) => {
	const { index } = req.params; // pega o index do parametro

	names.splice(index, 1); // deleta o nome do array

	return res.json({ message: "O nome foi deletado" }); // retorna os nomes
});

server.listen(3000); // escuta na porta 3000
