import Button from "./Button";
import Tag from "./Tag";


const presentation = {
  title: 'Fullstack JS Engineer',
  intro: 'I\'m a JS/TS FullStack Engineer',
  status: 'available',
  occupation: 'Looking for new opportunities',
};
export default function IntroCard() {
  // TODO remove text => fetch card data
  return (
    <div className="flex flex-col w-full max-w-[640] p-5 gap-6">
      <header className="flex justify-between items-center">
        <div>{presentation.title}</div>
        <Tag>{presentation.status}</Tag>
      </header>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Avatar Comp */}
        <div className="size-[120] md:size-[140] rounded-full bg-stone-200 md:order-last">
        </div>
        <div className=" flex flex-col gap-4 grow items-center md:items-start">
          <div className="text-[24px] md:text-[36px] font-semibold">Hey, I'm Adam</div>
          <p className="text-stone-600 text-center md:text-start">
            {presentation.intro}
            <br/>
            {presentation.occupation}
          </p>
          {/* Button Group */}
          <div className="flex gap-2">
            {/* Link Button */}
            <Button>Learn more</Button>
            {/* Anchor button (footer links ? contact page ?) */}
            <Button type="secondary">Contact me</Button>
          </div>
        </div>
      </div>
    </div>
  );
}