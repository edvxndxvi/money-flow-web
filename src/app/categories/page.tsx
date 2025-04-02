import NavBar from "@/components/navbar";
import CategoryItem from "@/components/category-item";

import { getCategories } from "@/actions/category-actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

 
export default async function CategoriesPage(){
  
    const data: Category[] = await getCategories()
    console.log(data);
    

    return(
        <>
            <NavBar active="categorias"/>

            <main className="flex justify-center">
                <div className="bg-slate-900 p-6 m-6 rounded min-w-1/3">
                    <div className="flex justify-between">

                        <h2 className="text-lg font-semibold">Categorias</h2>
                        
                        {/* asChild faz com que o botão compile com o link dentro dele */}
                        <Button asChild>
                            <Link href="/categories/form">
                                <Plus />
                                Nova categoria
                            </Link>
                        </Button>
                    </div>
                    {data.map(category => <CategoryItem key={category.id} category={category}/>)}    
                </div>

            </main>
        </>
    )
}