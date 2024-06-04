/**
 * Get a list of student IDs.
 * @param {Array} students - An array of student objects.
 * @return {Array} An array of student IDs.
 */
function getListStudentIds(students) {
	if (!Array.isArray(students)) {
		return [];
	}
	return students.map(student => student.id);
}

export default getListStudentIds;
