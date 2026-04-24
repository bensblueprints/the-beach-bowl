import { ORDER_URL } from "@/lib/menu";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-sand-100 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl tracking-tight">The Beach Bowl</p>
          <p className="mt-3 max-w-sm text-sm text-ink/70">
            Açaí bowls, 16oz boba, smoothies and loaded mac n' cheese. Built for
            Door County summers.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
            Menu
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#bowls" className="hover:text-acai-700">Açaí Bowls</a></li>
            <li><a href="#boba" className="hover:text-coral-700">Boba Tea</a></li>
            <li><a href="#smoothies" className="hover:text-seafoam-700">Smoothies</a></li>
            <li><a href="#mac" className="hover:text-sand-500">Loaded Mac</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
            Visit
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={ORDER_URL} target="_blank" rel="noreferrer" className="hover:text-acai-700">
                Order Online
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thebeachbowldc/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-acai-700"
              >
                Instagram
              </a>
            </li>
            <li>Door County, WI</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-ink/10 px-6 pt-6 text-xs text-ink/50 md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} The Beach Bowl.</span>
        <span>Made with açaí, sun & a little salt.</span>
      </div>
    </footer>
  );
}
