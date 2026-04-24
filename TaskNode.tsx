import { Handle, Position } from "reactflow";
import type { CSSProperties } from "react";
import type { NodeProps } from "reactflow";
import type { TaskNodeData } from "../../types/workflow";

const nodeStyle: CSSProperties = {
  width: 160,
  height: 100,
  padding: 10,
  background: "#1e2382",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default function TaskNode({ data }: NodeProps<TaskNodeData>) {
  return (
    <div style={nodeStyle}>
      <Handle type="target" position={Position.Top} />

      <strong>{(data.label || "Task").toUpperCase()}</strong>

      {data.assignee && <div>👤 {data.assignee}</div>}
      {data.dueDate && <div>📅 {data.dueDate}</div>}

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}