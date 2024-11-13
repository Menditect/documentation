function findCorrectPath(data, version, tag) {
  if (version && tag) {
    const versionLinks = data.versions[version];
    const path = versionLinks[tag];
    if (path) {
      alert("Using tag " + tag + " navigating to " + path);
    } else {
      alert("Using tag " + tag + " navigating to " + versionLinks['2.9']);
    }
    return path ? path : versionLinks['2.9'];
  } else if (tag) {
    const path = data.nonVersions[tag];
    return path;
  }
}

async function getPageLinkerIndex() {
  const indexUrl = `${document.location.origin}/page-linker-index.json`;
  const res = await fetch(indexUrl);
  const data = await res.json();
  return data;
}

async function getRedirectURL() {
  const params = new URL(`${document.location}`).searchParams;
  const tag = params.get('tag');
  const version = params.get('version');

  const data = await getPageLinkerIndex();
  const path = findCorrectPath(data, version, tag);
  const url = path ? `${document.location.origin}${path}` : `${document.location.origin}/404`;

  return url;
}

(async () => {
  try {
    const url = await getRedirectURL();
    location.replace(url);
  } catch (err) {
    location.replace(`${document.location.origin}/404`);
  }
})();
