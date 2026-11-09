import { AppShell } from "./shared/layout/AppShell";
import { HomePage } from "./modules/home/pages/HomePage";

export function renderPage() {
  return <AppShell><HomePage /></AppShell>;
}
