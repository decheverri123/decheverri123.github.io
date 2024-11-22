// src/app/projects/page.tsx

import Layout from "../LayoutHeader";
import Link from "next/link";
import { FaYoutube, FaTiktok } from "react-icons/fa";

export default function ProjectsPage() {
  const videos = [
    {
      id: "S5vAe1xonH4",
      title: "Not Like Us",
      subtitle: "Guitar Cover",
    },
    {
      id: "xMhKqeG9IHQ",
      title: "Reminiscence (ft. Minna Akutsu)",
      subtitle: "Original",
    },
    {
      id: "GP7YnSJktv4",
      title: "Don't Cry",
      subtitle: "YouTube Short",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen w-full overflow-x-hidden bg-base-100 p-8">
        <div className="relative mx-auto max-w-7xl">
          {/* Subtle decorative elements */}
          <div className="absolute -left-4 -top-4 h-24 w-24 border-l-4 border-t-4 border-primary/20 opacity-30"></div>
          <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-4 border-r-4 border-secondary/20 opacity-30"></div>

          <h1 className="mb-8 text-center text-4xl font-semibold text-primary">
            Projects
          </h1>

          <h2 className="mb-8 text-center text-3xl font-semibold text-secondary">
            iOS Apps
          </h2>

          <div className="mx-auto grid max-w-3xl items-center justify-items-center gap-8 px-4 md:grid-cols-1 lg:max-w-5xl lg:grid-cols-2">
            {/* Sparking Teams Card */}
            <div className="group card image-full w-96 bg-base-200 shadow-xl transition hover:scale-105 hover:shadow-2xl">
              <figure className="opacity-70 transition-opacity group-hover:opacity-100">
                <img
                  src="/assets/apps/sparking/logo.png"
                  alt="Sparking Teams logo"
                  suppressHydrationWarning={true}
                  className="transition-transform group-hover:scale-110"
                />
              </figure>
              <div className="card-body">
                <h2 className="group-hover:text-accent-focus card-title text-accent transition-colors">
                  Sparking Teams
                </h2>
                <p className="text-md font-medium text-base-content/75 transition-colors group-hover:text-base-content">
                  Build and manage teams with a powerful character database and
                  advanced filtering tools for the new Sparking Teams game.
                </p>
                <div className="card-actions justify-center">
                  <Link href="/apps/sparking-teams">
                    <button className="btn btn-secondary">View Project</button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Meditatio Card */}
            <div className="group card image-full w-96 bg-base-200 shadow-xl transition hover:scale-105 hover:shadow-2xl">
              <figure className="opacity-70 transition-opacity group-hover:opacity-100">
                <img
                  src="/assets/apps/meditatio/logo.png"
                  alt="Meditatio logo"
                  suppressHydrationWarning={true}
                  className="transition-transform group-hover:scale-110"
                />
              </figure>
              <div className="card-body">
                <h2 className="group-hover:text-accent-focus card-title text-accent transition-colors">
                  Meditatio
                </h2>
                <p className="text-md font-medium text-base-content/75 transition-colors group-hover:text-base-content">
                  Reflect on daily experiences with structured journaling rooted
                  in Stoic philosophy.
                </p>
                <div className="card-actions justify-center">
                  <Link href="/apps/meditatio">
                    <button className="btn btn-secondary">View Project</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Divider between iOS Apps and Music */}
          <div className="relative my-16 flex items-center justify-center">
            <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
            <div className="relative z-10 bg-base-100 px-6 text-center">
              <h2 className="text-3xl font-semibold text-secondary">Music</h2>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group card bg-base-200 shadow-xl transition hover:scale-105 hover:shadow-2xl"
              >
                <div className="card-body items-center text-center">
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <h2 className="group-hover:text-secondary-focus card-title mt-4 text-secondary transition-colors">
                    {video.title}
                  </h2>
                  <p className="text-base-content/75 transition-colors group-hover:text-base-content">
                    {video.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 flex flex-col items-center justify-center space-y-8 px-4">
            {/* Visit My Channels Banner */}
            <div className="w-full max-w-4xl rounded-xl bg-gradient-to-r from-secondary/10 to-primary/10 p-6 text-center shadow-lg transition-all hover:scale-[1.01] hover:shadow-xl">
              <h2 className="text-3xl font-bold text-secondary">
                Visit My Channels
              </h2>
              <p className="mt-2 text-base-content/75">
                Explore more music, covers, and original compositions
              </p>
            </div>

            {/* Social Media Channel Cards */}
            <div className="grid max-w-3xl items-center justify-items-center gap-8 px-4 md:grid-cols-1 lg:max-w-5xl lg:grid-cols-2">
              {/* YouTube Channel Card */}
              <a
                href="https://www.youtube.com/channel/UCbnaem81HGPMeyh3eOMSBfA?app=desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="group card w-96 bg-base-200 shadow-xl transition hover:scale-105 hover:shadow-2xl"
              >
                <div className="card-body items-center justify-center text-center">
                  <FaYoutube className="text-8xl text-red-600 opacity-70 transition-all group-hover:scale-110 group-hover:opacity-100" />
                  <h3 className="card-title mt-4 text-secondary">
                    YouTube Channel
                  </h3>
                </div>
              </a>

              {/* TikTok Channel Card */}
              <a
                href="https://www.tiktok.com/@danny.echeverri?_t=8rc7QG4J3tO&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group card w-96 bg-base-200 shadow-xl transition hover:scale-105 hover:shadow-2xl"
              >
                <div className="card-body items-center justify-center text-center">
                  <FaTiktok className="text-8xl text-black opacity-70 transition-all group-hover:scale-110 group-hover:opacity-100 dark:text-white" />
                  <h3 className="card-title mt-4 text-secondary">
                    TikTok Channel
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
