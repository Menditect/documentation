// @ts-check

function findCorrectPath(data, version, tag) {
  if (version && tag) {
    const versionLinks = data.versions[version];
    const path = versionLinks[tag];
    return path;
  } else if (tag) {
    const path = data.nonVersions[tag];
    return path;
  }
}

(async () => {
  const params = new URL(`${document.location}`).searchParams;
  const tag = params.get('tag');
  const version = params.get('version');

  console.log('tag', tag);
  console.log('version', version);

  const indexUrl = `${document.location.origin}/page-linker-index.json`;
  console.log(indexUrl);
  const res = await fetch(indexUrl);
  const data = await res.json();
  console.log(data);

  const path = findCorrectPath(data, version, tag);
  console.log(path);
  const url = `${document.location.origin}/${path}`;
  console.log(url);

  location.replace(url);
})();
