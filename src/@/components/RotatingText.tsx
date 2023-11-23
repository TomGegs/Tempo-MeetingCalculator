import { useState, useEffect } from 'react';

type RotatingTextProps = {
    words: string[];
};
const colors = [
    'text-purple-600',
    'text-blue-600',
    'text-red-600',
    'text-green-600',
    'text-gray-700',
];

export const RotatingText = ({ words }: RotatingTextProps) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [animateOut, setAnimateOut] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimateOut(true);
            setTimeout(() => {
                setCurrentWordIndex((currentWordIndex + 1) % words.length);
                setAnimateOut(false);
            }, 1000); // Duration of the 'out' animation
        }, 4000); // Change word every 4 seconds

        return () => clearInterval(intervalId);
    }, [currentWordIndex]);

    const splitWordIntoLetters = (word: string) => {
        return word.split('').map((letter, index) => {
            const animationDelay = `${index * 80}ms`;
            const animationClass = animateOut ? 'rotate-out' : 'rotate-in';
            return (
                <span
                    key={index}
                    className={`letter ${animationClass}`}
                    style={{ animationDelay }}
                >
                    {letter}
                </span>
            );
        });
    };

    const currentWord = words[currentWordIndex];
    const letters = splitWordIntoLetters(currentWord);
    const color = colors[currentWordIndex % colors.length];

    return (
        <div className="flex  items-center justify-center">
            <div className="text-center text-4xl font-semibold">
                <p className={`inline-flex ${color}`}>{letters}</p>
            </div>
        </div>
    );
};
