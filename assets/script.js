// ตัวอย่าง placeholders สำหรับทุกหน้า

// ตรวจ role ของ user
function checkRole(rolesAllowed) {
  const userRole = localStorage.getItem('userRole'); // เก็บจาก AuthPro token/session
  return rolesAllowed.includes(userRole);
}

// Fetch Members
async function fetchMembers() {
  return [
    { id: 1, name: 'User A', role: 'MG', points: 120 },
    { id: 2, name: 'User B', role: 'RE', points: 80 },
  ];
}

// Fetch Shifts
async function fetchShifts() {
  return [
    { user: 'User A', shift: 'Morning', status: 'Completed' },
    { user: 'User B', shift: 'Evening', status: 'Pending' },
  ];
}

// Fetch Documents
async function fetchDocuments() {
  return [
    { name: 'Approval Form', type: 'Internal', created: '2026-01-10' },
    { name: 'Donation Receipt', type: 'External', created: '2026-01-09' },
  ];
}

// Fetch Security Logs (SRA, RCS, SACS)
async function fetchSecurityLogs() {
  return [
    { type: 'SRA', message: 'Server reboot required', time: '2026-01-10 08:00' },
    { type: 'RCS', message: 'Daily routine check OK', time: '2026-01-10 09:00' },
    { type: 'SACS', message: 'CPU Load 70%', time: '2026-01-10 10:00' },
  ];
}
