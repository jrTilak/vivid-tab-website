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
          <h2 className="text-xl font-semibold mb-4">Version 1.1.0 – July 26, 2025</h2>

          <h3 className="text-lg font-semibold mb-2">✨ New Features</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Support for random wallpapers to keep your new tab fresh. (#58)</li>
            <li>Quotes are now shown even when offline.</li>
            <li>Weather widget supports offline fallback mode.</li>
            <li>Polished UI for both dark and light modes.</li>
            <li>Geolocation and history permissions are now optional – you choose what to share.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">🛠 Fixes & Improvements</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fixed bookmark folder editing not updating properly. (#45)</li>
            <li>Resolved issue where weather wouldn&apos;t show offline. (#61)</li>
            <li>Fixed bug causing the welcome page to open randomly. (#65)</li>
            <li>General performance improvements and minor bug fixes.</li>
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
