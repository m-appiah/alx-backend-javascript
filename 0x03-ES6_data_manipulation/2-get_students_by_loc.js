/**
 * Get students by location.
 * @param {Array} students - An array of student objects.
 * @param {string} city - The city to filter by.
 * @return {Array} An array of students in the specified city.
 */
function getStudentsByLocation(students, city) {
	return students.filter(student => student.location === city);
}

export default getStudentsByLocation;
