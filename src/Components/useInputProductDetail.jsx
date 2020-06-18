import { useState } from "react";

export const useInputProductDetail =() =>{
    const [value,setValue] = useState();
 
     function changeImage(e){
         setValue(img);
     }
 
    return [value,changeImage];
 }