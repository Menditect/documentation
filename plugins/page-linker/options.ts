import { PluginOptions } from '@docusaurus/types';
import Joi from 'joi';

/* OPTIONS */
interface NonVersionedLinksOptions {
  /** Should be unique */
  id: string;
  /** e.g., @site/additional/01-howtos/cicd.md */
  content: string;
}
interface VersionedLinkOptions {
  /** Should be unique inside the given versions */
  id: string;
  /** e.g., application-revision.md */
  content: string;
  /** e.g., ['1.8.0'] */
  versions: string[] | 'ALL';
}

export interface PageLinkerOptions extends PluginOptions {
  versionedLinks: VersionedLinkOptions[];
  nonVersionedLinks: NonVersionedLinksOptions[];
}

/* JOI SCHEMA - OPTIONS */
const nonVersionedLinkOptionsSchema = Joi.object({
  id: Joi.string(),
  // Content should end with a .md file extension
  content: Joi.string().pattern(/(.*?)\.(md)$/),
});

const versionedLinkOptionsSchema = Joi.object({
  id: Joi.string(),
  // Content should end with a .md file extension
  content: Joi.string().pattern(/(.*?)\.(md)$/),
  versions: Joi.alternatives().try(
    Joi.string().valid('ALL'),
    // Should be a valid version, e.g.: 1.8.0
    Joi.array().items(Joi.string().pattern(/^([1-9]\d*|0)(\.(([1-9]\d*)|0)){2}$/)),
  ),
});

export const pageLinkerOptionsSchema = Joi.object({
  versionedLinks: Joi.array().items(versionedLinkOptionsSchema),
  nonVersionedLinks: Joi.array().items(nonVersionedLinkOptionsSchema),
});
