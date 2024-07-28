import React, { useState, useEffect } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface ToggleGroupProps {
  type?: "single";
  variant?: "default" | "outline";
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

const CustomToggleGroup = ({
  children,
  variant,
  defaultValue,
  onValueChange,
  className,
}: ToggleGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    if (defaultValue && !selectedValue) {
      setSelectedValue(defaultValue);
    }
  }, [defaultValue, selectedValue]);

  const handleValueChange = (value: string) => {
    if (value) {
      setSelectedValue(value);
      if (onValueChange) {
        onValueChange(value);
      }
    }
  };

  return (
    <ToggleGroup
      type="single"
      variant={variant}
      defaultValue={defaultValue}
      value={selectedValue}
      onValueChange={handleValueChange}
      className={className}
    >
      {children}
    </ToggleGroup>
  );
};

CustomToggleGroup.Item = ({ children, ...props }: any) => (
  <ToggleGroupItem {...props}>{children}</ToggleGroupItem>
);

export default CustomToggleGroup;
