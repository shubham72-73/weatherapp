"use client";
import React from "react";
import {AiOutlineSearch} from "react-icons/ai"

interface InputProps {
  handleSearch: (event : React.KeyboardEvent<HTMLInputElement>) => void;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({handleSearch, setCity}: InputProps) => {
  return (
    <form className="flex items-center md:w-1/2 w-full">
        <input 
        className="w-full bg-transparent border-b-2 placeholder-white outline-none text-white m-3 px-2"
        type="text" 
        placeholder="Search City"
        onKeyDown={handleSearch} 
        onChange={(e)=>setCity(e.target.value)}/>
        <div className="ml-[-35px] text-white cursor-pointer">
            <AiOutlineSearch/>
        </div>
        
    </form>
  )
}

export default Input;