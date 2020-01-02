import * as githubApi from "../api/github.js";

export function getBlob(url) {
  return githubApi.getBlob(url);
}
export function getRepositoryByUserNameAndHtmlOrMD(userName) {
  return githubApi.getAllRepositoryByUserName(userName).then(repositoryList => {
    return repositoryList
      .filter(repository =>
        /.*mark-down.*|.*blog-html.*/i.test(repository.name)
      )
      .map(v => v.name);
  });
}
export function getRepository(owner, name) {
  return githubApi.getRepository(owner, name).then(res => {
    const resultTree = new Tree();
    res.tree.forEach(v => resultTree.setNode(v));
    return resultTree.getArray();
  });
}

export function getMenuListFromGithubByUser(userName) {
  return getRepositoryByUserNameAndHtmlOrMD(userName).then(repositories => {
    let queryList = repositories.map(repository =>
      githubApi.getRepository(userName, repository)
    );
    return Promise.all(queryList).then(res => {
      let markdownRepositories = [];
      let htmlRepositories = [];
      res.forEach((repos, index) => {
        if (/.*mark-down.*/i.test(repositories[index])) {
          markdownRepositories = markdownRepositories.concat(repos.tree);
        }
        if (/.*blog-html.*/i.test(repositories[index])) {
          htmlRepositories = htmlRepositories.concat(repos.tree);
        }
      });
      const mdTree = new Tree("md");
      const htmlTree = new Tree("html");
      markdownRepositories.forEach(v => mdTree.setNode(v));
      htmlRepositories.forEach(v => htmlTree.setNode(v));
      return { markdown: mdTree.getArray(), html: htmlTree.getArray() };
    });
  });
}

class Tree {
  result = {};
  type = "";
  constructor(type) {
    this.type = type;
  }
  setNode = item => {
    if (item.type === "blob" && !item.path.endsWith(this.type)) {
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
      item.children = [];
      if (children && Object.keys(children).length > 0) {
        item.children = Object.values(children)
          .map(v => getNode(v))
          .filter(v => !!v);
      }
      if (item.type === "blob" && item.name.endsWith(this.type)) {
        delete item.children;
        this.formantHtmlUrl(item);
        return item;
      }
      if (item.children.length < 1) {
        return null;
      }
      return item;
    };
    return Object.values(this.result)
      .map(v => getNode(v))
      .filter(v => !!v);
  };
  formantHtmlUrl = item => {
    if (!item.name.endsWith(".html")) return item;
    const [user, repos] = getUserAndReposFromUrl(item.url).split("/");
    if (user && repos) {
      item.url = `https://${user}.github.io/${repos}/${item.path}`;
    }
    return item;
  };
}

export function getUserAndReposFromUrl(url) {
  const matches = url.match(/repos\/.*\/.*\/git/g);
  if (matches.length > 0) {
    return matches[0].replace(/(repos\/)|(\/git)/g, "");
  }
  return "/";
}
