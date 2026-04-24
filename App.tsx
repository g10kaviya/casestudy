import { useState } from "react";
import Canvas from "./components/Canvas";
import Sidebar from "./components/Sidebar";
import NodeForm from "./components/NodeForm";

export default function App() {
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [updateNode, setUpdateNode] = useState<any>(null);
  const [deleteNode, setDeleteNode] = useState<any>(null);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Canvas */}
      <Canvas
        setSelectedNode={setSelectedNode}
        setUpdateNode={setUpdateNode}
        setDeleteNode={setDeleteNode}
      />

      {/* Node Form Panel */}
      <NodeForm node={selectedNode} updateNode={updateNode} deleteNode={deleteNode}/>
    </div>
  );
}