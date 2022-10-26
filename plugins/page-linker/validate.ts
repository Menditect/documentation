import Joi from 'joi';
import { PageLinkerOptions } from './options';

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

const pageLinkerOptionsSchema = Joi.object({
  versionedLinks: Joi.array().items(versionedLinkOptionsSchema),
  nonVersionedLinks: Joi.array().items(nonVersionedLinkOptionsSchema),
});

/* VALIDATE OPTIONS */
function hasDuplicates<T>(input: Array<T>) {
  return new Set(input).size !== input.length;
}

function checkNonVersionLinks(options: PageLinkerOptions) {
  if (hasDuplicates(options.nonVersionedLinks.map((x) => x.id))) {
    throw new Error('The non-versioned links contains a duplicate id');
  }
}

function checkVersionLinks(options: PageLinkerOptions) {
  const versions = new Set(options.versionedLinks.flatMap((x) => x.versions));
  for (const version of versions) {
    const versionedLinks = options.versionedLinks.filter((x) => x.versions.includes(version) || x.versions === 'ALL');
    if (hasDuplicates(versionedLinks.map((x) => x.id))) {
      throw new Error(`The versioned links contains a duplicate id in version '${version}'`);
    }
  }
}

export function validateOptions({ options, validate }: { options: PageLinkerOptions; validate: any }) {
  const validatedOptions = validate(pageLinkerOptionsSchema, options);

  checkNonVersionLinks(options);
  checkVersionLinks(options);

  return validatedOptions;
}
