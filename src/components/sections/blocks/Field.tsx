import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const base = "peer w-full border-0 border-b-2 border-line bg-transparent px-0 pt-6 pb-2 text-base outline-none transition-colors placeholder:text-transparent focus:border-red"
const label =
  "pointer-events-none absolute top-6 left-0 origin-left text-muted transition-all duration-300 ease-out-expo peer-focus:top-0 peer-focus:text-xs peer-focus:text-red peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"

/** Floating-label input. */
export function Input({ label: text, className, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className={cn("relative block", className)}>
      <input {...props} placeholder={props.placeholder ?? " "} className={base} />
      <span className={label}>
        {text}
        {props.required && " *"}
      </span>
    </label>
  )
}

export function Textarea({ label: text, className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <label className={cn("relative block", className)}>
      <textarea {...props} className={cn(base, "min-h-36 resize-y placeholder:text-ink/30 focus:placeholder:text-ink/40")} />
      <span className="absolute top-0 left-0 text-xs text-muted">
        {text}
        {props.required && " *"}
      </span>
    </label>
  )
}

export function Select({ label: text, children, className, ...props }: SelectHTMLAttributes<HTMLSelectElement> & { label: string; children: ReactNode }) {
  return (
    <label className={cn("relative block", className)}>
      <span className="text-xs text-muted">{text}</span>
      <select {...props} className="w-full border-0 border-b-2 border-line bg-transparent py-2 text-base outline-none focus:border-red">
        {children}
      </select>
    </label>
  )
}

/** Choice chips (radio-like buttons). */
export function Choices({ label: text, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-xs text-muted">{text}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button key={o} type="button" aria-pressed={value === o} onClick={() => onChange(o)} className={cn("border px-4 py-2 text-sm font-medium transition-colors", value === o ? "border-red bg-red text-white" : "border-line hover:border-ink")}>
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  )
}
