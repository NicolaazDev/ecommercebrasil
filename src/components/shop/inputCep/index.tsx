"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useMask } from "@react-input/mask";
import { z } from "zod";

interface InputCepProps {
  buttonText: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
}

const cepSchema = z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido");

export default function InputCep({
  buttonText,
  placeholder,
  onChange,
  value,
  error,
  ...props
}: InputCepProps & Omit<React.HTMLProps<HTMLDivElement>, "ref">) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputRef = useMask({
    mask: "_____-___",
    replacement: { _: /\d/ },
  });

  return (
    <div
      className="flex w-full min-w-full h-[60px] max-w-sm items-center space-x-2"
      {...props}
    >
      <div className="w-full h-full">
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="outline-none focus-visible:ring-0 h-full"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
      <Button type="submit" onClick={handleSubmit} className="h-full">
        {buttonText}
      </Button>
    </div>
  );
}
