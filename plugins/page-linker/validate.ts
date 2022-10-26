import { PageLinkerOptions, pageLinkerOptionsSchema } from './options';

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
