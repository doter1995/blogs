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
    res.tree.forEach(v => resultTree.setNode(v));
    return resultTree.getArray();
  });
}

export function getMarkdownsFromGithubByUser(userName) {
  return getAllRepositoryByUserName(userName).then(repositoryNameList => {
    const repositories = repositoryNameList.filter(name =>
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

class Tree {
  result = {};
  setNode = item => {
    if (item.type === "blob" && !item.path.endsWith(".md")) {
      return;
    }
    const pathArr = item.path.split("/");
    const name = pathArr.pop();
    let pathNode = this.result;
    pathArr.forEach(key => {
      if (!pathNode[key]) {
        pathNode[key] = {};
      }
      if (!pathNode[key].children) {
        pathNode[key].children = {};
      }
      pathNode = pathNode[key].children;
    });
    pathNode[name] = {
      name,
      ...item
    };
  };
  getArray = () => {
    const getNode = item => {
      if (!item) return {};
      const children = item.children;
      if (children && Object.keys(children).length > 0) {
        item.children = Object.values(children).map(v => getNode(v));
      } else {
        if (item.type === "blob" && item.name.endsWith(".md")) {
          delete item.children;
        }
      }
      return item;
    };
    return Object.values(this.result).map(v => getNode(v));
  };
}
