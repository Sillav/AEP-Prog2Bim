import app from "./app";

function main() {
    try {
        app.listen(3001, "localhost", async () => {
            console.log("Servidor Iniciado")
        });
    } catch (erro) {
        console.error("Erro: "+erro);
    }
}

main()