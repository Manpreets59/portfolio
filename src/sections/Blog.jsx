import { useEffect, useState } from "react";

import TitleHeader from "../components/TitleHeader";
import { DEVTO_USERNAME } from "../constants";

// dev.to's public API needs no auth/key. Docs: https://developers.forem.com/api/v1
const DEVTO_API_URL = `https://dev.to/api/articles?username=${DEVTO_USERNAME}&per_page=6`;

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  useEffect(() => {
    // Fetches live from dev.to on the client, rather than baking posts
    // into the build — new posts show up here without a redeploy.
    let cancelled = false;

    const fetchPosts = async () => {
      setStatus("loading");
      try {
        const res = await fetch(DEVTO_API_URL);
        if (!res.ok) throw new Error(`dev.to API returned ${res.status}`);
        const data = await res.json();
        if (!cancelled) {
          setPosts(data);
          setStatus("success");
        }
      } catch (err) {
        console.error("Failed to load dev.to posts:", err);
        if (!cancelled) setStatus("error");
      }
    };

    fetchPosts();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="blog" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Latest Writing"
          sub="✍️ Notes from dev.to"
        />

        {status === "loading" && (
          <div className="mt-16 grid-3-cols">
            {Array.from({ length: 3 }, (_, i) => (
              <div
                key={i}
                className="card-border rounded-xl p-8 h-48 animate-pulse bg-white/5"
              />
            ))}
          </div>
        )}

        {status === "error" && (
          <p className="text-white-50 text-lg mt-16 text-center">
            Couldn't load posts right now — you can read them directly on{" "}
            <a
              href={`https://dev.to/${DEVTO_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              dev.to/{DEVTO_USERNAME}
            </a>
            .
          </p>
        )}

        {status === "success" && posts.length === 0 && (
          <p className="text-white-50 text-lg mt-16 text-center">
            No posts published yet — check back soon.
          </p>
        )}

        {status === "success" && posts.length > 0 && (
          <div className="mt-16 grid-3-cols">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="card-border rounded-xl p-8 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
              >
                {post.cover_image && (
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    className="w-full h-36 object-cover rounded-lg"
                    loading="lazy"
                  />
                )}
                <h3 className="text-white text-xl font-semibold">
                  {post.title}
                </h3>
                <p className="text-white-50 text-sm">
                  {formatDate(post.published_at)} · {post.reading_time_minutes}{" "}
                  min read
                </p>
                {post.description && (
                  <p className="text-white-50 text-lg line-clamp-3">
                    {post.description}
                  </p>
                )}
              </a>
            ))}
          </div>
        )}

        <div className="flex-center mt-10">
          <a
            href={`https://dev.to/${DEVTO_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="text-white-50 underline"
          >
            See all posts on dev.to →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
