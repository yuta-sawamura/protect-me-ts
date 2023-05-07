import { Request, Response } from "express";
import { blogIndex, blogSearch } from "../../controllers/blogController";
import { Blog } from "../../models/blog";

jest.mock("../../models/blog");

describe("blogController", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const mockBlogs = [
    {
      id: 1,
      title: "Sample Blog",
      content: "This is a sample blog.",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      user: {
        id: 1,
        name: "John Doe",
        img: "https://example.com/johndoe.jpg",
      },
    },
  ];

  describe("blogIndex", () => {
    it("should render blogs/index with blogs data", async () => {
      (Blog.findAll as jest.Mock).mockResolvedValue(mockBlogs);

      const req = {} as Request;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        render: jest.fn(),
      } as unknown as Response;

      await blogIndex(req, res);

      expect(Blog.findAll).toHaveBeenCalledTimes(1);
      expect(res.render).toHaveBeenCalledWith("blogs/index", {
        blogs: mockBlogs,
        searchQuery: "",
      });
    });
  });

  describe("blogSearch", () => {
    it("should render blogs/index with search results", async () => {
      (Blog.findAll as jest.Mock).mockResolvedValue(mockBlogs);

      const query = "sample";
      const req = {
        query: {
          q: query,
        },
      } as unknown as Request;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        render: jest.fn(),
      } as unknown as Response;

      await blogSearch(req, res);

      expect(Blog.findAll).toHaveBeenCalledTimes(1);
      expect(Blog.findAll).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.any(Object),
          include: expect.any(Array),
        })
      );
      expect(res.render).toHaveBeenCalledWith("blogs/index", {
        blogs: mockBlogs,
        searchQuery: query,
      });
    });
  });
});
