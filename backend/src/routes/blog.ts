import { PrismaClient } from "@prisma/client/extension";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET : string;
    }
}>()

blogRouter.use('/*', (c,next)=>{

})

blogRouter.post('/',async (c) => {

     const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content : body.content,
            authorId: 
        }
      })
      return c.json({
        blogId: blog.id
      })
  }) 
  
  
  blogRouter.put('/update', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const blog = await prisma.blog.update({
            where:{
                   id: body.id
            },
            data: {
                title: body.title,
                content : body.content
            }
        })
        return c.json({
           id: blog.id
        })
    } catch(e){
       c.status(411)
       return c.json({
        message: "Error while fetching Blog"
       })
    }
  })
  
  blogRouter.get('/',async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const blog = await prisma.blog.findFirst({
            where:{
                   id: body.id
            }
        })
        return c.json({
            blog
        })
    } catch(e){
       c.status(411)
       return c.json({
        message: "Error while fetching Blog"
       })
    }
  })
  
  blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blogs = await prisma.blog.findMany();

    return c.json({
       blog: blogs.title
    })
  })