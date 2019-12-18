import axios from "axios";

const queryFromGithub = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/vnd.github.nebula-preview+json"
  },
  onUploadProgress: e => {
    console.log(e);
  },
  onDownloadProgress: e => {
    console.log(e);
  }
});

export function getAllRepositoryByUserName(userName) {
  const url = `/users/${userName}/repos`;
  return queryFromGithub.get(url).then(res => res.data);
}

export function getRepository(owner, name) {
  const url = `/repos/${owner}/${name}/git/trees/master?recursive=4`;
  return queryFromGithub.get(url).then(res => res.data);
}
