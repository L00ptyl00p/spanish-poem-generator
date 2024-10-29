alert("Hello, world!");

let apiKey = "47b90c9bbea7cd28cta502ea562f03od";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={key}`;

function generatePoem() {
  const inputText = document.getElementById("inputText").value;
  const poemOutput = document.getElementById("poemOutput");
  // Simple example of poem generation
  const poem = `Aquí tienes un poema basado en tus palabras:\n\n${inputText}\n\nEspero que te guste.`;
  poemOutput.textContent = poem;
}
