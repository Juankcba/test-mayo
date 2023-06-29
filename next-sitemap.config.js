/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};