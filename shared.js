// รายการบริการเริ่มต้น
const DEFAULT_SERVICES = [
  { id: 1, name: "ทาสีเจลมือ (สีพื้น)", price: 250, duration: 45 },
  { id: 2, name: "ต่อเล็บ PVC ทรงอัลมอนด์", price: 350, duration: 60 },
  { id: 3, name: "เพ้นท์ลายเล็บ / ติดอะไหล่", price: 150, duration: 30 }
];

// รายการคิวตัวอย่าง
const DEFAULT_BOOKINGS = [
  {
    id: "BK-001",
    customerName: "คุณสมหญิง ยิ้มแย้ม",
    phone: "0812345678",
    serviceIds: [1, 2],
    serviceNames: "ทาสีเจลมือ (สีพื้น), ต่อเล็บ PVC ทรงอัลมอนด์",
    totalPrice: 600,
    deposit: 50,
    dateTime: "2026-10-05T14:00",
    status: "ยืนยันแล้ว"
  }
];

function getServices() {
  const data = localStorage.getItem('nail_services');
  return data ? JSON.parse(data) : DEFAULT_SERVICES;
}

function saveServices(services) {
  localStorage.setItem('nail_services', JSON.stringify(services));
}

function getBookings() {
  const data = localStorage.getItem('nail_bookings');
  return data ? JSON.parse(data) : DEFAULT_BOOKINGS;
}

function saveBookings(bookings) {
  localStorage.setItem('nail_bookings', JSON.stringify(bookings));
}