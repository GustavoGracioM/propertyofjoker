const express = require('express');
const cors = require('cors');
const path = require('path'); 
const postRoutes = require('./src/routes/postRoutes');
 
const app = express(); 
const PORT = 3001;  
    
app.use(cors());
app.use(express.json());  
 

app.use('/uploads', express.static(path.join(__dirname, 'src', 'uploads')));

app.use('/', postRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 