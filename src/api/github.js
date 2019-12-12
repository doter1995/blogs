const domain = "https://api.github.com";

const queryFromGithub = url => {
  return fetch(url, {
    method: "Get",
    headers: {
      "Content-Type": "application/vnd.github.nebula-preview+json"
    }
  }).then(res => res.json());
};

export function getAllRepositoryByUserName(userName) {
  const url = domain + `/users/${userName}/repos`;
  return queryFromGithub(url);
}

export function getRepository(owner, name) {
  const url = domain + `/repos/${owner}/${name}/git/trees/master?recursive=4`;
  return queryFromGithub(url);
}
