import { useState } from "react";

export const useInputProductDetail =() =>{
    const [value,setValue] = useState();
 
     function handlerChange(e){
         setValue(e.target.value);
     }
 
    return [value,handlerChange];
 }