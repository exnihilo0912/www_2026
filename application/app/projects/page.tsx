import EmptyPage from "@/components/ui/EmptyPage";
import PageTitle from "@/components/ui/PageTitle";

export default async function Projects() {
  return (
    <section className="flex flex-col gap-8">
      <PageTitle>Projects</PageTitle>
      <EmptyPage />
    </section>
  );
}