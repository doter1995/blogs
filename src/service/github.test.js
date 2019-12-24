jest.mock("../api/github.js");
import * as githubApi from "../api/github.js";

import { getRepository, getAllRepositoryByUserName } from "./github";

const repositoryListData = [
  {
    name: "test1"
  },
  {
    name: "test2-markdown"
  },
  {
    name: "markdown-test3"
  },
  {
    name: "aa-markdown-test4"
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

describe("getAllRepositoryByUserName", () => {
  githubApi.getAllRepositoryByUserName.mockReturnValue(
    Promise.resolve(repositoryListData)
  );
  test("get return values name array", async () => {
    const result = await getAllRepositoryByUserName("doter1995");
    expect(result).toEqual([
      "test1",
      "test2-markdown",
      "markdown-test3",
      "aa-markdown-test4"
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
        type: "tree",
        url: "https://a.com",
        children: [
          {
            name: "blob0.md",
            type: "blob",
            mode: "100644"
          },
          {
            type: "tree",
            mode: "100644",
            name: "case",
            children: [
              {
                name: "blob1.md",
                mode: "100644",
                type: "blob"
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
