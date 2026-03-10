interface SectionTitleProps {
  children: React.ReactNode;
}
export default function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className='text-xl md:text-2xl font-bold tracking-tight'>
    {children}
  </h2>;
}