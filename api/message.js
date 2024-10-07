require('dotenv').config();


const { GoogleGenerativeAI } = require('@google/generative-ai'); 

const GOOGLE_GEMINI_API_KEY = process.env.GOOGLE_GEMINI_API_KEY; 

const genAI = new GoogleGenerativeAI(GOOGLE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const gerarResposta = async (pergunta) => {
  const prompt = `Você é um especialista em Veganismo. Responda à seguinte pergunta de forma clara e concisa: ${pergunta}`;

  try {
    const result = await model.generateContent(prompt);

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
	console.error('Erro na requisição à API do Google Gemini:', error.message);
    console.error('Stack Trace:', error.stack);
    return "Erro ao tentar obter uma resposta.";
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    const resposta = await gerarResposta(message);
    res.status(200).json({ reply: resposta });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
