export function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

export function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

export function setCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

export function logoutUser() {
  localStorage.removeItem("currentUser");
}

export function getComplaints() {
  return JSON.parse(localStorage.getItem("complaints")) || [];
}

export function saveComplaints(list) {
  localStorage.setItem("complaints", JSON.stringify(list));
}