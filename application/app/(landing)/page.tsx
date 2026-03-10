import PageTitle from "@/components/ui/PageTitle";

// TODO move in "presentationService.ts"
interface Activity {
  id: string;
  title: string;
  icon: string;
  content: string;
}
const activities: Activity[] = [
  {
    id: 'web-dev-frontend',
    icon: 'paint',
    title: 'Frontend Web development',
    content: 'High-quality development of sites at the professional level.',
  },
  {
    id: 'web-dev-backend',
    icon: 'website',
    title: 'Backend Web development',
    content: 'High-quality development of sites at the professional level.',
  },
  {
    id: 'data-engineering',
    icon: 'spider',
    title: 'Web crawling',
    content: 'High-quality development of sites at the professional level.',
  },
  {
    id: 'dev-teaching',
    icon: 'code',
    title: 'Teaching & Mentoring',
    content: 'High-quality development of sites at the professional level.',
  }
];

export default async function Home() {
  return (
    <section className="flex flex-col gap-8">
      <PageTitle>About Me</PageTitle>
      <div className="flex flex-col gap-4">
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>
        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
        </p>
      </div>
      {/* Add Section comp, with h2-title */}
      <section>
        <h2 className="text-2xl font-bold mb-3">What I&apos;m Doing</h2>
        <ul className="flex flex-col gap-3 md:flex-row md:flex-wrap w-full">
          {activities.map((activity) => <li key={activity.id} className="md:w-[45%] grow">
            {/* TODO align rounded value across app */}
            <article className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 border border-stone-300 rounded-xl p-3 md:p-5">
              <header>
                <div className="size-10 bg-stone-200 rounded-lg"></div>
              </header>
              <div className="flex flex-col gap-1 items-center md:items-start">
                <div className="text-lg font-semibold">{activity.title}</div>
                <p className="text-center md:text-left text-stone-600">{activity.content}</p>
              </div>
            </article>
          </li>)}
        </ul>
      </section>
    </section>
  );
}