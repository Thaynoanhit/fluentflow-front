"use client";
import {useState,useEffect} from "react";
import WordsList from "@/components/WordsList/WordsList";

export default function Palavras(){

    const palavras = [
        {word: "car", id: 1},
        {word: "bike", id: 2},
        {word: "orange", id: 3},
        {word: "pear", id: 4},
        {word: "lemon", id: 5},
        {word: "rooftop", id: 6},
        {word: "water", id: 7},
        {word: "monkey", id: 8},
        {word: "chair", id: 9},
        {word: "desk", id: 10},
        {word: "table", id: 11},
        {word: "glass", id: 12},
        {word: "window", id: 13},
        {word: "pillow", id: 14},
        {word: "book", id: 15}
    ]

    return (
        palavras && (
            <WordsList words={palavras}/>
        )
    );
}