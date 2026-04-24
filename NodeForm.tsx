export default function NodeForm({ node, updateNode, deleteNode }: any) {
  if (!node) return <div style={{ width: 250 }}>Select a node</div>;

  return (
    <div style={{ width: 250, padding: 10, background: "#222", color: "white" }}>
      <h3>Edit Node</h3>

      {/* LABEL */}
      <input
        value={node.data.label || ""}
        onChange={(e) =>
          updateNode(node.id, { label: e.target.value })
        }
        placeholder="Label"
        style={{ width: "100%", marginBottom: 10 }}
      />

      {/* TASK NODE */}
      {node.type === "task" && (
        <>
          <input
            value={node.data.assignee || ""}
            onChange={(e) =>
              updateNode(node.id, { assignee: e.target.value })
            }
            placeholder="Assignee"
            style={{ width: "100%", marginBottom: 10 }}
          />

          <input
            type="date"
            value={node.data.dueDate || ""}
            onChange={(e) =>
              updateNode(node.id, { dueDate: e.target.value })
            }
            style={{ width: "100%", marginBottom: 10 }}
          />
        </>
      )}

      {/* APPROVAL NODE */}
      {node.type === "approval" && (
        <select
          value={node.data.role || ""}
          onChange={(e) =>
            updateNode(node.id, { role: e.target.value })
          }
          style={{ width: "100%", marginBottom: 10 }}
        >
          <option value="">Select Role</option>
          <option value="Manager">Manager</option>
          <option value="HR">HR</option>
          <option value="Director">Director</option>
        </select>
      )}

      {/* AUTOMATED NODE */}
      {node.type === "automated" && (
        <input
          value={node.data.action || ""}
          onChange={(e) =>
            updateNode(node.id, { action: e.target.value })
          }
          placeholder="Action"
          style={{ width: "100%", marginBottom: 10 }}
        />
      )}

      {/* END NODE */}
      {node.type === "end" && (
        <input
          value={node.data.message || ""}
          onChange={(e) =>
            updateNode(node.id, { message: e.target.value })
          }
          placeholder="Message"
          style={{ width: "100%", marginBottom: 10 }}
        />
      )}

      {/* DELETE BUTTON */}
      <button
        onClick={() => deleteNode(node.id)}
        style={{
          marginTop: 10,
          background: "red",
          color: "white",
          border: "none",
          padding: "8px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Delete Node
      </button>
    </div>
  );
}