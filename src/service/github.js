import * as githubApi from "../api/github.js";

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
  const result = {};
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
