export default function IntroCard() {
  // TODO remove text => fetch card data
  return (
    <div className="flex flex-col w-full max-w-[640] p-5 gap-6">
      <header className="flex justify-between items-center">
        <div>Fullstack Engineer</div>
        <div className="flex gap-1.5 items-center bg-stone-300 rounded-full pl-2 pr-3 h-[20] text-[12px] uppercase text-center font-semibold text-stone-700 tracking-wide">
          <i className="block size-1.5 rounded-full bg-stone-700"></i>
          Available
        </div>
      </header>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="size-[120] md:size-[140] rounded-full bg-stone-200 md:order-last">
        </div>
        <div className=" flex flex-col gap-4 grow items-center md:items-start">
          <div className="text-[24px] md:text-[36px] font-semibold">Hey, I'm Adam</div>
          <p className="text-stone-600 text-center md:text-start">
            I'm a JS/TS FullStack Engineer
            <br/>
            Looking for new opportunities
          </p>
          <div className="flex gap-2">
            <button className="bg-stone-900 text-white text-[14px] font-semibold p-2 rounded-[6]">Learn more</button>
            <button className="bg-white text-stone-800 text-[14px] font-semibold p-2 rounded-[6] border border-stone-100 shadow-basic shadow-base-shadow">Contact me</button>
          </div>
        </div>
      </div>
    </div>
  );
}