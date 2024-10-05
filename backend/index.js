const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai'); 

const app = express();
app.use(cors());
app.use(express.json());


const GOOGLE_GEMINI_API_KEY = 'AIzaSyDD7-owsuybP_M2JIH187z14dz6IifUG0I'; 


const genAI = new GoogleGenerativeAI(GOOGLE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });


const gerarResposta = async (pergunta) => {
  const prompt = `Você é um especialista em Veganismo. Responda à seguinte pergunta de forma clara e concisa: ${pergunta}`;

  try {
   
    const result = await model.generateContent(prompt);

    console.log('Resposta da API: ', result.response.text()); 

    
    if (result && result.response && result.response.text) {
		const respostaLimpa = result.response.text()
		.replace(/(\*\*?)/g, '') 
        .replace(/#/g, '') 
        .replace(/([.?!])\s*(?=[A-Z])/g, '$1\n\n') 
        .replace(/(\n{2,})/g, '\n\n'); 

      return respostaLimpa.trim(); 
    } else {
      return "Desculpe, não consegui encontrar uma resposta para isso.";
    }
  } catch (error) {
    console.error('Erro na requisição à API do Google Gemini:', error);
    return "Erro ao tentar obter uma resposta.";
  }
};


app.post('/api/message', async (req, res) => {
  const { message } = req.body;

  
  const resposta = await gerarResposta(message);
  res.json({ reply: resposta });
});


app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo ao FAQ sobre Veganismo!</h1>'); 
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
