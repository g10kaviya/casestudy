export default function Sidebar() {
  const onDragStart = (event: any, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div style={{ width: 250, padding: 10, background: "#111" }}>
      <div draggable onDragStart={(e) => onDragStart(e, "start")}>
        Start Node
      </div>
      <div draggable onDragStart={(e) => onDragStart(e, "task")}>
        Task Node
      </div>
      <div draggable onDragStart={(e) => onDragStart(e, "approval")}>
        Approval Node
      </div>
      <div draggable onDragStart={(e) => onDragStart(e, "automated")}>
        Automated Node
      </div>
      <div draggable onDragStart={(e) => onDragStart(e, "end")}>
        End Node
      </div>
    </div>
  );
}