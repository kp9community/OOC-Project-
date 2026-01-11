// ======================
// Role Check
// ======================
function checkRole(rolesAllowed) {
  const userRole = localStorage.getItem('userRole') || 'RE';
  return rolesAllowed.includes(userRole);
}

// ======================
// Placeholder Fetch Functions
// ======================

// Members
async function fetchMembers() {
  return [
    { id: 1, name: 'Alice', role: 'DEV', points: 500 },
    { id: 2, name: 'Bob', role: 'MG', points: 250 },
    { id: 3, name: 'Charlie', role: 'RE', points: 100 },
  ];
}

// Shifts
async function fetchShifts() {
  return [
    { user: 'Alice', shift: 'Morning', date: '2026-01-11', status: 'Completed' },
    { user: 'Bob', shift: 'Evening', date: '2026-01-11', status: 'Pending' },
    { user: 'Charlie', shift: 'Night', date: '2026-01-10', status: 'Missed' },
  ];
}

// Documents
async function fetchDocuments() {
  return [
    { name: 'Approval 01', type: 'Internal', created: '2026-01-10' },
    { name: 'Receipt 02', type: 'External', created: '2026-01-09' },
    { name: 'Donation 03', type: 'External', created: '2026-01-08' },
  ];
}

// Security Logs
async function fetchSecurityLogs() {
  return [
    { type: 'SRA', message: 'Routine server check', time: '2026-01-11 02:00' },
    { type: 'RCS', message: 'Database optimization needed', time: '2026-01-10 15:00' },
    { type: 'SACS', message: 'High CPU detected', time: '2026-01-10 16:30' },
  ];
}

// News
async function fetchNews() {
  return [
    { title: 'Server Maintenance 2026-01-12', content: 'Server downtime 02:00-04:00', date: '2026-01-11' },
    { title: 'New Document Template', content: 'Approval/Receipt templates updated', date: '2026-01-10' },
    { title: 'Security Alert', content: 'SRA routine check completed', date: '2026-01-09' }
  ];
}

// ======================
// Actions Placeholders
// ======================
function editMember(name) { alert(`Edit member ${name} (API placeholder)`); }
function deleteMember(name) { alert(`Delete member ${name} (API placeholder)`); }
function editShift(user) { alert(`Edit shift for ${user} (API placeholder)`); }
function deleteShift(user) { alert(`Delete shift for ${user} (API placeholder)`); }
function editDoc(name) { alert(`Edit document ${name} (API placeholder)`); }
function deleteDoc(name) { alert(`Delete document ${name} (API placeholder)`); }
function downloadDoc(name) { alert(`Download document ${name} (API placeholder)`); }
function editNews(title) { alert(`Edit news "${title}" (API placeholder)`); }
function deleteNews(title) { alert(`Delete news "${title}" (API placeholder)`); }
function acknowledge(msg) { alert(`Acknowledged alert: ${msg} (API placeholder)`); }
function resolve(msg) { alert(`Resolved alert: ${msg} (API placeholder)`); }

// Admin
function editUser(name) { alert(`Edit user ${name} (API placeholder)`); }
function deleteUser(name) { alert(`Delete user ${name} (API placeholder)`); }

// Reports Export
function exportCSV() { alert('Export CSV (API placeholder)'); }
function exportPDF() { alert('Export PDF (API placeholder)'); }
