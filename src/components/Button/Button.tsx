import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-xl bg-blue-600 py-3 text-white font-semibold shadow-lg transition hover:bg-blue-700 hover:scale-[1.02]"
    >
      {children}
    </button>
  );
}

export default Button;