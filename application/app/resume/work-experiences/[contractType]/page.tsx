export default async function WorkExperiencesByContractTypePage(props: { params: Promise<{ contractType: string }>}) {
  const { contractType } = await props.params;

  return (
    <div className="w-full bg-panel rounded-xl border border-panel p-3">
      Resume - Work Experiences - {contractType}
    </div>
  );
}
