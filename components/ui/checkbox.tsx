import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const inputId = id ?? `checkbox-${Math.random().toString(36).slice(2)}`;
    return (
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={inputId}
          ref={ref}
          className={cn(
            "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500",
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700 cursor-pointer select-none"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
