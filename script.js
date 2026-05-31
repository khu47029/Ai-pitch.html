const output = document.getElementById("output");

let generatedData = "";

async function generatePitch(){

  const bizName = document.getElementById("bizName").value;
  const bizCity = document.getElementById("bizCity").value;
  const bizType = document.getElementById("bizType").value;
  const extraInfo = document.getElementById("extraInfo").value;

  if(!bizName || !bizType){
    alert("Please fill all required fields");
    return;
  }

  output.innerHTML = `
    <div class="generated-box">
      ⚡ AI is generating premium pitch...
    </div>
  `;

  const prompt = `
Generate a high converting sales pitch.

Business Name: ${bizName}
City: ${bizCity}
Business Type: ${bizType}
Extra Info: ${extraInfo}

Structure:
1. Client Analysis
2. Main Pitch
3. Follow Up
4. Psychology
5. Objection Handler
`;

  try{

    // DEMO AI RESPONSE
    // Replace with OpenAI API later

    setTimeout(()=>{

      generatedData = `
🎯 CLIENT ANALYSIS

${bizName} ko online visibility improve karne ki zarurat hai.

💬 MAIN PITCH

Hello ${bizName} Team 👋

Aaj maine aapka business dekha aur genuinely laga ki iska online potential kaafi strong hai.

Agar aapki premium website ho:
✅ More customers
✅ Better trust
✅ WhatsApp leads
✅ Google visibility

Toh aapka business aur fast grow kar sakta hai 🚀

🔄 FOLLOW UP

Sir bas follow up kar raha tha 😊

🧠 PSYCHOLOGY

• Trust
• Scarcity
• Premium positioning

🛡️ OBJECTION HANDLER

“Website ki zarurat nahi”

→ Aaj kal customers pehle online check karte hain.
`;

      output.innerHTML = `
        <div class="generated-box">
          ${generatedData}
        </div>
      `;

    },2000);

  }catch(err){

    output.innerHTML = `
      <div class="generated-box">
        ❌ Error generating pitch
      </div>
    `;

  }

}

function copyAll(){

  navigator.clipboard.writeText(generatedData);

  alert("Copied!");
}

/* DARK LIGHT MODE */

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{

  document.body.classList.toggle("light-mode");

});
