type ButtonType = 'primary' | 'secondary';
interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
}

const classesByType: Record<ButtonType, string> = {
  'primary': 'bg-stone-900 text-white',
  'secondary': 'bg-white text-stone-800 border border-stone-100 shadow-basic shadow-base-shadow',
}

export default function Button({ children, type = 'primary' }: ButtonProps) {
  const buttonTypeClasses = classesByType[type] || classesByType['primary'];
  return (
    <button className={["text-sm font-semibold p-2 rounded-md", buttonTypeClasses].join(' ')}>
      {children}
    </button>
  );
}