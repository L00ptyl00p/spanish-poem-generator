function generatePoem() {
  const inputText = document.getElementById("inputText").value;
  const poemOutput = document.getElementById("poemOutput");
  // Simple example of poem generation
  const poem = `Aquí tienes un poema basado en tus palabras:\n\n${inputText}\n\nEspero que te guste.`;
  poemOutput.textContent = poem;
}
