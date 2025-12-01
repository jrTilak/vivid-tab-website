import { buttonVariants } from "@/components/ui/button";
import { GITHUB } from "@/constants";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What's New | Vivid Tab: A new tab, a new vibe.",
};

export default function WhatsNewPage() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="max-w-3xl w-full px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 underline">What&apos;s New</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Version 1.2.0 – Dec 01, 2025</h2>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Added Firefox support with major cross-browser fixes</li>
            <li>Support automatic wallpaper from Wallhaven</li>
            <li>Better bookmark handling and local file support</li>
            <li>New icons, UI polish, and welcome tab improvements</li>
            <li>Added review dialog, uninstall URL, legal links, and credits</li>
            <li>Multiple stability fixes</li>
            <li>FIX: Newline characters in notes not rendering correctly. (#78)</li>
            <li>FIX: Show terms and conditions and privacy policy on welcome page. (#81)</li>
            <li>FIX: Upgrade Tailwind to v4. (#79)</li>
            <li>FIX: Support for local links (eg: file://)</li>
          </ul>
        </section>

        <div className="mt-10">
          <Link
            target="_blank"
            href={GITHUB + "/blob/master/CHANGELOG.md"}
            className={buttonVariants()}
          >
            📜 See all changelogs
          </Link>
        </div>

        <div className="border-t border-gray-700 mt-12" />
      </div>
    </div>
  );
}
