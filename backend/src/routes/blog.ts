import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@amriith/medium-common";


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET : string;
    },
     Variables: {
        userId: string;
    }
}>()



blogRouter.use('/*', async (c,next)=>{
    const authHeader = c.req.header("authorization") || " ";
    const user = await verify(authHeader, c.env.JWT_SECRET) as { id: string };
   if (user){
    c.set ("userId", user.id);
    await next();
   } else {
    c.status(401);
    return c.json({
        message : "User Not logged in "

    });
   }
})

blogRouter.post('/',async (c) => {

     const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body);
    if (!success) {
        c.status(400);
        return c.json({ error: "invalid input" });
    }
     const authorId =  c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content : body.content,
            authorId:  authorId
        }
      })
      return c.json({
        blogId: blog.id
      })
  }) 
  
  
  blogRouter.put('/update', async (c) => {
    const body = await c.req.json();
    const {success} = updateBlogInput.safeParse(body);
    if (!success) {
        c.status(400);
        return c.json({ error: "invalid input" });
    }
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const blog = await prisma.post.update({
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

  blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blogs = await prisma.post.findMany();

    return c.json({
       blog: blogs
    })
  })
  
  blogRouter.get('/:id',async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const blog = await prisma.post.findFirst({
            where:{
                   id: id
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
  
  

  export default blogRouter;