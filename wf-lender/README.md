# Warden — concept demo (Wells Fargo)

Problem
-------
- Moments that matter: emergency medical bills, auto repairs, unexpected housing costs, tuition deadlines — these moments create acute stress for consumers.
- Friction: slow underwriting, opaque fees, lack of purpose-aligned offers, and limited access to affordable capital at short notice.
- Predatory alternatives: payday loans, title loans, and high-interest quick-credit products that trap users.

Solution
--------
Dual-path access for short-term financing:

1) Instant Invest Pool
- Bank-backed, diversified pools pre-fund emergency liquidity.
- Fast, deterministic underwriting using safe heuristics (income × multiplier, purpose allowances).
- Low-latency path for users who qualify.

2) Community Match
- Purpose-aligned lenders (medical, auto, housing, tuition, farming).
- Competitive APRs, human trust, and community underwriting.
- Marketplace-style matching with transparent facilitation fees.

Bank value
----------
- Loyalty & brand lift: help customers in stressful moments and build long-term relationships.
- New fee revenue: platform facilitation fees and interchange revenue on funded disbursements.
- Risk diversification: mix of bank-funded pools and community-sourced capital.
- Cross-sell funnel: onramp for longer-term banking products and services.
- Data & network effects: anonymized signals improve matching and pricing over time.

User value
----------
- Instant access when eligible.
- Fair, purpose-aligned offers for those who prefer community lenders.
- Transparent cost breakdowns and prepayment-friendly terms.
- Coaching and clear explanations (demo AI guidance lines).

How it works (high level)
-------------------------
- User chooses borrow flow → completes a short multi-step form (purpose, amount, urgency, income).
- System runs a quick invest-pool check (deterministic rule) and either:
	- approves instantly (shows limit & APR), or
	- falls back to community matching (runs a scoring function across lender pool).
- Lenders are scored by category match, amount fit, same-day availability, APR, and risk parameters.
- Top offers are presented; borrower chooses an offer and receives a compact receipt.

ASCII flow

User -> [Borrow Form] -> (Invest Pool check) -> Approved? -> Yes -> [Invest Offer] -> Accept -> Disburse
																				 \\
																					No
																					 \\
																						-> [Community Match] -> [Offer cards] -> Choose -> Disburse

Live demo (run locally)
-----------------------
1. cd wf-lender
2. npm install
3. npm run dev
4. Open the dev server printed in the terminal (default http://localhost:5173 or nearby port)

60-second walkthrough script
----------------------------
"This is Warden, a dual-path short-term financing demo. Start at 'Start Borrow Flow', pick a purpose like medical and enter an amount. If you qualify for the Instant Invest Pool the app will show an approved limit and APR instantly — click 'Accept Offer' to finalize and view a receipt. If you don't qualify, the system falls back to Community Match which shows purpose-aligned lenders, APRs, and fees. Pick an offer to see an itemized cost breakdown and download a receipt. Lenders can onboard via the Lend page to join the marketplace. The app is a demo — figures are simulated and intended to illustrate UX and routing." 


---

This README is intentionally concise; tell me if you want a longer investor-style brief or one-pager tailored to compliance/legal review.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
