// عناصر أساسية
const modal = document.getElementById("examModal");
const addExamBtn = document.getElementById("addExamBtn");
const closeBtn = document.querySelector(".close");
const examForm = document.getElementById("examForm");
const questionsContainer = document.getElementById("questionsContainer");

// فتح وغلق المودال
addExamBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

// عند ارسال فورم الامتحان
examForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("examName").value;
  const count = parseInt(document.getElementById("questionCount").value);
  const time = document.getElementById("examTime").value;
  const type = document.getElementById("examType").value;

  modal.style.display = "none";
  questionsContainer.innerHTML = `<h2>امتحان: ${name} | الوقت: ${time} دقيقة</h2>`;

  // إنشاء فورم للأسئلة
  for (let i = 1; i <= count; i++) {
    let card = document.createElement("div");
    card.classList.add("question-card");

    if (type === "mcq") {
      card.innerHTML = `
        <label>السؤال ${i}:</label>
        <input type="text" placeholder="اكتب نص السؤال هنا">
        <div>
          <input type="text" placeholder="إجابة 1 (صحيحة)">
          <input type="text" placeholder="إجابة 2">
          <input type="text" placeholder="إجابة 3">
          <input type="text" placeholder="إجابة 4">
        </div>
      `;
    } else if (type === "truefalse") {
      card.innerHTML = `
        <label>السؤال ${i}:</label>
        <input type="text" placeholder="اكتب نص السؤال هنا">
        <select>
          <option value="true">صح ✅</option>
          <option value="false">خطأ ❌</option>
        </select>
      `;
    } else if (type === "essay") {
      card.innerHTML = `
        <label>السؤال ${i}:</label>
        <input type="text" placeholder="اكتب نص السؤال هنا">
        <textarea placeholder="نموذج الإجابة الصحيحة"></textarea>
      `;
    }

    questionsContainer.appendChild(card);
  }
});
