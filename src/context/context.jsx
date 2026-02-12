import { createContext,useState } from "react";

export const CarousselContext = createContext()


export const CarousselProvider = ({Children , lengh}) =>{
    const [index,setIndex]=useState(0)


   const next = () => {
    setIndex((next) => (next - 1 + length) % length);
}

const prev = () => {
    setIndex((prev) => (prev - 1 + length) % length);
  };
}
expo