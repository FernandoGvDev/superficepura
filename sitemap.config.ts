export default {
  hostname: "https://superficiepura.com.br",

  generateRobotsTxt: true,

  robots: [
    { userAgent: "*", allow: "/" },
  ],

  extendRoutes() {
    return [
      "/",
      "/Sobre",
      "/Galeria",
    ];
  }
};
