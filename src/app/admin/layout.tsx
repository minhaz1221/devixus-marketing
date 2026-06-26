import type { Metadata } from "next";
import "./admin.css";

export const metadata: Metadata = {
  title: { default: "Devixus Admin", template: "%s · Devixus Admin" },
  robots: { index: false, follow: false },
};

/**
 * Token boundary for everything under /admin. Brand-scoped shadcn tokens live
 * in admin.css under `.admin-shell`. The auth gate + sidebar chrome live in the
 * nested `(app)` route group so /admin/login can render token-styled but
 * without the dashboard shell.
 */
export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="admin-shell">{children}</div>;
}
