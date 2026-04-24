import { Handle, Position } from "reactflow";
import type { CSSProperties } from "react";
import type { NodeProps } from "reactflow";
import type { StartNodeData } from "../../types/workflow";

const nodeStyle: CSSProperties = {
  width: 160,
  height: 100,
  padding: 10,
  background: "#2e7d32",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function StartNode({ data }: NodeProps<StartNodeData>) {
  return (
    <div style={nodeStyle}>
      <Handle type="source" position={Position.Bottom} />
      <strong>{(data.label || "Start").toUpperCase()}</strong>
    </div>
  );
}