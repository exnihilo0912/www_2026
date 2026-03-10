interface PageTitleProps {
  children: React.ReactNode;
}
export default function PageTitle({ children }: PageTitleProps) {
  const afterStyle = 'after:absolute after:left-0 after:-bottom-3 after:h-1.5 after:w-10 after:bg-stone-300 after:rounded';
  const style = ['relative text-3xl font-bold tracking-tighter', afterStyle].join(' ');
  return <h1 className={style}>
    {children}
  </h1>;
}