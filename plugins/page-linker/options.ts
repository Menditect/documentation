import { PluginOptions } from '@docusaurus/types';

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
