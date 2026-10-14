/**
 * ฟังก์ชันเมื่อกดเลือกกีฬา เพื่อเปิดไปหน้าถัดไป
 * @param {string} sportName - ชื่อกีฬาที่จะนำไปแสดงในหน้าถัดไป
 */
function goToNextPage(sportName) {
  // 1. ซ่อนหน้าแรก (Home Page)
  document.getElementById('homePage').classList.add('hidden');
  
  // 2. แสดงหน้าถัดไป (Detail Page)
  document.getElementById('detailPage').classList.remove('hidden');

  // 3. นำชื่อกีฬาที่กด ไปแสดงที่หัวข้อหน้าถัดไป
  const titleElement = document.getElementById('detailTitle');
  if (titleElement) {
    titleElement.innerText = sportName;
  }
}

/**
 * ฟังก์ชันย้อนกลับไปยังหน้าหลัก (Home Page)
 */
function goToHomePage() {
  // 1. ซ่อนหน้าถัดไป (Detail Page)
  document.getElementById('detailPage').classList.add('hidden');
  
  // 2. แสดงหน้าแรก (Home Page)
  document.getElementById('homePage').classList.remove('hidden');
}