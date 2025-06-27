import React from 'react';
import { Sparkles, RotateCcw } from 'lucide-react';

interface GameResultProps {
  guessedNumber: number;
  onRestart: () => void;
}

export const GameResult: React.FC<GameResultProps> = ({ guessedNumber, onRestart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-500">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg animate-pulse">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          🎉 Amazing! 🎉
        </h1>
        
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Your number is...
          </h2>
          
          <div className="relative">
            <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-bounce">
              {guessedNumber}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-3xl rounded-full transform scale-150"></div>
          </div>
        </div>
        
        <button
          onClick={onRestart}
          className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold text-lg"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Play Again</span>
        </button>
      </div>
    </div>
  );
};