import CategoryItem from "@/components/category-item";
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";;

// Buscando as categorias no backend
// Tornando a função async para utilizar o await
// O await espera a promise ser resolvida
async function getCategories(){
    // Guardar a resposta em uma variavel
    const response = await fetch("http://localhost:8080/categories") // A função fetch retorna uma promise
    return response.json()
}
 
export default async function CategoriesPage(){

    /*
    const data = [
        {
            "id": 1,
            "name": "Lazer",
            "icon": "Dices"
        },
        {
            "id": 2,
            "name": "Educação",
            "icon": "Book"
        },
        {
            "id": 3,
            "name": "Moradia",
            "icon": "Home"
        }
    ]
    */
   
    const data: Category[] = await getCategories()

    return(
        <>
            <NavBar active="categorias"/>

            <main className="flex justify-center">
                <div className="bg-slate-900 p-6 m-6 rounded min-w-1/3">
                    <div className="flex justify-between">

                        <h2 className="text-lg font-semibold">Categorias</h2>
                        <Button>
                            <Plus />
                            Nova categoria
                        </Button>
                        
                    </div>
                    {data.map(category => <CategoryItem key={category.id} category={category}/>)}    
                </div>

            </main>
        </>
    )
}