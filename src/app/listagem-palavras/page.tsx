"use client";
import {useState,useEffect} from "react";
import WordsList from "@/components/WordsList/WordsList";
import styles from "@/app/listagem-palavras/listagem.module.css";

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
        {word: "desk", id: 10}
    ]

    return (
        <div className="word-list-container">
            <div className={styles.buttonDiv}>
                <button className={styles.returnButton}>Voltar para listas</button>
            </div>
            <h1 className={styles.title}>Selecione suas palavras</h1>
            {palavras && (
                <WordsList words={palavras}/>
            )}
        </div>
            
        
    );
}