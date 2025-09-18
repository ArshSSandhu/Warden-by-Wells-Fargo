import seedLenders from './seed'

// simple in-memory store initialized from seedLenders
let lenders = seedLenders.slice()

export function getLenders() {
  return lenders
}

export function addLender(lender) {
  lenders = [lender, ...lenders]
  return lender
}

export default { getLenders, addLender }
