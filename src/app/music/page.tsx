import Layout from "../LayoutHeader";

export default function MusicPage() {
  const videos = [
    {
      id: "S5vAe1xonH4",
      title: "Acoustic Performance",
      type: "full",
    },
    {
      id: "xMhKqeG9IHQ",
      title: "Original Composition",
      type: "full",
    },
    {
      id: "GP7YnSJktv4",
      title: "Short Performance",
      type: "shorts",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen w-full overflow-x-hidden bg-base-100 p-8 text-base-content">
        <div className="relative mx-auto max-w-7xl">
          {/* Subtle decorative elements */}
          <div className="absolute -left-4 -top-4 h-24 w-24 border-l-4 border-t-4 border-primary/20 opacity-30"></div>
          <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-4 border-r-4 border-secondary/20 opacity-30"></div>

          <h1 className="mb-8 text-center text-4xl font-semibold text-white">
            Music
          </h1>

          <p className="mx-auto mb-12 max-w-xl text-center text-lg text-white/75">
            Exploring music through original compositions and acoustic
            performances
          </p>

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
                    {video.type === "shorts"
                      ? "YouTube Short"
                      : "Full Performance"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.youtube.com/channel/UCbnaem81HGPMeyh3eOMSBfA?app=desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-wide"
            >
              View Full YouTube Channel
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
