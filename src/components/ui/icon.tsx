import * as LucideIcons from "lucide-react";

export default function Icon({name}: {name: string}){
    // Referencia todos os icones da biblioteca e retorna com o nome especificado
    const LucideIcon = (LucideIcons as any)[name];
    if(!LucideIcon) return <LucideIcons.Ban color="red" />
    return (
        <LucideIcon />
    )
}