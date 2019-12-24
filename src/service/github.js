import * as githubApi from "../api/github.js";

export function getAllRepositoryByUserName(userName) {
  return githubApi.getAllRepositoryByUserName(userName).then(res => {
    debugger;
    return res.map(value => value.name);
  });
}
export function getRepository(owner, name) {
  return githubApi.getRepository(owner, name).then(res => {
    const resultTree = new Tree();
    res.tree.sort(v => v.name).forEach(resultTree.setNodeTree);
    return resultTree.getArray();
  });
}
class Tree {
  result = {};
  setNode = item => {
    const pathArr = item.path.split("/");
    const name = pathArr.pop();
    let pathNode = this.result;
    pathArr.forEach(key => {
      if (!pathNode[key]) {
        pathNode[key] = { children: {} };
      }
      pathNode = pathNode[key].children;
    });
    pathNode[name] = {
      name,
      ...item
    };
  };
  getArray = () => {
    return this.result;
  };
}

export function getMarkdownsFromGithubByUser(userName) {
  return getAllRepositoryByUserName(userName).then(reposName => {
    debugger;
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
