const prizes = [
  "NÃO FOI DESSA VEZ",
  "TENTE NOVAMENTE",
  "JENTE NOVAMENTE!!",
  "10% DE DESCONTO",
  "BATATA PEQUENA GRÁTIS",
  "COCA 200ml GRÁTIS",
  "EXTRA CHEDDAR GRÁTIS",
  "+1 SMASH GRÁTIS NO COMBO"
];

const colors = [
  "#d9534f", "#6c5ce7", "#00b894", "#f9ca24",
  "#00cec9", "#e17055", "#fd79a8", "#fab1a0"
];

const wheel = document.getElementById("wheel");

for (let i = 0; i < prizes.length; i++) {
  const segment = document.createElement("div");
  segment.className = "segment";
  const angle = (360 / prizes.length) * i;
  segment.style.transform = `rotate(${angle}deg)`;
  segment.style.background = colors[i];
  segment.innerText = prizes[i];
  wheel.appendChild(segment);
}

let spinning = false;

document.getElementById("spin").addEventListener("click", () => {
  if (spinning) return;
  spinning = true;

  const rotation = 360 * 5 + Math.floor(Math.random() * 360);
  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    const finalRotation = rotation % 360;
    const index = Math.floor(prizes.length - (finalRotation / 360) * prizes.length) % prizes.length;
    document.getElementById("result").innerText = `🎉 ${prizes[index]}!`;
    spinning = false;
  }, 5200);
});