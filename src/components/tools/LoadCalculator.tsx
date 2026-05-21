/**
 * NEC 220.80 Optional Method — Residential Load Calculator
 * Ported from Wheyland Electric Load Calc Worksheet (Google AI Studio)
 * Adapted for wheylandelectric-final-2.0 (Astro/React/Tailwind)
 */

import React, { useState, useMemo, useRef } from 'react';
import {
  Zap,
  Home,
  Coffee,
  Wind,
  Settings,
  Info,
  MapPin,
  Download,
  Loader2,
  RefreshCcw,
  Thermometer,
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import {
  calculateLoad,
  initialLoadData,
  CALCULATOR_DISCLAIMER,
  type LoadData,
  type CustomLoad,
} from '../../lib/tools/loadCalculator';

// ── SmartInputField ─────────────────────────────────────────────────────────
// VA / Amps toggle input — matches Tim's original component behaviour exactly
function SmartInputField({
  label,
  value,
  onChange,
  helperText,
  hideLabel = false,
}: {
  label: string;
  value: number;
  onChange: (va: number) => void;
  helperText?: string;
  hideLabel?: boolean;
  systemVoltage?: number;
}) {
  const [unit, setUnit] = useState<'VA' | 'Amps'>('VA');
  const [voltage, setVoltage] = useState<'120' | '240'>('240');
  const [localInput, setLocalInput] = useState<string>(value === 0 ? '' : value.toString());
  const [isFocused, setIsFocused] = useState(false);

  React.useEffect(() => {
    if (!isFocused) {
      if (value === 0) {
        if (localInput !== '') setLocalInput('');
      } else if (unit === 'VA') {
        if (parseFloat(localInput) !== value) {
          const rounded = Math.round(value);
          setLocalInput(Math.abs(rounded - value) < 0.01 ? rounded.toString() : value.toString());
        }
      } else {
        const amps = value / Number(voltage);
        if (Math.abs(parseFloat(localInput) - amps) > 0.001) {
          setLocalInput(Number(amps.toFixed(3)).toString());
        }
      }
    }
  }, [value, isFocused, unit, voltage, localInput]);

  const handleUnitToggle = (newUnit: 'VA' | 'Amps') => {
    if (newUnit === unit) return;
    if (value > 0) {
      setLocalInput(
        newUnit === 'Amps'
          ? Number((value / Number(voltage)).toFixed(3)).toString()
          : Math.round(value).toString()
      );
    } else {
      setLocalInput('');
    }
    setUnit(newUnit);
  };

  const handleVoltageToggle = (v: '120' | '240') => {
    if (v === voltage) return;
    if (unit === 'Amps' && value > 0) {
      const currentAmps = value / Number(voltage);
      onChange(Math.round(currentAmps * Number(v)));
    }
    setVoltage(v);
  };

  const onInputChange = (val: string) => {
    let sanitized = val.replace(/[^0-9.]/g, '');
    const parts = sanitized.split('.');
    if (parts.length > 2) sanitized = parts[0] + '.' + parts.slice(1).join('');
    setLocalInput(sanitized);
    if (sanitized === '' || sanitized === '.') { onChange(0); return; }
    const num = parseFloat(sanitized);
    if (isNaN(num)) return;
    onChange(unit === 'VA' ? num : Math.round(num * Number(voltage)));
  };

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between px-1">
        {!hideLabel ? (
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{label}</label>
        ) : (
          <div />
        )}
        <div className="flex scale-90 origin-right rounded-full border border-slate-200 bg-slate-100 p-0.5">
          {(['VA', 'Amps'] as const).map((u) => (
            <button
              key={u}
              type="button"
              onClick={() => handleUnitToggle(u)}
              className={`rounded-full px-2 py-0.5 text-[9px] font-black transition-all ${
                unit === u ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-400'
              }`}
            >
              {u.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-2">
          <input
            type="text"
            inputMode="decimal"
            value={localInput}
            placeholder="0"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => onInputChange(e.target.value)}
            className="flex-grow rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium outline-none transition-all focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 group-hover:bg-white"
          />
          {unit === 'Amps' && (
            <div className="flex shrink-0 rounded-xl border border-slate-200 bg-slate-100 p-1">
              {(['120', '240'] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => handleVoltageToggle(v)}
                  className={`rounded-lg px-2 text-[10px] font-bold transition-all ${
                    voltage === v ? 'bg-white text-brand-gold shadow-sm' : 'text-slate-400'
                  }`}
                >
                  {v}V
                </button>
              ))}
            </div>
          )}
        </div>

        {unit === 'Amps' && value > 0 && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 rounded-md border border-slate-200 bg-white/80 px-2 py-1 text-[10px] backdrop-blur"
            style={{ right: unit === 'Amps' ? '7rem' : '0.75rem' }}
          >
            <RefreshCcw size={10} className="animate-pulse text-brand-gold" />
            <span className="font-black text-slate-700">{Math.round(value).toLocaleString()} VA</span>
          </div>
        )}

        {unit === 'VA' && (
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">
            VA
          </div>
        )}
      </div>

      {helperText && <p className="ml-1 text-[10px] text-slate-400">{helperText}</p>}
    </div>
  );
}

// ── SimpleInputField ─────────────────────────────────────────────────────────
function SimpleInputField({
  label,
  value,
  onChange,
  type = 'number',
  suffix,
  placeholder,
  helperText,
}: {
  label: string;
  value: string | number;
  onChange: (v: string | number) => void;
  type?: string;
  suffix?: string;
  placeholder?: string;
  helperText?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="ml-1 block text-[11px] font-bold uppercase tracking-wider text-slate-500">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value === 0 ? '' : value}
          placeholder={placeholder ?? '0'}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium outline-none transition-all focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
        />
        {suffix && (
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">
            {suffix}
          </div>
        )}
      </div>
      {helperText && <p className="ml-1 text-[10px] text-slate-400">{helperText}</p>}
    </div>
  );
}

// ── Section wrapper ──────────────────────────────────────────────────────────
function CardSection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/50 px-6 py-4">
        <div className="text-slate-400">{icon}</div>
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

// ── GasElectricToggle ────────────────────────────────────────────────────────
function GasElectricToggle({
  isGas,
  onChange,
}: {
  isGas: boolean;
  onChange: (isGas: boolean) => void;
}) {
  return (
    <div className="flex scale-90 origin-right rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm">
      {[false, true].map((gasVal) => (
        <button
          key={String(gasVal)}
          type="button"
          onClick={() => onChange(gasVal)}
          className={`rounded-md px-3 py-1 text-[9px] font-black transition-all ${
            isGas === gasVal ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          {gasVal ? 'GAS' : 'ELECTRIC'}
        </button>
      ))}
    </div>
  );
}

// ── SummaryRow ───────────────────────────────────────────────────────────────
function SummaryRow({
  label,
  value,
  bold = false,
  highlight = false,
  note,
}: {
  label: string;
  value: number;
  bold?: boolean;
  highlight?: boolean;
  note?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <span className={`text-sm ${bold ? 'font-bold text-slate-700' : 'text-slate-500'}`}>{label}</span>
        {note && <span className="text-[9px] font-black uppercase tracking-tighter text-brand-gold">{note}</span>}
      </div>
      <span className={`text-sm tabular-nums ${bold ? 'font-black' : highlight ? 'font-bold text-brand-gold' : 'font-medium'}`}>
        {Math.round(value).toLocaleString()} VA
      </span>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function LoadCalculator() {
  const [data, setData] = useState<LoadData>(initialLoadData);
  const [isExporting, setIsExporting] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const calcs = useMemo(() => calculateLoad(data), [data]);

  const set = (field: keyof LoadData, value: unknown) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const setNum = (field: keyof LoadData, value: string | number) => {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    set(field, isNaN(num) ? 0 : num);
  };

  const exportToPDF = async () => {
    if (!printRef.current) return;
    setIsExporting(true);
    try {
      const element = printRef.current;
      await new Promise((resolve) => setTimeout(resolve, 300));

      const canvas = await html2canvas(element, {
        scale: 2.5,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 800,
        onclone: (clonedDoc) => {
          const el = clonedDoc.querySelector('[data-print-container]') as HTMLElement | null;
          if (el) {
            el.style.position = 'static';
            el.style.left = 'auto';
            el.style.top = 'auto';
            el.style.opacity = '1';
            el.style.visibility = 'visible';
            el.querySelectorAll<HTMLElement>('*').forEach((item) => {
              const s = window.getComputedStyle(item);
              if (s.color.includes('oklch')) item.style.color = '#0f172a';
              if (s.borderColor.includes('oklch')) item.style.borderColor = '#e2e8f0';
              if (s.backgroundColor.includes('oklch')) item.style.backgroundColor = '#ffffff';
            });
          }
        },
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const pdfWidth = 595;
      const pdfHeight = pdfWidth * (canvas.height / canvas.width);
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: [pdfWidth, pdfHeight] });
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);

      const fileName = data.address.trim()
        ? data.address.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.pdf'
        : 'wheyland_load_calc.pdf';
      pdf.save(fileName);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      alert(`PDF export failed: ${msg}. Try using browser print (Ctrl+P).`);
    } finally {
      setIsExporting(false);
    }
  };

  const addCustomLoad = () => {
    const id = Math.random().toString(36).substring(2, 11);
    set('customFixedLoads', [...data.customFixedLoads, { id, name: '', va: 0 } as CustomLoad]);
  };

  const updateCustomLoad = (id: string, field: keyof CustomLoad, value: string | number) => {
    set(
      'customFixedLoads',
      data.customFixedLoads.map((l) => (l.id === id ? { ...l, [field]: value } : l))
    );
  };

  const removeCustomLoad = (id: string) => {
    set('customFixedLoads', data.customFixedLoads.filter((l) => l.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <h2 className="text-lg font-bold leading-tight tracking-tight text-slate-800">
              NEC 220.80 Load Calculation
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Optional Method — Single Family Dwelling
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={exportToPDF}
              disabled={isExporting}
              className="flex items-center gap-2 rounded-xl bg-brand-navy px-4 py-2 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isExporting ? <Loader2 className="animate-spin" size={18} /> : <Download size={18} />}
              <span className="hidden sm:inline">Export PDF</span>
            </button>
            <div className="hidden border-l border-slate-100 pl-4 text-right md:block">
              <p className="text-[10px] font-black uppercase tracking-tighter text-slate-400">Min Service</p>
              <p
                className={`text-xl font-black leading-none transition-colors ${
                  calcs.minAmps > data.serviceRating ? 'text-red-600' : 'text-emerald-500'
                }`}
              >
                {calcs.minAmps.toFixed(1)}A
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-3">
        {/* ── Left: Form ── */}
        <div className="space-y-6 lg:col-span-2">

          {/* Project Information */}
          <CardSection icon={<Info size={20} />} title="Project Information">
            <div className="space-y-4">
              <SimpleInputField
                label="Property Address"
                value={data.address}
                onChange={(v) => set('address', v.toString())}
                type="text"
                placeholder="123 Energy Lane, Carlsbad, CA"
              />
              <div className="grid grid-cols-1 gap-4 border-t border-slate-100 pt-4 md:grid-cols-3">
                {/* System Voltage */}
                <div className="space-y-1.5">
                  <label className="ml-1 block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    System Voltage
                  </label>
                  <div className="flex h-[42px] rounded-xl border border-slate-200 bg-slate-50 p-1">
                    {[208, 240].map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => set('systemVoltage', v)}
                        className={`flex-1 rounded-lg text-xs font-black transition-all ${
                          data.systemVoltage === v
                            ? 'border border-slate-100 bg-white text-slate-900 shadow-sm'
                            : 'text-slate-400'
                        }`}
                      >
                        {v}V
                      </button>
                    ))}
                  </div>
                </div>
                <SimpleInputField
                  label="Service Rating (A)"
                  value={data.serviceRating}
                  onChange={(v) => setNum('serviceRating', v)}
                />
                <SimpleInputField
                  label="Bus Rating (A)"
                  value={data.busRating}
                  onChange={(v) => setNum('busRating', v)}
                />
              </div>
            </div>
          </CardSection>

          {/* 1. General Lighting */}
          <CardSection icon={<Home size={20} />} title="1. General Lighting Loads">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <SimpleInputField
                label="Dwelling Area (sq. ft.)"
                value={data.sqft}
                onChange={(v) => setNum('sqft', v)}
                suffix="× 3 VA"
                helperText="NEC 220.12: 3 VA/sq ft"
              />
              <SimpleInputField
                label="Small Appliance Ckts"
                value={data.smallApplianceCircuits}
                onChange={(v) => setNum('smallApplianceCircuits', v)}
                suffix="× 1500 VA"
                helperText="Min 2 required (NEC 210.11)"
              />
              <SimpleInputField
                label="Laundry Circuits"
                value={data.laundryCircuits}
                onChange={(v) => setNum('laundryCircuits', v)}
                suffix="× 1500 VA"
                helperText="Min 1 required (NEC 210.11)"
              />
            </div>
          </CardSection>

          {/* 2. Cooking + 3. Dryer side by side */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* 2. Cooking Equipment */}
            <CardSection icon={<Coffee size={20} />} title="2. Cooking Equipment">
              <div className="space-y-6">
                {(
                  [
                    { label: 'Range', field: 'rangeVA', gasField: 'isRangeGas' },
                    { label: 'Cooktop', field: 'cooktopVA', gasField: 'isCooktopGas' },
                    { label: 'Oven(s)', field: 'ovenVA', gasField: 'isOvenGas' },
                  ] as const
                ).map((item) => (
                  <div key={item.field} className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50/30 p-3">
                    <div className="flex items-center justify-between px-1">
                      <span className="text-[10px] font-black uppercase tracking-tighter text-slate-400">
                        {item.label} Type
                      </span>
                      <GasElectricToggle
                        isGas={data[item.gasField] as boolean}
                        onChange={(v) => set(item.gasField, v)}
                      />
                    </div>
                    {data[item.gasField] ? (
                      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold italic text-slate-400">
                        <RefreshCcw size={12} className="animate-spin" />
                        Gas selected (0 VA load)
                      </div>
                    ) : (
                      <SmartInputField
                        label={item.label}
                        value={data[item.field] as number}
                        onChange={(va) => setNum(item.field, va)}
                        systemVoltage={data.systemVoltage}
                        hideLabel
                      />
                    )}
                  </div>
                ))}
              </div>
            </CardSection>

            {/* 3. Electric Dryer */}
            <CardSection icon={<Wind size={20} />} title="3. Electric Dryer">
              <div className="space-y-6">
                <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50/30 p-3">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-[10px] font-black uppercase tracking-tighter text-slate-400">
                      Dryer Type
                    </span>
                    <GasElectricToggle
                      isGas={data.isDryerGas}
                      onChange={(v) => set('isDryerGas', v)}
                    />
                  </div>
                  <SmartInputField
                    label="Dryer"
                    value={data.dryerVA}
                    onChange={(va) => setNum('dryerVA', va)}
                    helperText={
                      data.isDryerGas
                        ? 'Gas dryer: typically 500–1,000 VA.'
                        : 'Minimum 5,000 VA enforced for electric (NEC 220.54).'
                    }
                    systemVoltage={data.systemVoltage}
                    hideLabel
                  />
                </div>
              </div>
            </CardSection>
          </div>

          {/* 4. Fixed Appliance Loads */}
          <CardSection icon={<Settings size={20} />} title="4. Fixed Appliance Loads">
            <div className="mb-8 grid grid-cols-1 gap-x-8 gap-y-6 border-b border-slate-100 pb-8 md:grid-cols-2">
              <SmartInputField label="Dishwasher" value={data.dishwasherVA} onChange={(va) => setNum('dishwasherVA', va)} systemVoltage={data.systemVoltage} />
              <SmartInputField label="Disposal" value={data.disposalVA} onChange={(va) => setNum('disposalVA', va)} systemVoltage={data.systemVoltage} />
              <SmartInputField label="Compactor" value={data.compactorVA} onChange={(va) => setNum('compactorVA', va)} systemVoltage={data.systemVoltage} />

              {/* Water Heater with gas/electric toggle */}
              <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50/30 p-3">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[10px] font-black uppercase tracking-tighter text-slate-400">
                    Water Heater Type
                  </span>
                  <GasElectricToggle
                    isGas={data.isWaterHeaterGas}
                    onChange={(v) => set('isWaterHeaterGas', v)}
                  />
                </div>
                {data.isWaterHeaterGas ? (
                  <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold italic text-slate-400">
                    Gas selected (0 VA load)
                  </div>
                ) : (
                  <SmartInputField label="Water Heater" value={data.waterHeaterVA} onChange={(va) => setNum('waterHeaterVA', va)} systemVoltage={data.systemVoltage} hideLabel />
                )}
              </div>

              <SmartInputField label="Hydromassage Tub" value={data.hydroTubVA} onChange={(va) => setNum('hydroTubVA', va)} systemVoltage={data.systemVoltage} />
              <SmartInputField label="Microwave Oven" value={data.microwaveVA} onChange={(va) => setNum('microwaveVA', va)} systemVoltage={data.systemVoltage} />
              <SmartInputField label="Built-in Vacuum" value={data.builtInVacVA} onChange={(va) => setNum('builtInVacVA', va)} systemVoltage={data.systemVoltage} />
            </div>

            {/* Custom fixed loads */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Other Fixed Loads</h4>
                <button
                  type="button"
                  onClick={addCustomLoad}
                  className="flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold text-white transition-colors hover:bg-slate-800"
                >
                  + Add Appliance
                </button>
              </div>

              {data.customFixedLoads.length === 0 && (
                <div className="rounded-2xl border-2 border-dashed border-slate-100 py-6 text-center">
                  <p className="text-xs text-slate-400">No custom fixed loads added yet.</p>
                </div>
              )}

              <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                {data.customFixedLoads.map((load) => (
                  <div key={load.id} className="relative rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
                    <button
                      type="button"
                      onClick={() => removeCustomLoad(load.id)}
                      className="absolute right-3 top-3 text-slate-300 transition-colors hover:text-red-400"
                      aria-label="Remove"
                    >
                      ✕
                    </button>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <label className="ml-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                          Appliance Name
                        </label>
                        <input
                          type="text"
                          value={load.name}
                          placeholder="e.g. Pool Pump"
                          onChange={(e) => updateCustomLoad(load.id, 'name', e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
                        />
                      </div>
                      <SmartInputField
                        label="Load"
                        value={load.va}
                        onChange={(va) => updateCustomLoad(load.id, 'va', va)}
                        systemVoltage={data.systemVoltage}
                        hideLabel={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardSection>

          {/* 7. Heating / AC */}
          <CardSection icon={<Thermometer size={20} />} title="7. Heating or AC Load">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
              <SmartInputField
                label="Heating Load"
                value={data.heatingVA}
                onChange={(va) => setNum('heatingVA', va)}
                systemVoltage={data.systemVoltage}
              />
              <SmartInputField
                label="AC Load"
                value={data.acVA}
                onChange={(va) => setNum('acVA', va)}
                systemVoltage={data.systemVoltage}
              />
            </div>
            <p className="ml-1 mt-3 text-[10px] text-slate-400">
              Only the larger of the two values is used in the final calculation (NEC 220.60).
            </p>
          </CardSection>
        </div>

        {/* ── Right: Summary Sidebar ── */}
        <div className="space-y-4 lg:col-span-1">
          <div className="sticky top-24 space-y-4">

            {/* Summary card */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 bg-brand-navy px-5 py-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white">Summary</h3>
                  <span className="rounded bg-brand-gold px-2 py-0.5 text-[10px] font-black text-white">NEC 220.80</span>
                </div>
              </div>
              <div className="space-y-2 p-5">
                <SummaryRow label="1. Gen. Lighting Total" value={calcs.generalLightingTotal} />
                <SummaryRow label="2. Cooking Total" value={calcs.cookingTotal} />
                <SummaryRow
                  label="3. Dryer Total"
                  value={calcs.dryerTotal}
                  highlight={data.dryerVA > 0 && !data.isDryerGas && data.dryerVA < 5000}
                  note={data.dryerVA > 0 && !data.isDryerGas && data.dryerVA < 5000 ? '5,000 VA min enforced' : undefined}
                />
                <SummaryRow label="4. Fixed Appliance Total" value={calcs.fixedTotal} />
                <div className="my-2 border-t border-slate-100" />
                <SummaryRow label="5. Optional Subtotal" value={calcs.optionalSubtotal} bold />

                {/* Demand factors */}
                <div className="mt-3 rounded-xl bg-slate-50 p-3">
                  <p className="mb-2 text-[9px] font-black uppercase tracking-widest text-brand-gold">
                    Section 6: Demand Factors
                  </p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>First 10,000 VA @ 100%</span>
                      <span className="font-mono font-bold">{Math.round(calcs.first10k).toLocaleString()} VA</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Remainder @ 40%</span>
                      <span className="font-mono font-bold">{Math.round(calcs.balance * 0.4).toLocaleString()} VA</span>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between border-t border-slate-200 pt-2">
                    <span className="text-xs font-bold text-slate-700">Demand Factor Result</span>
                    <span className="font-mono text-xs font-black">{Math.round(calcs.demandFactorResult).toLocaleString()} VA</span>
                  </div>
                </div>

                <SummaryRow label="7. Heating/AC (Max)" value={calcs.heatingACResult} />
                <div className="my-2 border-t border-slate-200" />
                <SummaryRow label="Optional Loads Total" value={calcs.totalVA} bold />
              </div>
            </div>

            {/* Min Service Size callout */}
            <div
              className={`rounded-2xl border-2 p-5 text-center transition-all ${
                calcs.minAmps > data.serviceRating
                  ? 'border-red-200 bg-red-50 text-red-600'
                  : 'border-emerald-200 bg-emerald-50 text-emerald-600'
              }`}
            >
              <p
                className={`text-[11px] font-black uppercase tracking-[0.2em] ${
                  calcs.minAmps > data.serviceRating ? 'text-red-700' : 'text-emerald-700'
                }`}
              >
                Min Service Size
              </p>
              <p className="mt-1 text-5xl font-black tabular-nums">
                {calcs.minAmps.toFixed(1)}
                <span className="text-2xl">A</span>
              </p>
              <p className={`mt-2 text-[10px] font-medium ${calcs.minAmps > data.serviceRating ? 'text-red-700' : 'text-emerald-700'}`}>
                @ {data.systemVoltage} Volts
              </p>
            </div>

            {/* NEC notice */}
            <div className="flex gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
              <Info className="mt-0.5 shrink-0 text-blue-500" size={16} />
              <p className="text-xs leading-relaxed text-blue-800">{CALCULATOR_DISCLAIMER}</p>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile floating amps badge */}
      <div className="fixed bottom-6 right-6 z-50 sm:hidden">
        <div
          className={`flex items-center gap-2 rounded-full border-4 border-white p-4 shadow-2xl transition-colors ${
            calcs.minAmps > data.serviceRating ? 'bg-red-600' : 'bg-emerald-500'
          } text-white`}
        >
          <Zap size={20} />
          <span className="text-lg font-black">{calcs.minAmps.toFixed(1)}A</span>
        </div>
      </div>

      {/* Hidden print-ready worksheet */}
      <div
        data-print-container
        className="pointer-events-none fixed left-[-9999px] top-0 -z-50 bg-white"
        style={{ width: '800px' }}
      >
        <div ref={printRef} className="w-[800px] bg-white p-12 pb-24 text-slate-900" style={{ fontFamily: 'Inter, sans-serif' }}>
          <div className="mb-10 flex items-start justify-between border-b-4 border-slate-900 pb-8">
            <div>
              <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Wheyland Electric</h1>
              <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-slate-500">License # 940291 · Est. 2009</p>
            </div>
            <div className="text-right">
              <div className="inline-block rotate-[-1deg] border-2 border-slate-900 px-4 py-1.5 text-sm font-black italic">
                NEC 220.80 OPTIONAL METHOD
              </div>
              <p className="mt-3 text-[11px] font-bold uppercase text-slate-500">Single Family Dwelling</p>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-12 gap-4">
            <div className="col-span-7 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="mb-1 flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-slate-400">
                <MapPin size={9} /> Property Address
              </p>
              <p className="text-sm font-bold text-slate-800">{data.address || 'ADDRESS NOT PROVIDED'}</p>
            </div>
            <div className="col-span-5 grid grid-cols-2 gap-3">
              <div className="flex flex-col items-center justify-center rounded-lg border-2 border-slate-900 bg-slate-50 p-3 text-center">
                <p className="text-[8px] font-black uppercase text-slate-500">Service Rating</p>
                <p className="font-mono text-lg font-black">{data.serviceRating}A</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-slate-100 p-3 text-center">
                <p className="text-[8px] font-black uppercase text-slate-500">Bus Rating</p>
                <p className="font-mono text-lg font-black">{data.busRating}A</p>
              </div>
            </div>
          </div>

          {/* Print calc rows */}
          <div className="grid grid-cols-2 gap-x-12">
            <div className="space-y-6">
              <div>
                <div className="border-l-4 border-slate-900 bg-slate-50 px-3 py-1.5"><h3 className="text-[11px] font-black uppercase">1. General Lighting Loads</h3></div>
                <div className="mt-1 space-y-0.5 pl-4">
                  {[
                    [`Dwelling (${data.sqft} sq ft × 3 VA)`, calcs.lightingVA],
                    [`Small Appliance (${data.smallApplianceCircuits} × 1500 VA)`, calcs.smallApplianceVA],
                    [`Laundry (${data.laundryCircuits} × 1500 VA)`, calcs.laundryVA],
                  ].map(([l, v]) => (
                    <div key={String(l)} className="flex justify-between border-b border-slate-100 pb-0.5 text-[10.5px]">
                      <span className="text-slate-600">{l}</span>
                      <span className="font-mono font-bold">{Math.round(Number(v)).toLocaleString()} VA</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-1 text-xs font-black uppercase"><span>Subtotal</span><span className="font-mono">{Math.round(calcs.generalLightingTotal).toLocaleString()} VA</span></div>
                </div>
              </div>
              <div>
                <div className="border-l-4 border-slate-900 bg-slate-50 px-3 py-1.5"><h3 className="text-[11px] font-black uppercase">2. Cooking Equipment</h3></div>
                <div className="mt-1 space-y-0.5 pl-4">
                  {[
                    [`Range${data.isRangeGas ? ' (GAS)' : ''}`, data.isRangeGas ? 0 : data.rangeVA],
                    [`Cooktop${data.isCooktopGas ? ' (GAS)' : ''}`, data.isCooktopGas ? 0 : data.cooktopVA],
                    [`Oven${data.isOvenGas ? ' (GAS)' : ''}`, data.isOvenGas ? 0 : data.ovenVA],
                  ].map(([l, v]) => (
                    <div key={String(l)} className="flex justify-between border-b border-slate-100 pb-0.5 text-[10.5px]">
                      <span className="text-slate-600">{l}</span>
                      <span className="font-mono font-bold">{Math.round(Number(v)).toLocaleString()} VA</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-1 text-xs font-black uppercase"><span>Subtotal</span><span className="font-mono">{Math.round(calcs.cookingTotal).toLocaleString()} VA</span></div>
                </div>
              </div>
              <div>
                <div className="border-l-4 border-slate-900 bg-slate-50 px-3 py-1.5"><h3 className="text-[11px] font-black uppercase">3. {data.isDryerGas ? 'Gas' : 'Electric'} Dryer</h3></div>
                <div className="mt-1 pl-4">
                  <div className="flex justify-between border-b border-slate-100 pb-0.5 text-[10.5px]"><span className="text-slate-600">Dryer</span><span className="font-mono font-bold">{Math.round(calcs.dryerTotal).toLocaleString()} VA</span></div>
                  <div className="flex justify-between pt-1 text-xs font-black uppercase"><span>Subtotal</span><span className="font-mono">{Math.round(calcs.dryerTotal).toLocaleString()} VA</span></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="border-l-4 border-slate-900 bg-slate-50 px-3 py-1.5"><h3 className="text-[11px] font-black uppercase">4. Fixed Appliance Loads</h3></div>
                <div className="mt-1 space-y-0.5 pl-4">
                  {[
                    ['Dishwasher', data.dishwasherVA],
                    ['Disposal', data.disposalVA],
                    ['Compactor', data.compactorVA],
                    [`Water Heater${data.isWaterHeaterGas ? ' (GAS)' : ''}`, data.isWaterHeaterGas ? 0 : data.waterHeaterVA],
                    ['Hydromassage Tub', data.hydroTubVA],
                    ['Microwave Oven', data.microwaveVA],
                    ['Built-in Vacuum', data.builtInVacVA],
                    ...data.customFixedLoads.map((l) => [l.name || 'Custom Load', l.va]),
                  ].map(([l, v]) => (
                    <div key={String(l)} className="flex justify-between border-b border-slate-100 pb-0.5 text-[10.5px]">
                      <span className="text-slate-600">{l}</span>
                      <span className="font-mono font-bold">{Math.round(Number(v)).toLocaleString()} VA</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-1 text-xs font-black uppercase"><span>Subtotal</span><span className="font-mono">{Math.round(calcs.fixedTotal).toLocaleString()} VA</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t-2 border-slate-200 pt-4">
            <div className="flex justify-between text-sm font-black uppercase"><span>5. Gross Optional Subtotal (1–4)</span><span className="font-mono">{Math.round(calcs.optionalSubtotal).toLocaleString()} VA</span></div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-12">
            <div>
              <div className="border-l-4 border-slate-900 bg-slate-50 px-3 py-1.5"><h3 className="text-[11px] font-black uppercase">6. Demand Factors</h3></div>
              <div className="mt-1 space-y-0.5 pl-4 text-[10.5px]">
                <div className="flex justify-between border-b border-slate-100 pb-0.5"><span className="text-slate-600">First 10,000 VA @ 100%</span><span className="font-mono font-bold">{Math.round(calcs.first10k).toLocaleString()} VA</span></div>
                <div className="flex justify-between border-b border-slate-100 pb-0.5"><span className="text-slate-600">Remainder @ 40%</span><span className="font-mono font-bold">{Math.round(calcs.balance * 0.4).toLocaleString()} VA</span></div>
                <div className="flex justify-between pt-1 text-xs font-black uppercase"><span>Result</span><span className="font-mono">{Math.round(calcs.demandFactorResult).toLocaleString()} VA</span></div>
              </div>
            </div>
            <div>
              <div className="border-l-4 border-slate-900 bg-slate-50 px-3 py-1.5"><h3 className="text-[11px] font-black uppercase">7. Heating / AC (Largest)</h3></div>
              <div className="mt-1 space-y-0.5 pl-4 text-[10.5px]">
                <div className="flex justify-between border-b border-slate-100 pb-0.5"><span className="text-slate-600">Heating</span><span className="font-mono font-bold">{Math.round(data.heatingVA).toLocaleString()} VA</span></div>
                <div className="flex justify-between border-b border-slate-100 pb-0.5"><span className="text-slate-600">A/C</span><span className="font-mono font-bold">{Math.round(data.acVA).toLocaleString()} VA</span></div>
                <div className="flex justify-between pt-1 text-xs font-black uppercase"><span>Result (Max)</span><span className="font-mono">{Math.round(calcs.heatingACResult).toLocaleString()} VA</span></div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t-4 border-slate-900 pt-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex justify-between border-b border-slate-200 pb-2 text-[11px] font-black uppercase"><span>8. Total Optional Load (6 + 7)</span><span className="font-mono text-xl">{Math.round(calcs.totalVA).toLocaleString()} VA</span></div>
              </div>
              <div className="ml-12 flex h-32 w-[180px] shrink-0 flex-col items-center justify-center rounded-2xl border-4 border-slate-900 bg-white text-slate-900 shadow-lg">
                <p className="text-[9px] font-black uppercase tracking-widest">Recommended Service</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black italic">{calcs.minAmps.toFixed(0)}</span>
                  <span className="text-xl font-black">AMP</span>
                </div>
                <div className="mt-1 rounded border border-slate-200 bg-slate-100 px-2 py-0.5 text-[8px] font-black uppercase">NEC Minimum Size</div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-100 pt-6 text-[9px] text-slate-400">
            <p className="font-black text-slate-500">Engineering Reference: NEC 220.80</p>
            <p>Generated {new Date().toLocaleDateString()} — {CALCULATOR_DISCLAIMER}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
