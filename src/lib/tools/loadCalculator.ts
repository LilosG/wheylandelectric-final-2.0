// NEC 220.80 Optional Method — Residential Load Calculation
// Ported from Wheyland Electric Load Calc Worksheet (App.tsx)

export interface CustomLoad {
  id: string;
  name: string;
  va: number;
}

export interface LoadData {
  // Project Information
  address: string;
  serviceRating: number;
  busRating: number;
  systemVoltage: number;

  // 1. General Lighting
  sqft: number;
  smallApplianceCircuits: number;
  laundryCircuits: number;

  // 2. Cooking Equipment
  rangeVA: number;
  isRangeGas: boolean;
  cooktopVA: number;
  isCooktopGas: boolean;
  ovenVA: number;
  isOvenGas: boolean;

  // 3. Electric Dryer
  dryerVA: number;
  isDryerGas: boolean;

  // 4. Fixed Appliances
  dishwasherVA: number;
  disposalVA: number;
  compactorVA: number;
  waterHeaterVA: number;
  isWaterHeaterGas: boolean;
  hydroTubVA: number;
  microwaveVA: number;
  builtInVacVA: number;
  customFixedLoads: CustomLoad[];

  // 7. Heating or AC
  heatingVA: number;
  acVA: number;
}

export interface LoadCalcResults {
  lightingVA: number;
  smallApplianceVA: number;
  laundryVA: number;
  generalLightingTotal: number;
  cookingTotal: number;
  dryerTotal: number;
  fixedTotal: number;
  optionalSubtotal: number;
  first10k: number;
  balance: number;
  demandFactorResult: number;
  heatingACResult: number;
  totalVA: number;
  minAmps: number;
}

export const initialLoadData: LoadData = {
  address: '',
  serviceRating: 200,
  busRating: 225,
  systemVoltage: 240,
  sqft: 0,
  smallApplianceCircuits: 2,
  laundryCircuits: 1,
  rangeVA: 0,
  isRangeGas: false,
  cooktopVA: 0,
  isCooktopGas: false,
  ovenVA: 0,
  isOvenGas: false,
  dryerVA: 0,
  isDryerGas: false,
  dishwasherVA: 0,
  disposalVA: 0,
  compactorVA: 0,
  waterHeaterVA: 0,
  isWaterHeaterGas: false,
  hydroTubVA: 0,
  microwaveVA: 0,
  builtInVacVA: 0,
  customFixedLoads: [],
  heatingVA: 0,
  acVA: 0,
};

export const CALCULATOR_DISCLAIMER =
  'This worksheet follows NEC 220.80 (Optional Method). Ensure all nameplate values are entered in Volt-Amps (VA). Final load calculations and service-sizing decisions require a licensed electrician.';

export function calculateLoad(data: LoadData): LoadCalcResults {
  // 1. General Lighting
  const lightingVA = data.sqft * 3;
  const smallApplianceVA = data.smallApplianceCircuits * 1500;
  const laundryVA = data.laundryCircuits * 1500;
  const generalLightingTotal = lightingVA + smallApplianceVA + laundryVA;

  // 2. Cooking Equipment
  const cookingTotal =
    (data.isRangeGas ? 0 : data.rangeVA) +
    (data.isCooktopGas ? 0 : data.cooktopVA) +
    (data.isOvenGas ? 0 : data.ovenVA);

  // 3. Dryer — min 5000 VA if electric (NEC 220.54)
  const dryerTotal =
    data.dryerVA > 0
      ? data.isDryerGas
        ? data.dryerVA
        : Math.max(5000, data.dryerVA)
      : 0;

  // 4. Fixed Appliances
  const customFixedTotal = data.customFixedLoads.reduce((sum, load) => sum + load.va, 0);
  const fixedTotal =
    data.dishwasherVA +
    data.disposalVA +
    data.compactorVA +
    (data.isWaterHeaterGas ? 0 : data.waterHeaterVA) +
    data.hydroTubVA +
    data.microwaveVA +
    data.builtInVacVA +
    customFixedTotal;

  // 5. Optional Subtotal
  const optionalSubtotal = generalLightingTotal + cookingTotal + dryerTotal + fixedTotal;

  // 6. Demand Factors (NEC 220.80)
  const first10k = Math.min(optionalSubtotal, 10000);
  const balance = Math.max(0, optionalSubtotal - 10000);
  const demandFactorResult = first10k + balance * 0.4;

  // 7. Heating or AC — largest only (NEC 220.60)
  const heatingACResult = Math.max(data.heatingVA, data.acVA);

  // 8. Total
  const totalVA = demandFactorResult + heatingACResult;

  // 9. Minimum service amps
  const minAmps = totalVA / data.systemVoltage;

  return {
    lightingVA,
    smallApplianceVA,
    laundryVA,
    generalLightingTotal,
    cookingTotal,
    dryerTotal,
    fixedTotal,
    optionalSubtotal,
    first10k,
    balance,
    demandFactorResult,
    heatingACResult,
    totalVA,
    minAmps,
  };
}
