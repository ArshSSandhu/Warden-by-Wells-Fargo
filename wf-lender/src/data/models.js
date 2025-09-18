/**
 * @typedef {Object} BorrowRequest
 * @property {string} id
 * @property {number} amount
 * @property {string} purpose
 * @property {number} termMonths
 * @property {number} maxAcceptableApr

 * @typedef {Object} Lender
 * @property {string} id
 * @property {string} name
 * @property {string[]} categories
 * @property {number} maxAmount
 * @property {number} minAmount
 * @property {number} apr
 * @property {boolean} sameDay
 * @property {'lender_pays'|'borrower_pays'} feePolicy
 * @property {number} facilitationFeePct
 * @property {number} riskTolerance
 * @property {string} notes

 * @typedef {Object} Offer
 * @property {string} id
 * @property {string} lenderId
 * @property {string} borrowRequestId
 * @property {number} amount
 * @property {number} apr
 * @property {string} terms
 */

export {} // module with typedefs only
