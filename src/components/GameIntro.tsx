import React from 'react';
import { Brain, Play } from 'lucide-react';

interface GameIntroProps {
  onStart: () => void;
}

export const GameIntro: React.FC<GameIntroProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-500">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
          <Brain className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Mind Reader Game
        </h1>
        
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">How to Play</h2>
          
          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-sm flex items-center justify-center font-semibold mt-0.5">1</div>
              <p className="text-gray-700 dark:text-gray-300">Think of a number between <strong>1 and 100</strong></p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-purple-500 text-white text-sm flex items-center justify-center font-semibold mt-0.5">2</div>
              <p className="text-gray-700 dark:text-gray-300">I'll show you <strong>7 sheets</strong> with different numbers</p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-pink-500 text-white text-sm flex items-center justify-center font-semibold mt-0.5">3</div>
              <p className="text-gray-700 dark:text-gray-300">For each sheet, answer <strong>"Yes"</strong> if your number is there, <strong>"No"</strong> if it's not</p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-green-500 text-white text-sm flex items-center justify-center font-semibold mt-0.5">4</div>
              <p className="text-gray-700 dark:text-gray-300">I'll <strong>guess</strong> your number!</p>
            </div>
          </div>
        </div>
        
        <button
          onClick={onStart}
          className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold text-lg"
        >
          <Play className="w-5 h-5" />
          <span>Start Game</span>
        </button>
      </div>
    </div>
  );
};