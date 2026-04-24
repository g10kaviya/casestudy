import { Handle, Position } from "reactflow";
import type { CSSProperties } from "react";
import type { NodeProps } from "reactflow";
import type { EndNodeData } from "../../types/workflow";

const nodeStyle: CSSProperties = {
  width: 160,
  height: 100,
  padding: 10,
  background: "#424242",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function EndNode({ data }: NodeProps<EndNodeData>) {
  return (
    <div style={nodeStyle}>
      <Handle type="target" position={Position.Top} />

      <strong>{(data.label || "End").toUpperCase()}</strong>

      {data.message && <div>{data.message}</div>}
    </div>
  );
}