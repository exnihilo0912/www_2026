import Avatar from "./Avatar";
import Tag from "./Tag";


const presentation = {
  title: 'Fullstack JS/TS Engineer',
  fullname: 'Adam Emmanuel',
  status: 'available',
  occupation: 'Looking for new opportunities',
  skills: ['html5', 'css3', 'js', 'ts', 'react', 'node', 'next.js', 'nest.js'],
};

export default function BusinessCard() {
  // TODO remove text => fetch card data
  return (
    <div className="flex flex-col w-full md:max-w-4/5 p-5 gap-6 shadow-basic shadow-base-shadow rounded-lg mb-4">
      <header className="flex justify-between items-center">
        <Avatar />
        <Tag>{presentation.status}</Tag>
      </header>
      <div className="flex flex-col gap-1">
        <span className="text-lg font-semibold">{presentation.fullname}</span>
        <span className="text-sm">{presentation.title}</span>
      </div>
      <footer>
        <ul className="flex gap-2 flex-wrap">
          {presentation.skills.map((skill) => <li key={skill} className="uppercase text-sm tracking-normal border border-base-border bg-panel py-1 px-2 rounded-full">{skill}</li>)}
        </ul>
      </footer>
    </div>
  );
}