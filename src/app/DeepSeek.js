'use client'

import { useState } from "react";

export default function DeepSeek() {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState(null);
    const [open, setOpen] = useState(false);

    const handleSearch = async () => {
        if (!query) return;
        try {
            const response = await fetch(`https://api.deepseek.com/search?q=${encodeURIComponent(query)}`);
            const data = await response.json();
            setResult(data);
            setOpen(true);
        } catch (error) {
            console.error("Search failed", error);
            setResult({ error: "Failed to fetch results" });
            setOpen(true);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <div style={{ display: "flex", gap: "10px" }}>
                <input
                    type="text"
                    placeholder="Search DeepSeek..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ padding: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
                />
                <button onClick={handleSearch} style={{ padding: "5px 10px", cursor: "pointer" }}>Search</button>
            </div>

            {open && (
                <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "white", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
                    <h2>Search Results</h2>
                    <div style={{ padding: "10px", maxWidth: "400px", maxHeight: "300px", overflowY: "auto" }}>
                        {result ? (
                            <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{JSON.stringify(result, null, 2)}</pre>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <button onClick={() => setOpen(false)} style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer" }}>Close</button>
                </div>
            )}
        </div>
    );
}
