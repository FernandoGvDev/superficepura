export default {
  hostname: "https://superficiepura.com.br",
  generateRobotsTxt: true,

  robots: [
    { userAgent: "*", allow: "/" },
  ],

  routes: [
    { path: "/", changefreq: "weekly", priority: 1.0 },
    { path: "/Sobre", changefreq: "monthly", priority: 0.8 },
    { path: "/Galeria", changefreq: "monthly", priority: 0.8 },
  ],
};
