function Footer() {
  return (
    <footer className="w-full h-48 p-3 bg-panel rounded-[12] border border-panel">
      <div>Footer</div>
    </footer>
  );
}

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-fit items-center p-2 gap-2 mt-[80] md:mt-[96] mb-[48] w-96/100 md:w-45/100 bg-base shadow-basic shadow-base-shadow rounded-[16] text-[18px]">
      {children}
      <Footer />
    </div>
  );
}
