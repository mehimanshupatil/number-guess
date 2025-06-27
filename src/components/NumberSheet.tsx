import React from 'react';
import { Check, X, ChevronRight } from 'lucide-react';
import { Sheet } from '../types/game';

interface NumberSheetProps {
  sheet: Sheet;
  currentSheet: number;
  totalSheets: number;
  onAnswer: (answer: boolean) => void;
}

export const NumberSheet: React.FC<NumberSheetProps> = ({
  sheet,
  currentSheet,
  totalSheets,
  onAnswer,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 transition-colors duration-500">
      <div className="max-w-4xl w-full">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Sheet {currentSheet} of {totalSheets}
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {Math.round((currentSheet / totalSheets) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentSheet / totalSheets) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            {sheet.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
            Is your number on this sheet?
          </p>

          {/* Numbers grid - Optimized for mobile */}
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-14 gap-2 sm:gap-3 mb-6 max-h-80 overflow-y-auto p-2">
            {sheet.numbers.map((number) => (
              <div
                key={number}
                className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-lg p-2 sm:p-3 text-center font-semibold text-sm sm:text-base text-gray-800 dark:text-gray-200 border border-blue-200/50 dark:border-blue-700/50 hover:scale-105 transition-transform duration-200 min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center"
              >
                {number}
              </div>
            ))}
          </div>

          {/* Answer buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => onAnswer(true)}
              className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold text-base sm:text-lg"
            >
              <Check className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Yes, it's here!</span>
            </button>
            
            <button
              onClick={() => onAnswer(false)}
              className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 font-semibold text-base sm:text-lg"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>No, not here</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};