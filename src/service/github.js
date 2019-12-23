import * as githubApi from "../api/github.js";
import { generateCodeFrame } from "vue-template-compiler";

export function getAllRepositoryByUserName(userName) {
  return githubApi.getAllRepositoryByUserName(userName).then(res => {
    return res.map(value => value.name);
  });
}
export function getRepository(owner, name) {
  return githubApi.getRepository(owner, name).then(res => {
    const result = getTree(res.tree);
    return result;
  });
}

const getTree = data => {
  const result = [];
  data
    .filter(v => v.type === "tree")
    .forEach(item => {
      const pathArr = item.path.split("/");
      pathArr;
    });
  data.forEach(item => {
    if (item.type === "blob" && item.path.endsWith(".md")) {
      const pathArr = item.path.split("/");
      let pathNode = result;
      pathArr.forEach(key => {
        if (!pathNode[key]) {
          pathNode[key] = {};
        }
        pathNode = pathNode[key];
      });
    }
  });
  return result;
};
const getNode = (dataSet, path) => {
  const pathArr = path.split("/");
  const curData = dataSet;
  pathArr.forEach(item => {
    if(curData)
  });
};

export function getMarkdownsFromGithubByUser(userName) {
  return getAllRepositoryByUserName(userName).then(reposName => {
    const repositories = reposName.filter(name =>
      name.toLocaleLowerCase().includes("mark-down")
    );
    let queryList = repositories.map(repository =>
      getRepository("doter1995", repository)
    );
    return Promise.all(queryList).then(res => {
      return res;
    });
  });
}
