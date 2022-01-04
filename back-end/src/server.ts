import express from 'express';

const app = express();

app.get("/", (request, response) => {
    response.json({ message: "Hello World" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`rodando na pota ${port}`)
})