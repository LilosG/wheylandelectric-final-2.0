export interface LoadCalculatorInputs {
  serviceSizeAmps: number;
  existingLoadPercent: number;
  evChargerAmps: number;
  evCount: number;
  aduLoadAmps: number;
  remodelLoadAmps: number;
  spaLoadAmps: number;
  dedicatedCircuitAmps: number;
  dedicatedCircuitCount: number;
  commercialTiLoadAmps: number;
}

export interface LoadCalculatorResult {
  serviceCapacityAmps: number;
  estimatedExistingLoadAmps: number;
  addedLoadAmps: number;
  projectedTotalLoadAmps: number;
  remainingCapacityAmps: number;
  utilizationPercent: number;
  reviewLevel: 'good' | 'review' | 'urgent';
  message: string;
}

export const CALCULATOR_DISCLAIMER =
  'This calculator is for preliminary planning only. It is not a final electrical design, permit document, NEC determination, or guaranteed service-size recommendation. Final load calculations and service-sizing decisions should be reviewed by a licensed electrician based on site conditions, equipment specifications, and applicable code requirements.';

export const defaultInputs: LoadCalculatorInputs = {
  serviceSizeAmps: 200,
  existingLoadPercent: 60,
  evChargerAmps: 40,
  evCount: 1,
  aduLoadAmps: 0,
  remodelLoadAmps: 20,
  spaLoadAmps: 0,
  dedicatedCircuitAmps: 20,
  dedicatedCircuitCount: 1,
  commercialTiLoadAmps: 0,
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function calculateLoad(inputs: LoadCalculatorInputs): LoadCalculatorResult {
  const serviceCapacityAmps = clamp(inputs.serviceSizeAmps, 60, 600);
  const estimatedExistingLoadAmps = serviceCapacityAmps * (clamp(inputs.existingLoadPercent, 10, 100) / 100);

  const addedLoadAmps =
    clamp(inputs.evChargerAmps, 0, 100) * clamp(inputs.evCount, 0, 4) +
    clamp(inputs.aduLoadAmps, 0, 200) +
    clamp(inputs.remodelLoadAmps, 0, 150) +
    clamp(inputs.spaLoadAmps, 0, 100) +
    clamp(inputs.dedicatedCircuitAmps, 0, 60) * clamp(inputs.dedicatedCircuitCount, 0, 8) +
    clamp(inputs.commercialTiLoadAmps, 0, 250);

  const projectedTotalLoadAmps = estimatedExistingLoadAmps + addedLoadAmps;
  const remainingCapacityAmps = serviceCapacityAmps - projectedTotalLoadAmps;
  const utilizationPercent = (projectedTotalLoadAmps / serviceCapacityAmps) * 100;

  let reviewLevel: LoadCalculatorResult['reviewLevel'] = 'good';
  let message = 'Preliminary estimate suggests your current service may have headroom, but licensed review is still recommended.';

  if (utilizationPercent >= 100) {
    reviewLevel = 'urgent';
    message = 'Preliminary estimate indicates projected demand may exceed current service capacity. Prompt licensed review is strongly recommended.';
  } else if (utilizationPercent >= 80) {
    reviewLevel = 'review';
    message = 'Preliminary estimate suggests limited remaining capacity. A licensed electrician should review load and service options.';
  }

  return {
    serviceCapacityAmps,
    estimatedExistingLoadAmps,
    addedLoadAmps,
    projectedTotalLoadAmps,
    remainingCapacityAmps,
    utilizationPercent,
    reviewLevel,
    message,
  };
}
