import { createSignal } from "solid-js";

// 1. Load the initial value from Local Storage (if it exists)
// We use a specific key "dgp_smart_suggestion" to remember the setting.
const storedValue = localStorage.getItem("dgp_smart_suggestion") === "true";

const [smartSuggestionSignal, setSmartSuggestionInternal] = createSignal(storedValue);

// Export the "Getter" as usual
export const smartSuggestion = smartSuggestionSignal;

// 2. Export a custom "Setter" that saves to Local Storage
export const setSmartSuggestion = (value: boolean) => {
    // Update the app state
    setSmartSuggestionInternal(value);
    
    // Save to browser memory
    localStorage.setItem("dgp_smart_suggestion", String(value));
};