// metadata.js
/**
 * @typedef {Object} Metadata
 * @property {{ default: string; template: string; }} title
 * @property {string} description
 * @property {Object} robots
 * @property {string} icons.icon
 * @property {string} icons.shortcut
 * @property {string} icons.apple
 * @property {string} manifest
 * @property {Object} openGraph
 * @property {string} openGraph.url
 * @property {string} openGraph.title
 * @property {string} openGraph.description
 * @property {string} openGraph.siteName
 * @property {string[]} openGraph.images
 * @property {string} openGraph.type
 * @property {string} openGraph.locale
 * @property {Object} twitter
 * @property {string} twitter.card
 * @property {string} twitter.title
 * @property {string} twitter.description
 * @property {string[]} twitter.images
 * @property {string} twitter.creator
 * @property {Object[]} authors
 * @property {string} authors[].name
 * @property {string} authors[].url
 */

import { siteConfig } from '@/constant/config';

const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  // ... Add other metadata properties here
};

export default metadata;
