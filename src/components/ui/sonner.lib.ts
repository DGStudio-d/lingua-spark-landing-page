import { toast as sonnerToast } from "sonner";

// Re-export toast if you want to maintain the same import pattern
// e.g. import { toast } from "@/components/ui/sonner"
// This specific export might be tricky if sonner.tsx also exports a 'toast'
// For now, let's assume it's meant to be a direct replacement or a new named export.
// The original file had `export { Toaster, toast }`.
// So we should probably export it as `toast` here too.

export const toast = sonnerToast;
