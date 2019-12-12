import * as githubApi from "../api/github.js";
//https://api.github.com/repos/doter1995/blogs-mark-down/git/trees/master?recursive=4

export function getAllRepositoryByUserName(userName) {
  return githubApi.getAllRepositoryByUserName(userName).then(res => {
    return res.map(value => value.name);
  });
}
export function getRepository(owner, name) {
  return githubApi.getRepository(owner, name).then(res => {
    const result = getTree(res.tree);
    console.log("result", result);
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
