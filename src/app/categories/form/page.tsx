"use client";
import NavBar from "@/components/navbar";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { createCategory } from "@/actions/category-actions";
import { useActionState } from "react";

const initialState = {
    values: {
        name: "",
        icon: ""
    }
}

export default function CategoryFormPage(){
    // todo o controle do estado estará nessa variável
    // O pending travará o estado do form para não gerar várias requisições ao clicar multiplas vezes em enviar
    const [state, formAction, peding] = useActionState(createCategory, initialState)

    return(
        <>
            <NavBar active="categorias"/>

            <main className="flex justify-center">
                <div className="bg-slate-900 p-6 m-6 rounded min-w-1/3">
                    <h2 className="mb-5">Cadastrar Categoria</h2>

                    <form action={formAction} className="flex flex-col gap-4">
                        <Input name="name" placeholder="Nome"/>
                        <Input name="icon" placeholder="Ícone"/>

                        <div className="flex gap-4">
                            <Button variant="outline" asChild>
                                <Link href="/categories">
                                    Cancelar
                                </Link>
                            </Button>
                            <Button>Salvar</Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}