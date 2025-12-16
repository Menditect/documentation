function findCorrectPath(data, version, tag) {
  if (version && tag) {
    let versionLinks = data.versions[version];
    if (!versionLinks) { versionLinks = data.versions['2.10']; } //if the version is not found, default to the current production version
    const path = versionLinks[tag];
    return path;
  } else if (tag) {
    const path = data.nonVersions[tag];
    if (path) return path;
    let versionLinks = data.versions['2.10'];  //if the unversioned tag cannot be found, try to find a versioned tag for the current production version
    const pathalt = versionLinks[tag];
    return pathalt;
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
    alert(err.message);
    location.replace(`${document.location.origin}/404`);
  }
})();
