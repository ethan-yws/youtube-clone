import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar"
import VideoScene from "./components/VideoScene";
import "./App.css";


function App() {
  return (
    <div className="App">
      {/* Header Bar */}
      <Header />

      <div className="app-page">
        {/* Side Bar */}
        <Sidebar />
        {/* Videos Section */}
        <VideoScene />
      </div>

    </div>
  );
}

export default App;
