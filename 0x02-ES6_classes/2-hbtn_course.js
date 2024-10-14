/**
 *  * Class representing a Holberton Course.
 *   */
class HolbertonCourse {
	/**
	 *    * Create a HolbertonCourse.
	 *       * @param {string} name - The name of the course.
	 *          * @param {number} length - The length of the course.
	 *             * @param {string[]} students - The students of the course.
	 *                */
	constructor(name, length, students) {
		if (typeof name !== 'string') throw TypeError('Name must be a string');
		if (typeof length !== 'number') throw TypeError('Length must be a number');
		if (!Array.isArray(students) || students.some(student => typeof student !== 'string')) {
			throw TypeError('Students must be an array of strings');
		}

		this._name = name;
		this._length = length;
		this._students = students;
	}

	/**
	 *    * Get the name of the course.
	 *       * @return {string} The name of the course.
	 *          */
	get name() {
		return this._name;
	}

	/**
	 *    * Set the name of the course.
	 *       * @param {string} newName - The new name of the course.
	 *          */
	set name(newName) {
		if (typeof newName !== 'string') throw TypeError('Name must be a string');
		this._name = newName;
	}

	/**
	 *    * Get the length of the course.
	 *       * @return {number} The length of the course.
	 *          */
	get length() {
		return this._length;
	}

	/**
	 *    * Set the length of the course.
	 *       * @param {number} newLength - The new length of the course.
	 *          */
	set length(newLength) {
		if (typeof newLength !== 'number') throw TypeError('Length must be a number');
		this._length = newLength;
	}

	/**
	 *    * Get the students of the course.
	 *       * @return {string[]} The students of the course.
	 *          */
	get students() {
		return this._students;
	}

	/**
	 *    * Set the students of the course.
	 *       * @param {string[]} newStudents - The new students of the course.
	 *          */
	set students(newStudents) {
		if (!Array.isArray(newStudents) || newStudents.some(student => typeof student !== 'string')) {
			throw TypeError('Students must be an array of strings');
		}
		this._students = newStudents;
	}
}

export default HolbertonCourse;
