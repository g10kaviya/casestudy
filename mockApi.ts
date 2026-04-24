export const getAutomations = () => {
  return Promise.resolve([
    {
      id: "send_email",
      label: "Send Email",
      params: ["to", "subject"],
    },
    {
      id: "generate_doc",
      label: "Generate Document",
      params: ["template", "recipient"],
    },
  ]);
};

export const simulateWorkflow = (workflow: any) => {
  return Promise.resolve({
    steps: workflow.nodes.map((node: any, index: number) => ({
      step: index + 1,
      action: node.data.label,
      status: "success",
    })),
  });
};