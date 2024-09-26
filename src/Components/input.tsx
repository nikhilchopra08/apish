import React from 'react';

interface InputProps {
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>; // Specify the type for onChange
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  onChange,
  value,
  label,
  type = 'text', // Default type to 'text'
}) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        type={type}
        value={value}
        id={id}
        className="
          block
          rounded-md
          px-6
          pt-6
          pb-1
          w-full
          text-md
          text-white
          bg-neutral-700
          appearance-none
          focus:outline-none
          focus:ring-0
          peer
          border
          border-neutral-600
          focus:border-blue-500
          transition-all
          placeholder-transparent
          focus:bg-neutral-600
          disabled:bg-neutral-800
          disabled:cursor-not-allowed
        "
        placeholder=" "
      />
      <label
        className="
          absolute
          text-md
          ml-4
          text-zinc-400
          duration-150
          transform
          -translate-y-3
          scale-75
          top-4
          z-10
          origin-[0]
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
          peer-disabled:text-neutral-500
        "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
