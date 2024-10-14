/**
 *  * Class representing a Currency.
 *   */
class Currency {
	/**
	 *    * Create a Currency.
	 *       * @param {string} code - The code of the currency.
	 *          * @param {string} name - The name of the currency.
	 *             */
	constructor(code, name) {
		this._code = code;
		this._name = name;
	}

	/**
	 *    * Get the code of the currency.
	 *       * @return {string} The code of the currency.
	 *          */
	get code() {
		return this._code;
	}

	/**
	 *    * Set the code of the currency.
	 *       * @param {string} newCode - The new code of the currency.
	 *          */
	set code(newCode) {
		this._code = newCode;
	}

	/**
	 *    * Get the name of the currency.
	 *       * @return {string} The name of the currency.
	 *          */
	get name() {
		return this._name;
	}

	/**
	 *    * Set the name of the currency.
	 *       * @param {string} newName - The new name of the currency.
	 *          */
	set name(newName) {
		this._name = newName;
	}

	/**
	 *    * Display the full currency.
	 *       * @return {string} The full currency.
	 *          */
	displayFullCurrency() {
		return `${this._name} (${this._code})`;
	}
}

export default Currency;
