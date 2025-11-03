document.getElementById("clickBtn").addEventListener("click", function() {
  const output = document.getElementById("output");
  const now = new Date();
  output.innerText = `You clicked the button at ${now.toLocaleTimeString()}`;
});
