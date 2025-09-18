import { v4 as uuidv4 } from 'uuid'

/** @type {import('./models').Lender[]} */
export const seedLenders = [
  {
    id: uuidv4(),
    name: 'First Horizon Capital',
    categories: ['housing', 'auto'],
    maxAmount: 50000,
    minAmount: 1000,
    apr: 3.5,
    sameDay: false,
    feePolicy: 'borrower_pays',
    facilitationFeePct: 1.0,
    riskTolerance: 2,
    notes: 'Focus on consumer secured loans.'
  },
  {
    id: uuidv4(),
    name: 'GreenField Finance',
    categories: ['farming', 'housing'],
    maxAmount: 75000,
    minAmount: 5000,
    apr: 5.2,
    sameDay: false,
    feePolicy: 'lender_pays',
    facilitationFeePct: 0.75,
    riskTolerance: 3,
    notes: 'Specialized in agricultural equipment loans.'
  },
  {
    id: uuidv4(),
    name: 'EduAssist Lenders',
    categories: ['tuition'],
    maxAmount: 20000,
    minAmount: 500,
    apr: 2.9,
    sameDay: true,
    feePolicy: 'borrower_pays',
    facilitationFeePct: 1.25,
    riskTolerance: 1,
    notes: 'Low APR for educational purposes.'
  },
  {
    id: uuidv4(),
    name: 'RapidMed Funding',
    categories: ['medical'],
    maxAmount: 15000,
    minAmount: 250,
    apr: 6.5,
    sameDay: true,
    feePolicy: 'lender_pays',
    facilitationFeePct: 0.5,
    riskTolerance: 4,
    notes: 'Fast approvals for medical needs.'
  },
  {
    id: uuidv4(),
    name: 'AutoEdge Partners',
    categories: ['auto'],
    maxAmount: 40000,
    minAmount: 1000,
    apr: 4.1,
    sameDay: false,
    feePolicy: 'borrower_pays',
    facilitationFeePct: 1.1,
    riskTolerance: 2,
    notes: 'Competitive rates for vehicle financing.'
  },
  {
    id: uuidv4(),
    name: 'Neighborhood Bankers',
    categories: ['housing', 'tuition'],
    maxAmount: 250000,
    minAmount: 5000,
    apr: 3.9,
    sameDay: false,
    feePolicy: 'borrower_pays',
    facilitationFeePct: 1.0,
    riskTolerance: 2,
    notes: 'Established regional bank.'
  },
  {
    id: uuidv4(),
    name: 'Community Fund Co-op',
    categories: ['farming', 'housing', 'medical'],
    maxAmount: 60000,
    minAmount: 500,
    apr: 7.2,
    sameDay: false,
    feePolicy: 'lender_pays',
    facilitationFeePct: 0.9,
    riskTolerance: 5,
    notes: 'Higher APR but flexible underwriting.'
  },
  {
    id: uuidv4(),
    name: 'BridgePoint Capital',
    categories: ['housing'],
    maxAmount: 100000,
    minAmount: 10000,
    apr: 2.5,
    sameDay: false,
    feePolicy: 'borrower_pays',
    facilitationFeePct: 1.5,
    riskTolerance: 1,
    notes: 'Low APR, conservative lending.'
  },
  {
    id: uuidv4(),
    name: 'MicroStart Lenders',
    categories: ['tuition', 'medical'],
    maxAmount: 5000,
    minAmount: 100,
    apr: 9.9,
    sameDay: true,
    feePolicy: 'borrower_pays',
    facilitationFeePct: 1.4,
    riskTolerance: 5,
    notes: 'Microloans with quick turnaround.'
  },
  {
    id: uuidv4(),
    name: 'Estate Capital',
    categories: ['housing', 'auto'],
    maxAmount: 120000,
    minAmount: 2000,
    apr: 4.8,
    sameDay: false,
    feePolicy: 'lender_pays',
    facilitationFeePct: 0.6,
    riskTolerance: 3,
    notes: 'Long-term asset-backed loans.'
  }
]

export default seedLenders
