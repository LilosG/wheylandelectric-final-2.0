import React, { useMemo, useRef, useState } from 'react';
import { Download, Zap } from 'lucide-react';
import { CALCULATOR_DISCLAIMER, calculateLoad, defaultInputs, type LoadCalculatorInputs } from '../../lib/tools/loadCalculator';

const fields: Array<{ key: keyof LoadCalculatorInputs; label: string; min: number; max: number; step?: number }> = [
  { key: 'serviceSizeAmps', label: 'Current service size (amps)', min: 60, max: 600 },
  { key: 'existingLoadPercent', label: 'Estimated existing load (%)', min: 10, max: 100 },
  { key: 'evChargerAmps', label: 'EV charger load (amps each)', min: 0, max: 100 },
  { key: 'evCount', label: 'Number of EV chargers', min: 0, max: 4 },
  { key: 'aduLoadAmps', label: 'ADU or addition load (amps)', min: 0, max: 200 },
  { key: 'remodelLoadAmps', label: 'Remodel appliance load (amps)', min: 0, max: 150 },
  { key: 'spaLoadAmps', label: 'Spa / jacuzzi / sauna load (amps)', min: 0, max: 100 },
  { key: 'dedicatedCircuitAmps', label: 'Dedicated circuit size (amps each)', min: 0, max: 60 },
  { key: 'dedicatedCircuitCount', label: 'Number of dedicated circuits', min: 0, max: 8 },
  { key: 'commercialTiLoadAmps', label: 'Commercial TI added load (amps)', min: 0, max: 250 },
];

export default function LoadCalculator() {
  const [inputs, setInputs] = useState<LoadCalculatorInputs>(defaultInputs);
  const [exporting, setExporting] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);
  const result = useMemo(() => calculateLoad(inputs), [inputs]);

  const updateInput = (key: keyof LoadCalculatorInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: Number.isFinite(value) ? value : 0 }));
  };

  const exportPdf = async () => {
    if (!reportRef.current) return;
    setExporting(true);
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')]);
      const canvas = await html2canvas(reportRef.current, { scale: 2, backgroundColor: '#ffffff' });
      const img = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const width = 190;
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(img, 'PNG', 10, 10, width, height);
      pdf.save('wheyland-electrical-load-estimate.pdf');
    } finally {
      setExporting(false);
    }
  };

  const statusTone = result.reviewLevel === 'urgent' ? 'text-red-700 bg-red-50 border-red-200' : result.reviewLevel === 'review' ? 'text-amber-700 bg-amber-50 border-amber-200' : 'text-emerald-700 bg-emerald-50 border-emerald-200';

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:p-8" ref={reportRef}>
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-brand-teal" />
          <h2 className="text-xl font-bold text-brand-slate">Load Estimate Inputs</h2>
        </div>
        <button onClick={exportPdf} disabled={exporting} className="inline-flex items-center gap-2 rounded-lg border border-brand-slate/20 px-4 py-2 text-sm font-semibold text-brand-slate hover:bg-slate-50 disabled:opacity-60">
          <Download className="h-4 w-4" /> {exporting ? 'Exporting...' : 'Export PDF'}
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.key} className="text-sm font-medium text-brand-slate">
            <span className="mb-1 block">{field.label}</span>
            <input
              type="number"
              min={field.min}
              max={field.max}
              step={field.step ?? 1}
              value={inputs[field.key]}
              onChange={(e) => updateInput(field.key, Number(e.target.value))}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-base"
            />
          </label>
        ))}
      </div>

      <div className={`mt-6 rounded-xl border p-4 ${statusTone}`}>
        <p className="font-semibold">{result.message}</p>
        <div className="mt-3 grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
          <p><strong>Service:</strong> {result.serviceCapacityAmps.toFixed(0)}A</p>
          <p><strong>Existing:</strong> {result.estimatedExistingLoadAmps.toFixed(1)}A</p>
          <p><strong>Added:</strong> {result.addedLoadAmps.toFixed(1)}A</p>
          <p><strong>Projected:</strong> {result.projectedTotalLoadAmps.toFixed(1)}A</p>
          <p><strong>Remaining:</strong> {result.remainingCapacityAmps.toFixed(1)}A</p>
          <p><strong>Utilization:</strong> {result.utilizationPercent.toFixed(1)}%</p>
        </div>
      </div>

      <p className="mt-6 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">{CALCULATOR_DISCLAIMER}</p>
    </div>
  );
}
