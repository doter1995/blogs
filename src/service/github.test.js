jest.mock("../api/github.js");
import * as githubApi from "../api/github.js";

import { getRepository, getRepositoryByUserNameAndHtmlOrMD } from "./github";

const repositoryListData = [
  {
    name: "test1"
  },
  {
    name: "test2-markdown"
  },
  {
    name: "mark-down-test3"
  },
  {
    name: "aa-blog-html"
  },
  {
    name: "aa-mark-down-blog-html"
  }
];
const repositoryData = [
  {
    path: "test",
    type: "tree",
    url: "https://a.com"
  },
  {
    path: "test/blob0.md",
    mode: "100644",
    type: "blob"
  },
  {
    path: "test/case/blob1.md",
    mode: "100644",
    type: "blob"
  },
  {
    path: "test/case/blob1.html",
    mode: "100644",
    type: "blob"
  },
  {
    path: "test/case",
    mode: "100644",
    type: "tree"
  },
  {
    mode: "040000",
    path: "test/case/Tree",
    sha: "d8733f770e89d16e42c7b12d6a18994aa74047d7",
    type: "tree"
  },
  {
    mode: "040000",
    path: "test/case/tree",
    sha: "d8733f770e89d16e42c7b12d6a18994aa74047d7",
    type: "blob"
  }
];

describe("getRepositoryByUserNameAndHtmlOrMD", () => {
  githubApi.getAllRepositoryByUserName.mockReturnValue(
    Promise.resolve(repositoryListData)
  );
  test("get return values name array", async () => {
    const result = await getRepositoryByUserNameAndHtmlOrMD("doter1995");
    expect(result).toEqual([
      "mark-down-test3",
      "aa-blog-html",
      "aa-mark-down-blog-html"
    ]);
  });
});

describe("getRepository", () => {
  githubApi.getRepository.mockReturnValue(
    Promise.resolve({ tree: repositoryData })
  );
  test("get Repository format array", async () => {
    const expected = [
      {
        name: "test",
        path: "test",
        type: "tree",
        url: "https://a.com",
        children: [
          {
            mode: "100644",
            name: "blob0.md",
            path: "test/blob0.md",
            type: "blob"
          },
          {
            mode: "100644",
            name: "case",
            path: "test/case",
            type: "tree",
            children: [
              {
                mode: "040000",
                name: "Tree",
                path: "test/case/Tree",
                sha: "d8733f770e89d16e42c7b12d6a18994aa74047d7",
                type: "tree"
              }
            ]
          }
        ]
      }
    ];
    const result = await getRepository("doter1995");
    expect(result).toEqual(expect.arrayContaining(expected));
  });
});
