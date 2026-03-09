import Avatar from "@/components/ui/Avatar";
import Tag from "@/components/ui/Tag";

const presentation = {
  title: 'Fullstack JS/TS Engineer',
  fullname: 'Adam Emmanuel',
  status: 'available',
  skills: ['html/css', 'js', 'ts', 'react', 'node', 'next.js', 'nest.js', 'tailwind', 'prisma'],
  avatar: '/images/avatar.webp',
};

export default function BusinessCard() {
  const { title, fullname, status, skills, avatar } = presentation;
  return (
    <div className="flex flex-col w-full md:max-w-4/5 p-5 gap-6 shadow-basic shadow-base-shadow rounded-lg mb-4">
      <header className="flex justify-between">
        <Avatar src={avatar} />
        <Tag>{status}</Tag>
      </header>
      <div className="flex flex-col gap-1">
        <span className="text-lg font-semibold">{fullname}</span>
        <span className="text-sm">{title}</span>
      </div>
      <footer>
        <ul className="flex gap-2 flex-wrap">
          {skills.map((skill) => <li key={skill} className="uppercase text-sm tracking-normal border border-base-border bg-panel py-1 px-2 rounded">{skill}</li>)}
        </ul>
      </footer>
    </div>
  );
}

export { BusinessCard };