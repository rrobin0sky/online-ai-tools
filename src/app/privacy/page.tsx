'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPage() {
  const [lang, setLang] = useState<'zh' | 'en'>('en'); // default en for international compliance
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div className="flex-1 flex flex-col bg-grid-pattern min-h-screen">
      <Header
        lang={lang}
        onToggleLang={() => setLang(lang === 'zh' ? 'en' : 'zh')}
        darkMode={darkMode}
        onToggleDarkMode={() => {
          setDarkMode(!darkMode);
          document.documentElement.classList.toggle('dark');
        }}
      />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {lang === 'zh' ? '返回首页' : 'Back to Home'}
        </Link>

        <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-blue-500" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {lang === 'zh' ? '隐私政策 (Privacy Policy)' : 'Privacy Policy'}
              </h1>
              <p className="text-xs text-slate-500">Last updated: September 2026</p>
            </div>
          </div>

          <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">1. Overview</h2>
              <p>
                At ArchIcons (accessible from bin0sky.tech), one of our main priorities is the privacy of our visitors.
                This Privacy Policy document outlines the types of information that is collected and recorded by ArchIcons and how we use it.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">2. Log Files & Analytics</h2>
              <p>
                ArchIcons follows a standard procedure of using log files. These files log visitors when they visit websites.
                The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP),
                date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">3. Cookies & Web Beacons</h2>
              <p>
                Like any other website, ArchIcons may use &apos;cookies&apos; to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited.
                The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and other information.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">4. Google DoubleClick DART Cookie & Third-Party Advertising</h2>
              <p>
                Google is one of our third-party vendors. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to bin0sky.tech and other sites on the internet.
                Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL:
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 underline ml-1"
                >
                  https://policies.google.com/technologies/ads
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">5. Third Party Privacy Policies</h2>
              <p>
                ArchIcons&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">6. Consent</h2>
              <p>
                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
