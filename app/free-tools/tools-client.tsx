"use client";

import { useMemo, useState } from "react";

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function decodeJwt(token: string) {
  try {
    const parts = token.split(".");
    const payload = parts[1];
    if (!payload) return "Paste a JWT with three dot-separated parts.";
    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    
    const binString = atob(normalized);
    const bytes = Uint8Array.from(binString, (char) => char.charCodeAt(0));
    const decoded = new TextDecoder().decode(bytes);
    
    return JSON.stringify(JSON.parse(decoded), null, 2);
  } catch {
    return "Invalid JWT payload.";
  }
}

function safeBtoa(value: string) {
  if (typeof btoa === "undefined") return "";
  try {
    const bytes = new TextEncoder().encode(value);
    const binString = Array.from(bytes, (byte) => String.fromCharCode(byte)).join("");
    return btoa(binString);
  } catch {
    return "";
  }
}

function safeAtob(value: string) {
  if (typeof atob === "undefined") return "";
  try {
    const binString = atob(value);
    const bytes = Uint8Array.from(binString, (char) => char.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  } catch {
    return "Not valid Base64 input.";
  }
}

function makePassword(length: number) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*?";
  
  if (typeof window !== "undefined" && window.crypto) {
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    return Array.from(array, (val) => chars[val % chars.length]).join("");
  }
  
  // Minimal fallback in non-browser environments during SSR
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

export function ToolsClient() {
  const [jsonInput, setJsonInput] = useState('{"company":"SoftBridge Solutions","city":"Adana"}');
  const [text, setText] = useState("SoftBridge Solutions builds AI-first digital products in Adana, Türkiye.");
  const [pattern, setPattern] = useState("\\bAI\\b");
  const [jwt, setJwt] = useState("");
  const [base64, setBase64] = useState("SoftBridge Solutions");
  const [passwordLength, setPasswordLength] = useState(18);
  const [scope, setScope] = useState(3);
  const [complexity, setComplexity] = useState(3);
  const [platforms, setPlatforms] = useState(2);
  const [currency, setCurrency] = useState<"USD" | "TRY">("USD");
  const [hashText, setHashText] = useState("softbridge");
  const [hash, setHash] = useState("");
  const [uuid, setUuid] = useState("");
  const [password, setPassword] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const exchangeRate = 33.0; // Current approximate TRY/USD rate for planning baseline

  const jsonResult = useMemo(() => {
    try {
      return JSON.stringify(JSON.parse(jsonInput), null, 2);
    } catch {
      return "Invalid JSON.";
    }
  }, [jsonInput]);

  const regexResult = useMemo(() => {
    try {
      return (
        [...text.matchAll(new RegExp(pattern, "gi"))]
          .map((match) => `${match[0]} at ${match.index}`)
          .join("\n") || "No matches."
      );
    } catch {
      return "Invalid regular expression.";
    }
  }, [pattern, text]);

  const cost = useMemo(() => {
    const base = 3500 + scope * 2800 + complexity * 4200 + platforms * 2200;
    const low = base;
    const high = Math.round(base * 1.9);
    
    if (currency === "TRY") {
      return {
        low: Math.round(low * exchangeRate),
        high: Math.round(high * exchangeRate),
      };
    }
    return { low, high };
  }, [scope, complexity, platforms, currency]);

  const formattedCost = useMemo(() => {
    const formatter = new Intl.NumberFormat(currency === "TRY" ? "tr-TR" : "en-US", {
      style: "currency",
      currency: currency,
      maximumFractionDigits: 0,
    });
    return `${formatter.format(cost.low)} - ${formatter.format(cost.high)}`;
  }, [cost, currency]);

  async function generateHash() {
    const data = new TextEncoder().encode(hashText);
    const buffer = await crypto.subtle.digest("SHA-256", data);
    setHash(
      [...new Uint8Array(buffer)]
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("")
    );
  }

  return (
    <div className="tools-grid">
      <article className="tool-card wide">
        <span>JSON</span>
        <h2>JSON Formatter and Validator</h2>
        <textarea value={jsonInput} onChange={(event) => setJsonInput(event.target.value)} />
        <pre>{jsonResult}</pre>
      </article>

      <article className="tool-card">
        <span>Text</span>
        <h2>Slug Generator</h2>
        <input value={text} onChange={(event) => setText(event.target.value)} />
        <pre>{slugify(text)}</pre>
      </article>

      <article className="tool-card">
        <span>Security</span>
        <h2>Secure Password Generator</h2>
        <input
          type="range"
          min="8"
          max="48"
          value={passwordLength}
          onChange={(event) => setPasswordLength(Number(event.target.value))}
        />
        <p>{passwordLength} characters</p>
        <button onClick={() => setPassword(makePassword(passwordLength))}>Generate password</button>
        <pre>{password || "Choose a length and generate."}</pre>
      </article>

      <article className="tool-card">
        <span>API</span>
        <h2>JWT Decoder</h2>
        <textarea value={jwt} onChange={(event) => setJwt(event.target.value)} placeholder="Paste a JWT..." />
        <pre>{decodeJwt(jwt)}</pre>
      </article>

      <article className="tool-card">
        <span>Encoding</span>
        <h2>Base64 Encoder / Decoder</h2>
        <input value={base64} onChange={(event) => setBase64(event.target.value)} />
        <pre>{safeBtoa(base64)}</pre>
        <pre>{safeAtob(base64)}</pre>
      </article>

      <article className="tool-card">
        <span>Regex</span>
        <h2>Regex Tester</h2>
        <input value={pattern} onChange={(event) => setPattern(event.target.value)} />
        <textarea value={text} onChange={(event) => setText(event.target.value)} />
        <pre>{regexResult}</pre>
      </article>

      <article className="tool-card">
        <span>Writing</span>
        <h2>Word Counter</h2>
        <textarea value={text} onChange={(event) => setText(event.target.value)} />
        <pre>
          {text.trim() ? text.trim().split(/\s+/).length : 0} words · {text.length} characters
        </pre>
      </article>

      <article className="tool-card">
        <span>Identity</span>
        <h2>UUID Generator</h2>
        <button onClick={() => setUuid(crypto.randomUUID())}>Generate UUID</button>
        <button onClick={() => navigator.clipboard?.writeText(uuid)}>Copy UUID</button>
        <pre>{uuid || "Click generate."}</pre>
      </article>

      <article className="tool-card">
        <span>Time</span>
        <h2>Unix Time Converter</h2>
        <button
          onClick={() =>
            setTimestamp(
              `${Math.floor(Date.now() / 1000)} seconds\n${new Date().toISOString()}`
            )
          }
        >
          Convert current time
        </button>
        <pre>{timestamp || "Click to generate current Unix time."}</pre>
      </article>

      <article className="tool-card">
        <span>Security</span>
        <h2>SHA-256 Hash Generator</h2>
        <input value={hashText} onChange={(event) => setHashText(event.target.value)} />
        <button onClick={generateHash}>Generate hash</button>
        <pre>{hash || "Click generate."}</pre>
      </article>

      <article className="tool-card wide">
        <span>Pricing</span>
        <h2>Software Cost Calculator</h2>
        
        <div style={{ margin: "1rem 0", display: "flex", gap: "1rem", alignItems: "center" }}>
          <span>Currency:</span>
          <button 
            type="button" 
            onClick={() => setCurrency("USD")}
            className={currency === "USD" ? "button dark" : "button"}
            style={{ padding: "0.25rem 0.75rem", fontSize: "0.85rem" }}
          >
            USD ($)
          </button>
          <button 
            type="button" 
            onClick={() => setCurrency("TRY")}
            className={currency === "TRY" ? "button dark" : "button"}
            style={{ padding: "0.25rem 0.75rem", fontSize: "0.85rem" }}
          >
            TRY (₺)
          </button>
        </div>

        <label style={{ display: "block", margin: "0.5rem 0" }}>
          Scope (1-5): {scope}
          <input
            type="range"
            min="1"
            max="5"
            value={scope}
            onChange={(event) => setScope(Number(event.target.value))}
            style={{ width: "100%" }}
          />
        </label>
        
        <label style={{ display: "block", margin: "0.5rem 0" }}>
          Complexity (1-5): {complexity}
          <input
            type="range"
            min="1"
            max="5"
            value={complexity}
            onChange={(event) => setComplexity(Number(event.target.value))}
            style={{ width: "100%" }}
          />
        </label>
        
        <label style={{ display: "block", margin: "0.5rem 0" }}>
          Platforms (1-4): {platforms}
          <input
            type="range"
            min="1"
            max="4"
            value={platforms}
            onChange={(event) => setPlatforms(Number(event.target.value))}
            style={{ width: "100%" }}
          />
        </label>

        <pre style={{ fontSize: "1.25rem", margin: "1rem 0" }}>{formattedCost} planning range</pre>
        
        <div style={{ fontSize: "0.85rem", opacity: 0.8, lineHeight: "1.4" }}>
          <p><strong>Methodology & Assumptions:</strong> Estimates are generated dynamically based on baseline developer hour allocations multiplied by scope magnitude, technical complexity, and target deployment platforms (e.g. web, iOS, Android, admin panel). This calculation assumes standard Next.js / cloud infrastructure baselines.</p>
          <p><strong>Important:</strong> This is an educational calculator for early budget planning. It is not an official commercial quote. Custom database structures, security audits, third-party license costs, and extensive AI model evaluation flows will change the scope and final pricing.</p>
        </div>
      </article>
    </div>
  );
}
