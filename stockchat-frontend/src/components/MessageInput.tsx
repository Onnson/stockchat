import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from 'framer-motion';
import { cn } from '@/util/utils';
import ApiClient from '@/util/api';

interface MessageInputProps {
  message: string;
  setMessage: (message: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function MessageInput({ message, setMessage, onSubmit }: MessageInputProps) {
  const [partialQuery, setPartialQuery] = useState<Record<string, string>>({});
  const [questions, setQuestions] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isProcessing) return;
    setIsProcessing(true);

    try {
      const result = await ApiClient.clarifyQuery(message, partialQuery);
      
      if (!result.isComplete) {
        setQuestions(result.questions);
        setPartialQuery(result.partialQuery);
        // Parent component can handle showing questions and collecting responses
        onSubmit(e);
      } else {
        // If complete, proceed with the original submit handler
        setQuestions([]);
        onSubmit(e);
      }
    } catch (err) {
      console.error('Error clarifying query:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="flex space-x-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Input
        type="text"
        value={message}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
        placeholder="Ask about any stock or market trend..."
        className={cn(
          "flex-1",
          "bg-white/50 dark:bg-gray-700/50",
          "border-gray-200 dark:border-gray-600",
          "focus:ring-2 focus:ring-primary/50",
          "text-gray-900 dark:text-white",
          "placeholder:text-gray-500 dark:placeholder:text-gray-400",
          "transition-colors duration-200"
        )}
        disabled={isProcessing}
      />
      <Button 
        type="submit" 
        className="flex items-center space-x-2 hover:scale-105 transition-transform"
        disabled={isProcessing}
      >
        <span className="hidden md:inline">Send</span>
        <Send className="h-4 w-4" />
      </Button>
      {questions.length > 0 && (
        <div className="mt-2">
          {questions.map((q, idx) => (
            <p key={idx} className="text-sm text-gray-600 dark:text-gray-400">{q}</p>
          ))}
        </div>
      )}
    </motion.form>
  );
} 