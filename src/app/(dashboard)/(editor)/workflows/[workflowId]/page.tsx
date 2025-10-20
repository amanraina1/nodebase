interface PageParams {
  params: Promise<{
    workflowId: String;
  }>;
}

const Page = async ({ params }: PageParams) => {
  const { workflowId } = await params;
  return <p>Workflow ID: {workflowId}</p>;
};
export default Page;
