export type WorkspaceColor = {
  hex: string;
  name: string;
  savedAt: number;
};

export type WorkspacePalette = {
  id: string;
  name: string;
  colors: string[];
  createdAt: number;
};

export type WorkspaceCollection = {
  id: string;
  name: string;
  colors: string[];
  createdAt: number;
};

const STORAGE_KEYS = {
  FAVORITES: 'cci_favorites',
  HISTORY: 'cci_history',
  PALETTES: 'cci_palettes',
  COLLECTIONS: 'cci_collections'
};

function safeGet<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function safeSet<T>(key: string, value: T): boolean {
  if (typeof window === 'undefined') return false;
  try {
    localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent('cci-workspace-updated', { detail: { key } }));
    return true;
  } catch {
    return false;
  }
}

export function getFavorites(): WorkspaceColor[] {
  return safeGet<WorkspaceColor[]>(STORAGE_KEYS.FAVORITES, []);
}

export function isFavorite(hex: string): boolean {
  const norm = hex.toUpperCase();
  return getFavorites().some((item) => item.hex.toUpperCase() === norm);
}

export function toggleFavorite(hex: string, name = 'Custom Color'): boolean {
  const norm = hex.toUpperCase();
  const current = getFavorites();
  const exists = current.some((item) => item.hex.toUpperCase() === norm);
  let updated: WorkspaceColor[];
  if (exists) {
    updated = current.filter((item) => item.hex.toUpperCase() !== norm);
  } else {
    updated = [{ hex: norm, name, savedAt: Date.now() }, ...current].slice(0, 100);
  }
  safeSet(STORAGE_KEYS.FAVORITES, updated);
  return !exists;
}

export function removeFavorite(hex: string): void {
  const norm = hex.toUpperCase();
  const updated = getFavorites().filter((item) => item.hex.toUpperCase() !== norm);
  safeSet(STORAGE_KEYS.FAVORITES, updated);
}

export function getHistory(): WorkspaceColor[] {
  return safeGet<WorkspaceColor[]>(STORAGE_KEYS.HISTORY, []);
}

export function addToHistory(hex: string, name = 'Sampled Color'): void {
  const norm = hex.toUpperCase();
  const current = getHistory().filter((item) => item.hex.toUpperCase() !== norm);
  const updated = [{ hex: norm, name, savedAt: Date.now() }, ...current].slice(0, 50);
  safeSet(STORAGE_KEYS.HISTORY, updated);
}

export function clearHistory(): void {
  safeSet(STORAGE_KEYS.HISTORY, []);
}

export function getSavedPalettes(): WorkspacePalette[] {
  return safeGet<WorkspacePalette[]>(STORAGE_KEYS.PALETTES, []);
}

export function savePalette(name: string, colors: string[]): WorkspacePalette {
  const current = getSavedPalettes();
  const palette: WorkspacePalette = {
    id: 'pal_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    name: name.trim() || 'Untitled Palette',
    colors: colors.map((c) => c.toUpperCase()),
    createdAt: Date.now()
  };
  safeSet(STORAGE_KEYS.PALETTES, [palette, ...current].slice(0, 50));
  return palette;
}

export function deletePalette(id: string): void {
  const current = getSavedPalettes();
  safeSet(STORAGE_KEYS.PALETTES, current.filter((p) => p.id !== id));
}

export function getCollections(): WorkspaceCollection[] {
  return safeGet<WorkspaceCollection[]>(STORAGE_KEYS.COLLECTIONS, []);
}

export function createCollection(name: string, colors: string[] = []): WorkspaceCollection {
  const current = getCollections();
  const col: WorkspaceCollection = {
    id: 'col_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    name: name.trim() || 'New Collection',
    colors: colors.map((c) => c.toUpperCase()),
    createdAt: Date.now()
  };
  safeSet(STORAGE_KEYS.COLLECTIONS, [col, ...current].slice(0, 30));
  return col;
}

export function renameCollection(id: string, newName: string): void {
  const current = getCollections().map((col) => (col.id === id ? { ...col, name: newName.trim() || col.name } : col));
  safeSet(STORAGE_KEYS.COLLECTIONS, current);
}

export function deleteCollection(id: string): void {
  const current = getCollections().filter((col) => col.id !== id);
  safeSet(STORAGE_KEYS.COLLECTIONS, current);
}

export function addColorToCollection(id: string, hex: string): void {
  const norm = hex.toUpperCase();
  const current = getCollections().map((col) => {
    if (col.id !== id) return col;
    if (col.colors.includes(norm)) return col;
    return { ...col, colors: [...col.colors, norm] };
  });
  safeSet(STORAGE_KEYS.COLLECTIONS, current);
}

export function removeColorFromCollection(id: string, hex: string): void {
  const norm = hex.toUpperCase();
  const current = getCollections().map((col) => {
    if (col.id !== id) return col;
    return { ...col, colors: col.colors.filter((c) => c !== norm) };
  });
  safeSet(STORAGE_KEYS.COLLECTIONS, current);
}

export function clearAllWorkspaceData(): void {
  if (typeof window === 'undefined') return;
  try {
    Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k));
    window.dispatchEvent(new CustomEvent('cci-workspace-updated', { detail: { cleared: true } }));
  } catch {}
}
