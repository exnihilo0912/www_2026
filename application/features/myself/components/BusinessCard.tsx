import Avatar from "@/components/ui/Avatar";
import Tag from "@/components/ui/Tag";

const presentation = {
  title: 'Fullstack TS/React',
  fullname: 'Adam Emmanuel',
  status: 'available',
  skills: ['html/css', 'js', 'ts', 'react', 'node', 'next.js', 'tailwind'],
  avatar: '/images/avatar.webp',
};

export default function BusinessCard() {
  const { title, fullname, status, skills, avatar } = presentation;
  return (
    <div className="flex md:flex-col items-center w-full md:w-auto p-4 md:p-5 gap-4 md:gap-6 shadow-basic shadow-base-shadow rounded-2xl bg-base shrink-0 border border-stone-200">
      <Avatar src={avatar} />
      <div className="flex flex-col md:items-center gap-1">
        <span className="text-xl md:text-2xl font-semibold">{fullname}</span>
        <span className="text-sm">{title}</span>
      </div>
      {/* <div>
        <Tag>{status}</Tag>
      </div> */}
      {/* <footer>
        <ul className="flex gap-2 flex-wrap">
          {skills.map((skill) => <li key={skill} className="uppercase text-sm tracking-normal border border-base-border bg-panel py-1 px-2 rounded">{skill}</li>)}
        </ul>
      </footer> */}
      {/* TODO add state */}
      <ul className="hidden md:visible p-0 m-0 w-full md:flex md:flex-col md:gap-4">
        <li>
          <div className="flex gap-2 items-center">
            <div className="size-7 bg-stone-200 rounded"></div>
            <div>
              <div className="uppercase font-semibold text-sm text-stone-500 tracking-">email</div>
              <div className="text-sm">adam.emmanuel.pro@gmail.com</div>
            </div>
          </div>
        </li>
        <li>
          <div className="flex gap-2 items-center">
            <div className="size-7 bg-stone-200 rounded"></div>
            <div>
              <div className="uppercase font-semibold text-sm text-stone-500 tracking-">birthday</div>
              <div className="text-sm">August 9th, 1992</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export { BusinessCard };