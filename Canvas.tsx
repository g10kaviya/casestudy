import ReactFlow, {
  Background,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";

import { useWorkflow } from "../hooks/useWorkflow";
import { simulateWorkflow } from "../api/mockApi";

import StartNode from "./nodes/StartNode";
import TaskNode from "./nodes/TaskNode";
import ApprovalNode from "./nodes/ApprovalNode";
import AutomatedNode from "./nodes/AutomatedNode";
import EndNode from "./nodes/EndNode";

const nodeTypes = {
  start: StartNode,
  task: TaskNode,
  approval: ApprovalNode,
  automated: AutomatedNode,
  end: EndNode,
};

export default function Canvas({ setSelectedNode }: any) {
  const {
    nodes,
    edges,
    logs,
    onNodesChange,
    onEdgesChange,
    onConnect,
    addNode,
    validateFlow,
    runSimulation,
  } = useWorkflow();

  const onDrop = (event: any) => {
    event.preventDefault();

    const type = event.dataTransfer.getData("application/reactflow");
    const bounds = event.currentTarget.getBoundingClientRect();

    const newNode = {
      id: Date.now().toString(),
      type,
      position: {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      },
      data: {
        label: type,
        type,
      },
    };

    addNode(newNode);
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      
      {/* Simulate */}
      <button
        onClick={() => {
          if (validateFlow()) {
            runSimulation(simulateWorkflow);
          }
        }}
        style={{ position: "absolute", top: 10, right: 80 }}
      >
        Simulate
      </button>

      {/* Canvas */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        onNodeClick={(_, node) => setSelectedNode(node)}
      >
        <Background />
        <Controls />
      </ReactFlow>

      {/* Logs */}
      {logs.length > 0 && (
        <div style={{ position: "absolute", bottom: 10, right: 10 }}>
          {logs.map((l, i) => (
            <div key={i}>{l.action}</div>
          ))}
        </div>
      )}
    </div>
  );
}