/**
 * 扩展 VuePress 应用
 */

import install from "./install";

export default async ({ Vue, options, router, siteData }) => {
  await install(window.Vue || Vue);
};
