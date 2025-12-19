export const notifyStudents = (message, branch, section) => {
  console.log(
    `🔔 Student Notification [${branch}-${section}]: ${message}`
  );
};

export const notifyFaculty = (facultyId, message) => {
  console.log(
    `🔔 Faculty Notification [${facultyId}]: ${message}`
  );
};
