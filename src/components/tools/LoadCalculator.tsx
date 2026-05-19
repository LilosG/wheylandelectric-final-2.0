import React, { useMemo, useRef, useState } from 'react';
import { Download, Gauge, Zap } from 'lucide-react';
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

  const statusTone =
    result.reviewLevel === 'urgent'
      ? 'border-red-200 bg-red-50 text-red-800'
      : result.reviewLevel === 'review'
      ? 'border-amber-200 bg-amber-50 text-amber-800'
      : 'border-emerald-200 bg-emerald-50 text-emerald-800';

  const statItems = [
    { label: 'Service Capacity', value: `${result.serviceCapacityAmps.toFixed(0)}A` },
    { label: 'Existing Load', value: `${result.estimatedExistingLoadAmps.toFixed(1)}A` },
    { label: 'Added Load', value: `${result.addedLoadAmps.toFixed(1)}A` },
    { label: 'Projected Total', value: `${result.projectedTotalLoadAmps.toFixed(1)}A` },
    { label: 'Remaining Capacity', value: `${result.remainingCapacityAmps.toFixed(1)}A` },
    { label: 'Utilization', value: `${result.utilizationPercent.toFixed(1)}%` },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-300/30" ref={reportRef}>
      <div className="border-b border-slate-200 bg-gradient-to-r from-brand-navy to-brand-slate px-6 py-5 text-white md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-brand-gold" />
            <h2 className="text-xl font-bold">Electrical Load Planning Tool</h2>
          </div>
          <button
            onClick={exportPdf}
            disabled={exporting}
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10 disabled:opacity-60"
          >
            <Download className="h-4 w-4" /> {exporting ? 'Exporting...' : 'Export PDF'}
          </button>
        </div>
        <p className="mt-2 text-sm text-white/80">Preliminary planning estimate only — final service sizing requires licensed on-site review.</p>
      </div>

      <div className="grid gap-6 p-6 md:grid-cols-[1.15fr_0.85fr] md:p-8">
        <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 md:p-5" aria-labelledby="calc-inputs-title">
          <h3 id="calc-inputs-title" className="mb-4 text-base font-bold text-brand-slate">Inputs</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {fields.map((field) => (
              <label key={field.key} className="text-sm font-medium text-brand-slate">
                <span className="mb-1.5 block">{field.label}</span>
                <input
                  type="number"
                  min={field.min}
                  max={field.max}
                  step={field.step ?? 1}
                  value={inputs[field.key]}
                  onChange={(e) => updateInput(field.key, Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-base shadow-sm outline-none transition-colors focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
                />
              </label>
            ))}
          </div>
        </section>

        <section className={`rounded-2xl border p-4 md:p-5 ${statusTone}`} aria-labelledby="calc-result-title">
          <div className="mb-3 flex items-center gap-2">
            <Gauge className="h-5 w-5" />
            <h3 id="calc-result-title" className="text-base font-bold">Result</h3>
          </div>
          <p className="text-sm font-medium leading-relaxed">{result.message}</p>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {statItems.map((item) => (
              <div key={item.label} className="rounded-lg border border-current/20 bg-white/70 p-2.5">
                <p className="text-[11px] font-semibold uppercase tracking-wide opacity-75">{item.label}</p>
                <p className="mt-0.5 text-sm font-bold">{item.value}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-xs leading-relaxed text-slate-600">{CALCULATOR_DISCLAIMER}</p>
        </section>
      </div>
    </div>
  );
}
