import { Handle, Position } from "reactflow";
import type { CSSProperties } from "react";
import type { NodeProps } from "reactflow";
import type { AutomatedNodeData } from "../../types/workflow";

const nodeStyle: CSSProperties = {
  width: 160,
  height: 100,
  padding: 10,
  background: "#ff9800",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default function AutomatedNode({ data }: NodeProps<AutomatedNodeData>) {
  return (
    <div style={nodeStyle}>
      <Handle type="target" position={Position.Top} />

      <strong>{(data.label || "Automated").toUpperCase()}</strong>

      {data.action && <div>{data.action}</div>}

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}