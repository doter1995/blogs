import axios from "axios";
import { Promise } from "core-js";

const queryFromGithub = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/vnd.github.nebula-preview+json"
  },
  onUploadProgress: e => {
    // eslint-disable-next-line
    console.log (e);
  },
  onDownloadProgress: e => {
    // eslint-disable-next-line
    console.log (e);
  }
});
export function getBlob(fullUrl) {
  const url = fullUrl.split(".com").reverse()[0];
  if (!url) {
    return Promise.reject("this url is error");
  }
  return queryFromGithub.get(url).then(res => res.data);
}
export function getAllRepositoryByUserName(userName) {
  const url = `/users/${userName}/repos`;
  return queryFromGithub.get(url).then(res => res.data);
}

export function getRepository(owner, name) {
  const url = `/repos/${owner}/${name}/git/trees/master?recursive=4`;
  return queryFromGithub.get(url).then(res => res.data);
}
