import { Handle, Position } from "reactflow";
import type { CSSProperties } from "react";
import type { NodeProps } from "reactflow";
import type { ApprovalNodeData } from "../../types/workflow";

const nodeStyle: CSSProperties = {
  width: 160,
  height: 100,
  padding: 10,
  background: "#af4c58",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default function ApprovalNode({ data }: NodeProps<ApprovalNodeData>) {
  return (
    <div style={nodeStyle}>
      <Handle type="target" position={Position.Top} />

      <strong>{(data.label || "Approval").toUpperCase()}</strong>

      {data.role && <div>Role: {data.role}</div>}

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}