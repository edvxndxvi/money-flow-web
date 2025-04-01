import { Book } from "lucide-react";
import CrudDropdown from './ui/crud-dropdown';
import Icon from "./ui/icon";

interface CategoryItemProps{
    category: Category
}

export default function CategoryItem({category}: CategoryItemProps){
    return(
        <div className="flex justify-between mt-2">
            <div className="flex gap-2">
                <Icon name={category.icon} />
                <span>{category.name}</span>
            </div>
            <div>
                <CrudDropdown />
            </div>
        </div>
    )  
}
            