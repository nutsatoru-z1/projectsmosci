function switchTab(tabId) {
  // 1. ซ่อนหน้าต่างเนื้อหาทั้งหมด
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // 2. ลบสไตล์ Active ออกจากปุ่มบน Navbar ทั้งหมด
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(btn => {
    btn.className = "nav-btn px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all flex items-center gap-2";
  });

  // 3. แสดงหน้าต่างเนื้อหาที่เลือก
  const targetContent = document.getElementById(tabId);
  if (targetContent) {
    targetContent.classList.add('active');
  }

  // 4. ไฮไลต์ปุ่มบน Navbar ที่ตรงกับ tabId
  const targetBtn = document.querySelector(`[data-tab="${tabId}"]`);
  if (targetBtn) {
    targetBtn.className = "nav-btn active-btn px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 shadow-lg shadow-blue-500/30 flex items-center gap-2 border border-blue-400/30";
  }
}

// ทำงานทันทีเมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", () => {
  // ตรวจสอบว่ามี Hash บน URL หรือไม่ (เช่น #athletes)
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    switchTab(hash);
  } else {
    switchTab('sports-cheer'); // หน้าเริ่มต้นกรณีไม่มี Hash
  }
});

// รองรับกรณีที่มีการเปลี่ยน Hash ขณะอยู่ที่หน้าเดิม
window.addEventListener("hashchange", () => {
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    switchTab(hash);
  }
});