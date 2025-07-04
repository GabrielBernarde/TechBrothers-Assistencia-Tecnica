const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000; 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    
    const correctUsername = 'Gabriel';
    const correctPassword = 'Contratado';

    if (username === correctUsername && password === correctPassword) {
       
        res.redirect('/products');
    } else {
        
        res.redirect('/login.html?error=invalid');
    }
});


app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'products.html'));
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Página de login: http://localhost:${PORT}/login.html`);
});