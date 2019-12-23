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
    mode: "040000",
    path: "testCaseTree",
    sha: "d8733f770e89d16e42c7b12d6a18994aa74047d7",
    type: "tree"
  }
];

describe("getAllRepositoryByUserName", () => {
  githubApi.getAllRepositoryByUserName.mockReturnValue(
    Promise.resolve(repositoryListData)
  );
  test("get return values name array", () => {
    expect(getAllRepositoryByUserName("doter1995")).resolves.toEqual([
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
  test("get Repository format array", () => {
    const expected = [
      {
        name: "test",
        children: [
          {
            type: "tree",
            children: [
              {
                name: "blob0.md",
                type: "blob"
              },
              {
                name: "case",
                children: [
                  {
                    name: "blob1.md",
                    type: "blob"
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
    expect(getRepository("doter1995")).resolves.toEqual(
      expect.arrayContaining(expected)
    );
  });
});
