import { useState } from "react";
import { addEdge, useNodesState, useEdgesState } from "reactflow";
import type { NodeData } from "../types/workflow";
import type { Connection } from "reactflow";

export const useWorkflow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeData>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const [logs, setLogs] = useState<any[]>([]);

  // ✅ connect
  const onConnect = (params: Connection) =>
    setEdges((eds) => addEdge(params, eds));

  // ✅ add node
  const addNode = (node: any) => {
    setNodes((nds) => [...nds, node]);
  };

  // ✅ update node
  const updateNode = (id: string, newData: Partial<NodeData>) => {
  setNodes((nds) =>
    nds.map((node) => {
      if (node.id !== id) return node;

      switch (node.data.type) {
        case "task":
          return {
            ...node,
            data: {
              ...node.data,
              ...(newData as Partial<typeof node.data>),
              type: "task",
            },
          };

        case "approval":
          return {
            ...node,
            data: {
              ...node.data,
              ...(newData as Partial<typeof node.data>),
              type: "approval",
            },
          };

        case "automated":
          return {
            ...node,
            data: {
              ...node.data,
              ...(newData as Partial<typeof node.data>),
              type: "automated",
            },
          };

        case "start":
          return {
            ...node,
            data: {
              ...node.data,
              type: "start",
            },
          };

        case "end":
          return {
            ...node,
            data: {
              ...node.data,
              type: "end",
            },
          };

        default:
          return node;
      }
    })
  );
};

  // ✅ delete node
  const deleteNode = (id: string) => {
    setNodes((nds) => nds.filter((n) => n.id !== id));
    setEdges((eds) =>
      eds.filter((e) => e.source !== id && e.target !== id)
    );
  };

  // ✅ validation
  const validateFlow = () => {
    const startNodes = nodes.filter((n) => n.type === "start");
    const endNodes = nodes.filter((n) => n.type === "end");

    if (startNodes.length !== 1) {
      alert("There must be exactly ONE Start node");
      return false;
    }

    if (endNodes.length === 0) {
      alert("At least one End node required");
      return false;
    }

    return true;
  };

  // ✅ simulation
  const runSimulation = async (simulateFn: any) => {
    const result = await simulateFn({ nodes, edges });
    setLogs(result.steps);
  };

  return {
    nodes,
    edges,
    logs,
    onNodesChange,
    onEdgesChange,
    onConnect,
    addNode,
    updateNode,
    deleteNode,
    validateFlow,
    runSimulation,
  };
};