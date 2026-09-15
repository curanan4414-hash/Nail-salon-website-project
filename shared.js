const weeklyScheduleConfig = {
  0: { name: 'วันอาทิตย์', open: '09:00', close: '24:00', text: '09:00 - 00:00 น.' },
  1: { name: 'วันจันทร์', open: '09:00', close: '24:00', text: '09:00 - 00:00 น.' },
  2: { name: 'วันอังคาร', open: '09:00', close: '24:00', text: '09:00 - 00:00 น.' },
  3: { name: 'วันพุธ', open: '13:00', close: '24:00', text: '13:00 - 00:00 น.' },
  4: { name: 'วันพฤหัสบดี', open: '09:00', close: '24:00', text: '09:00 - 00:00 น.' },
  5: { name: 'วันศุกร์', open: '19:00', close: '24:00', text: '19:00 - 00:00 น.' },
  6: { name: 'วันเสาร์', open: '09:00', close: '24:00', text: '09:00 - 00:00 น.' }
};

const defaultServices = [
  { id: 1, name: 'สีพื้น', category: 'ทาสีเจล (ไม่ต่อ)', price: 159, duration: 45 },
  { id: 2, name: 'ไซรัป', category: 'ทาสีเจล (ไม่ต่อ)', price: 179, duration: 45 },
  { id: 3, name: 'ลูกแก้ว', category: 'ทาสีเจล (ไม่ต่อ)', price: 189, duration: 60 },
  { id: 4, name: 'สีพื้น + ต่อ PVC', category: 'รวมต่อเล็บ (PVC)', price: 379, duration: 90 },
  { id: 5, name: 'สีไซรัป + ต่อ PVC', category: 'รวมต่อเล็บ (PVC)', price: 389, duration: 90 },
  { id: 6, name: 'สีลูกแก้ว/สีแฟลช + ต่อ PVC', category: 'รวมต่อเล็บ (PVC)', price: 399, duration: 105 },
  { id: 7, name: 'สีขัดผง + ต่อ PVC', category: 'รวมต่อเล็บ (PVC)', price: 459, duration: 120 },
  { id: 8, name: 'ล้างสีร้านอื่น', category: 'บริการเสริม & ล้างเล็บ', price: 80, duration: 30 },
  { id: 9, name: 'ล้าง + ถอด PVC ร้านอื่น', category: 'บริการเสริม & ล้างเล็บ', price: 100, duration: 40 },
  { id: 10, name: 'ล้างสีร้านเรา', category: 'บริการเสริม & ล้างเล็บ', price: 70, duration: 25 },
  { id: 11, name: 'ล้าง + ถอด PVC ร้านเรา', category: 'บริการเสริม & ล้างเล็บ', price: 100, duration: 35 },
  { id: 12, name: 'ถอดพักเล็บ', category: 'บริการเสริม & ล้างเล็บ', price: 100, duration: 30 },
  { id: 13, name: 'เสริมหน้าเล็บ', category: 'บริการเสริม & ล้างเล็บ', price: 100, duration: 20 }
];

function getServicesData() {
  const s = localStorage.getItem('nail_services');
  return s ? JSON.parse(s) : defaultServices;
}
function saveServicesData(data) { localStorage.setItem('nail_services', JSON.stringify(data)); }

function getBookingsData() {
  const b = localStorage.getItem('nail_bookings');
  return b ? JSON.parse(b) : [];
}
function saveBookingsData(data) { localStorage.setItem('nail_bookings', JSON.stringify(data)); }

function timeToMinutes(tStr) {
  const [h, m] = tStr.split(':').map(Number);
  return h * 60 + m;
}
function minutesToTime(mins) {
  const h = Math.floor(mins / 60).toString().padStart(2, '0');
  const m = (mins % 60).toString().padStart(2, '0');
  return `${h}:${m}`;
}
function formatDuration(mins) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h > 0 && m > 0) return `${mins} นาที (${h} ชม. ${m} นาที)`;
  if (h > 0) return `${mins} นาที (${h} ชม.)`;
  return `${mins} นาที`;
}