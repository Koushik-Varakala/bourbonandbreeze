import React, { useEffect, useState } from "react";

export default function InstagramFeed({ posts = [] }) {
  // Example default posts (you already supplied these)
  const defaultPosts = [
    "https://www.instagram.com/p/DN7o4fyEgbw/",
    "https://www.instagram.com/p/DN7oxlHEr5y/",
    "https://www.instagram.com/p/DN7opTPkq6L/"
  ];

  const permalinks = posts.length ? posts : defaultPosts;

  const [embedReady, setEmbedReady] = useState(false);
  const [embedFailed, setEmbedFailed] = useState(false);

  useEffect(() => {
    let attempts = 0;
    const interval = setInterval(() => {
      attempts += 1;
      if (window.instgrm && window.instgrm.Embeds && typeof window.instgrm.Embeds.process === "function") {
        try {
          window.instgrm.Embeds.process();
          setEmbedReady(true);
          clearInterval(interval);
        } catch (err) {
          // keep trying
        }
      }
      // give up after ~5 seconds (10 attempts * 500ms)
      if (attempts >= 10) {
        clearInterval(interval);
        // if not processed, mark as failed so fallback UI shows
        setEmbedFailed(true);
      }
    }, 500);

    // clean
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-center text-3xl text-[#CBA875] mb-8">Social Highlights</h2>

        {/* If embed succeeded (or still trying), render blockquotes.
            If embedFailed -> show fallback link-cards */}
        {!embedFailed ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {permalinks.map((link, i) => (
              <blockquote
                key={i}
                className="instagram-media w-full"
                data-instgrm-permalink={link}
                data-instgrm-version="14"
                style={{
                  background: "#000",
                  border: 0,
                  margin: "0 auto",
                  padding: 0,
                  width: "100%",
                  maxWidth: "540px",
                  minWidth: "326px",
                  borderRadius: "10px",
                  overflow: "hidden"
                }}
              ></blockquote>
            ))}
          </div>
        ) : (
          <div>
            <p className="text-center text-gray-300 mb-6">
              Instagram embeds could not be loaded. Possible reasons: account is private, the post was removed, or Instagram blocked embedding. You can still open the posts directly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {permalinks.map((link, i) => (
                <div
                  key={`fallback-${i}`}
                  className="p-4 bg-[#0F1917] border border-[#CBA875]/20 rounded-md flex flex-col items-start"
                >
                  {/* Placeholder thumbnail (user can replace with downloaded images) */}
                  <div className="w-full h-44 bg-gray-800 rounded-sm mb-4 flex items-center justify-center text-gray-500">
                    <span>Preview unavailable</span>
                  </div>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#CBA875] font-semibold mb-2"
                  >
                    Open on Instagram
                  </a>
                  <p className="text-sm text-gray-400 mb-4 break-all">{link}</p>
                  <div className="mt-auto w-full flex gap-2">
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full text-center px-3 py-2 bg-[#CBA875] text-black rounded-sm font-medium"
                    >
                      Open
                    </a>
                    <button
                      onClick={() => navigator.clipboard && navigator.clipboard.writeText(link)}
                      className="w-full text-center px-3 py-2 border border-[#CBA875]/30 rounded-sm text-sm"
                    >
                      Copy link
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* If embedReady is false and embedFailed false — show a subtle loading note */}
        {!embedReady && !embedFailed && (
          <p className="text-center text-gray-400 mt-6">Loading Instagram posts…</p>
        )}
      </div>
    </section>
  );
}
