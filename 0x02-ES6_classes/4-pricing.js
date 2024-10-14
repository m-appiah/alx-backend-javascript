import Currency from './3-currency.js';

/**
 *  * Class representing a Pricing.
 *   */
class Pricing {
	/**
	 *    * Create a Pricing.
	 *       * @param {number} amount - The amount of the pricing.
	 *          * @param {Currency} currency - The currency of the pricing.
	 *             */
	constructor(amount, currency) {
		this._amount = amount;
		this._currency = currency;
	}

	/**
	 *    * Get the amount of the pricing.
	 *       * @return {number} The amount of the pricing.
	 *          */
	get amount() {
		return this._amount;
	}

	/**
	 *    * Set the amount of the pricing.
	 *       * @param {number} newAmount - The new amount of the pricing.
	 *          */
	set amount(newAmount) {
		this._amount = newAmount;
	}

	/**
	 *    * Get the currency of the pricing.
	 *       * @return {Currency} The currency of the pricing.
	 *          */
	get currency() {
		return this._currency;
	}

	/**
	 *    * Set the currency of the pricing.
	 *       * @param {Currency} newCurrency - The new currency of the pricing.
	 *          */
	set currency(newCurrency) {
		this._currency = newCurrency;
	}

	/**
	 *    * Display the full price.
	 *       * @return {string} The full price.
	 *          */
	displayFullPrice() {
		return `${this._amount} ${this._currency.name} (${this._currency.code})`;
	}

	/**
	 *    * Convert the price.
	 *       * @param {number} amount - The amount to convert.
	 *          * @param {number} conversionRate - The conversion rate.
	 *             * @return {number} The converted price.
	 *                */
	static convertPrice(amount, conversionRate) {
		return amount * conversionRate;
	}
}

export default Pricing;
