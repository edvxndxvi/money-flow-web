"use server";
import { redirect } from "next/navigation"

const API_URL = "http://localhost:8080/categories"

// Buscando as categorias no backend
// Tornando a função async para utilizar o await
// O await espera a promise ser resolvida
export async function getCategories(){
    // Guardar a resposta em uma variavel
    const response = await fetch(API_URL) // A função fetch retorna uma promise
    return response.json()
}

export async function createCategory(initialState: any, formData: FormData) {
    const data = {
        // passando os value dos inputs
        name: formData.get("name"),
        icon: formData.get("icon")
    }

    // Objeto com a configuração da requisição
    const options = {
        method: "POST",
        headers: { // Cabeçalho da requisição
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    // Passando só a URL, a requisição faz um GET
    fetch(API_URL, options)

    // Redirecionando para página categories
    redirect("/categories")
}