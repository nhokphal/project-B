import { prisma } from "@/lib/prisma"

export async function getFeaturedPosts() {
  return await prisma.post.findMany({
    where: {
      published: true,
      featured: true,
    },
    include: {
      author: true,
      category: true,
      tags: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
    take: 6,
  })
}

export async function getAllPosts(page = 1, limit = 12) {
  const skip = (page - 1) * limit

  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where: {
        published: true,
      },
      include: {
        author: true,
        category: true,
        tags: true,
      },
      orderBy: {
        publishedAt: "desc",
      },
      skip,
      take: limit,
    }),
    prisma.post.count({
      where: {
        published: true,
      },
    }),
  ])

  return {
    posts,
    total,
    pages: Math.ceil(total / limit),
    currentPage: page,
  }
}

export async function getPostBySlug(slug: string) {
  return await prisma.post.findUnique({
    where: {
      slug,
      published: true,
    },
    include: {
      author: true,
      category: true,
      tags: true,
    },
  })
}

export async function getPostsByCategory(categorySlug: string, page = 1, limit = 12) {
  const skip = (page - 1) * limit

  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where: {
        published: true,
        category: {
          slug: categorySlug,
        },
      },
      include: {
        author: true,
        category: true,
        tags: true,
      },
      orderBy: {
        publishedAt: "desc",
      },
      skip,
      take: limit,
    }),
    prisma.post.count({
      where: {
        published: true,
        category: {
          slug: categorySlug,
        },
      },
    }),
  ])

  return {
    posts,
    total,
    pages: Math.ceil(total / limit),
    currentPage: page,
  }
}

export async function getAllCategories() {
  return await prisma.category.findMany({
    include: {
      _count: {
        select: {
          posts: {
            where: {
              published: true,
            },
          },
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  })
}
