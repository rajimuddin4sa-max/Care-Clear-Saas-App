"use client"

import { useRef, useState } from "react"
import {
  FileText,
  Upload,
  Sparkles,
  Loader2,
  ClipboardList,
  BookOpen,
  AlertTriangle,
  MessageSquareQuote,
  Copy,
  Check,
  RotateCcw,
} from "lucide-react"

const SAMPLE_BILL = `MERCY GENERAL HOSPITAL — STATEMENT OF ACCOUNT
Patient: [Parent]  |  Account #: 88301-A
Date of Service: 03/14

99285  ED VISIT, HIGH COMPLEXITY ............... $2,480.00
80053  METABOLIC PANEL, COMPREHENSIVE .......... $412.00
71046  RADIOLOGIC EXAM, CHEST 1 VIEW ........... $685.00
J1885  KETOROLAC INJECTION 15MG ................ $95.00
99285  ED VISIT, HIGH COMPLEXITY ............... $2,480.00   (dup)
A9270  NON-COVERED SUPPLY ITEM ................. $340.00
                                    TOTAL DUE:   $6,492.00`

type Result = {
  summary: string
  jargon: { code: string; meaning: string }[]
  overcharges: { label: string; detail: string; amount: string }[]
  dispute: string
}

const RESULT: Result = {
  summary:
    "This is an emergency room bill for a single visit. You are being charged $6,492 total. The most important issue: the main ER visit charge appears twice, and one line is a non-covered supply that your insurance should typically absorb. After removing the likely errors, this bill should be closer to $3,672.",
  jargon: [
    { code: "99285", meaning: "A high-complexity emergency room visit — the doctor's evaluation and time." },
    { code: "80053", meaning: "A comprehensive blood test panel checking kidneys, liver, and blood sugar." },
    { code: "71046", meaning: "A chest X-ray, single view." },
    { code: "J1885", meaning: "Ketorolac (Toradol) — a strong anti-inflammatory pain injection." },
  ],
  overcharges: [
    {
      label: "Duplicate ER visit charge",
      detail: "Code 99285 is billed twice for the same visit. You should only be charged once.",
      amount: "$2,480.00",
    },
    {
      label: "Non-covered supply (A9270)",
      detail: "Generic 'non-covered supply' codes are frequently unbundled in error. Ask for an itemized description.",
      amount: "$340.00",
    },
  ],
  dispute:
    "Hello, I'm reviewing account #88301-A for a date of service of 03/14. I've identified a duplicate charge for code 99285 (ER visit) that appears twice for a single visit, and I am requesting the duplicate line of $2,480 be removed. I'm also requesting an itemized description for code A9270 ($340), as unspecified 'non-covered supply' charges must be documented. Please send a corrected, itemized statement before any payment is due. Thank you.",
}

export function BillDecoder() {
  const [text, setText] = useState("")
  const [fileName, setFileName] = useState<string | null>(null)
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle")
  const [copied, setCopied] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setFileName(file.name)
    setText(SAMPLE_BILL)
  }

  const loadSample = () => {
    setText(SAMPLE_BILL)
    setFileName(null)
  }

  const decode = () => {
    if (!text.trim()) return
    setStatus("loading")
    window.setTimeout(() => setStatus("done"), 1600)
  }

  const reset = () => {
    setStatus("idle")
    setText("")
    setFileName(null)
    setCopied(false)
  }

  const copyDispute = async () => {
    try {
      await navigator.clipboard.writeText(RESULT.dispute)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div
      id="decoder"
      className="w-full rounded-2xl border border-border bg-card p-4 shadow-xl shadow-primary/5 sm:p-6"
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <Sparkles className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground">Live Bill Decoder</p>
          <p className="text-xs text-muted-foreground">No sign-up. Try it with sample data.</p>
        </div>
      </div>

      {status !== "done" ? (
        <div className="space-y-3">
          <label htmlFor="bill-text" className="sr-only">
            Paste your medical bill text
          </label>
          <textarea
            id="bill-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste the text from your hospital bill or insurance letter here…"
            rows={6}
            className="w-full resize-none rounded-xl border border-input bg-background p-3 font-mono text-xs leading-relaxed text-foreground outline-none transition-colors placeholder:font-sans placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20"
          />

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Upload className="h-3.5 w-3.5" />
              Upload a bill
            </button>
            <button
              type="button"
              onClick={loadSample}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              <FileText className="h-3.5 w-3.5" />
              Use sample bill
            </button>
            {fileName && (
              <span className="truncate text-xs text-muted-foreground">{fileName}</span>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.png,.jpg,.jpeg,.txt"
              onChange={handleFile}
              className="hidden"
            />
          </div>

          <button
            type="button"
            onClick={decode}
            disabled={!text.trim() || status === "loading"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Decoding your bill…
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Decode Bill Now
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <ResultBlock
            icon={<ClipboardList className="h-4 w-4" />}
            title="Plain-English Summary"
            tone="navy"
          >
            <p className="text-sm leading-relaxed text-foreground">{RESULT.summary}</p>
          </ResultBlock>

          <ResultBlock
            icon={<BookOpen className="h-4 w-4" />}
            title="Jargon Explained"
            tone="teal"
          >
            <ul className="space-y-2">
              {RESULT.jargon.map((j) => (
                <li key={j.code} className="flex gap-2 text-sm">
                  <span className="mt-0.5 shrink-0 rounded bg-muted px-1.5 py-0.5 font-mono text-xs font-semibold text-primary">
                    {j.code}
                  </span>
                  <span className="text-muted-foreground">{j.meaning}</span>
                </li>
              ))}
            </ul>
          </ResultBlock>

          <ResultBlock
            icon={<AlertTriangle className="h-4 w-4" />}
            title="Potential Overcharges"
            tone="alert"
          >
            <ul className="space-y-2.5">
              {RESULT.overcharges.map((o) => (
                <li
                  key={o.label}
                  className="flex items-start justify-between gap-3 rounded-lg border border-destructive/20 bg-destructive/5 p-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-foreground">{o.label}</p>
                    <p className="text-xs text-muted-foreground">{o.detail}</p>
                  </div>
                  <span className="shrink-0 text-sm font-bold text-destructive">{o.amount}</span>
                </li>
              ))}
            </ul>
          </ResultBlock>

          <ResultBlock
            icon={<MessageSquareQuote className="h-4 w-4" />}
            title="Ready-to-Use Dispute Script"
            tone="navy"
          >
            <p className="rounded-lg bg-muted p-3 text-sm italic leading-relaxed text-foreground">
              &ldquo;{RESULT.dispute}&rdquo;
            </p>
            <button
              type="button"
              onClick={copyDispute}
              className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-accent" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Copy script"}
            </button>
          </ResultBlock>

          <button
            type="button"
            onClick={reset}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <RotateCcw className="h-4 w-4" />
            Decode another bill
          </button>
        </div>
      )}
    </div>
  )
}

function ResultBlock({
  icon,
  title,
  tone,
  children,
}: {
  icon: React.ReactNode
  title: string
  tone: "navy" | "teal" | "alert"
  children: React.ReactNode
}) {
  const toneClasses =
    tone === "teal"
      ? "bg-accent/10 text-accent"
      : tone === "alert"
        ? "bg-destructive/10 text-destructive"
        : "bg-primary/10 text-primary"

  return (
    <div className="rounded-xl border border-border bg-background p-3.5">
      <div className="mb-2.5 flex items-center gap-2">
        <span className={`flex h-6 w-6 items-center justify-center rounded-md ${toneClasses}`}>
          {icon}
        </span>
        <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      </div>
      {children}
    </div>
  )
}
