export const siteConfig = {
  name: "CarrNexa",
  alternateNames: ["CNX", "CarrNexa Systems"],
  siteUrl: "https://carrnexa.com",
  githubUrl: "https://github.com/carrnexa",
  repositoryUrl: "https://github.com/carrnexa/www-ui",
  socialImagePath: "/assets/icons/android-chrome-512x512.png",
  email: "hello@carrnexa.com",
  licensePath: "/legal/license.html",
  sourceCodeLicenseUrl: "https://github.com/carrnexa/www-ui/blob/main/LICENSE-CODE",
  contentLicenseUrl: "https://github.com/carrnexa/www-ui/blob/main/LICENSE-CONTENT",
} as const;

export function toAbsoluteUrl(path: string, baseUrl: string | URL = siteConfig.siteUrl) {
  return new URL(path, baseUrl).toString();
}
