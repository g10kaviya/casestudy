export type NodeType =
  | "start"
  | "task"
  | "approval"
  | "automated"
  | "end";

// 🔹 Base
type BaseNodeData = {
  label: string;
};

// 🔹 Specific node types
export type TaskNodeData = BaseNodeData & {
  type: "task";
  assignee: string;
  dueDate?: string;
};

export type ApprovalNodeData = BaseNodeData & {
  type: "approval";
  role: string;
};

export type AutomatedNodeData = BaseNodeData & {
  type: "automated";
  action: string;
};

export type StartNodeData = BaseNodeData & {
  type: "start";
};

export type EndNodeData = {
  type: "end";
  label: string;
  message?: string; // ✅ ADD THIS
};

// 🔹 Union type
export type NodeData =
  | TaskNodeData
  | ApprovalNodeData
  | AutomatedNodeData
  | StartNodeData
  | EndNodeData;