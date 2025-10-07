// מחזיר כתובת נכונה לפי BASE_URL של Vite (למשל /matan-refaely/)
export const asset = (path) => new URL(path, import.meta.env.BASE_URL).toString();
