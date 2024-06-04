/**
 * Update student grades by city.
 * @param {Array} students - An array of student objects.
 * @param {string} city - The city to filter by.
 * @param {Array} newGrades - An array of grade objects.
 * @return {Array} An array of students in the specified city with their new grades.
 */
function updateStudentGradeByCity(students, city, newGrades) {
	return students
		.filter(student => student.location === city)
		.map(student => {
			const grade = newGrades.find(item => item.studentId === student.id);
			return { ...student, grade: grade ? grade.grade : 'N/A' };
		});
}

export default updateStudentGradeByCity;
