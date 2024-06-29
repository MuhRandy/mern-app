import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { cn } from "../../utils/cn";

type InputProps = {
  className: string;
  type: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string | number | readonly string[];
};

const Input = ({ className, type, onChange, value }: InputProps) => {
  return (
    <input
      className={cn(
        "block p-[10px] mb-5 w-full border-[#ddd] border-[1px] border-solid rounded box-border",
        className
      )}
      type={type}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
