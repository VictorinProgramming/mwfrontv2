import axios from "axios";

const apiKey = '';  // Substitua com sua chave de API
const baseUrl = '';  // URL base da API do Kanban
const boardId = '';  // ID do quadro específico

// Função para criar um novo cartão no quadro
async function createCard(title, description, columnId) {
    const endpoint = `/boards/${boardId}/cards`;
    const url = baseUrl + endpoint;

    // Dados do novo cartão (payload)
    const data = {
        title: title,
        description: description,
        column_id: columnId
    };

    // Configurações da requisição
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    try {
        // Faz a requisição POST para criar o cartão
        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            throw new Error(`Erro ao criar cartão: ${response.status} - ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log('Cartão criado com sucesso:', responseData);

    } catch (error) {
        console.error('Erro ao criar cartão:', error);
    }
}

// Exemplo de uso da função createCard
createCard('Novo Cartão', 'Descrição do novo cartão', 'COLUMN_ID');
