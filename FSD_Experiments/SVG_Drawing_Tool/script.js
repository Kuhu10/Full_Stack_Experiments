document.addEventListener("DOMContentLoaded", () => {
    const svg = document.getElementById("drawingArea");
    let isDrawing = false;
    let currentPath = null;
  
    svg.addEventListener("mousedown", (e) => {
      isDrawing = true;
      const { x, y } = getMousePosition(e);
      currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      currentPath.setAttribute("stroke", "blue");
      currentPath.setAttribute("stroke-width", "2");
      currentPath.setAttribute("fill", "none");
      currentPath.setAttribute("d", `M ${x} ${y}`); // starting point
      svg.appendChild(currentPath);
    });
  
    svg.addEventListener("mousemove", (e) => {
      if (!isDrawing) return;
      const { x, y } = getMousePosition(e);
      let d = currentPath.getAttribute("d");
      currentPath.setAttribute("d", `${d} L ${x} ${y}`);
    });
  

    svg.addEventListener("mouseup", () => {
      isDrawing = false;
      currentPath = null;
    });
  
    svg.addEventListener("mouseleave", () => {
      isDrawing = false;
      currentPath = null;
    });
  

    function getMousePosition(e) {
      const rect = svg.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  });