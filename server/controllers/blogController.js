import fs from 'fs';
import imageKit from '../config/imageKit.js';
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';
import main from '../config/gemini.js';

export const addBlogs = async (req, res) => {
    try {
        const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog);
        const imageFile = req.file;
    
        // Validate input
        if (!title || !description || !category || !imageFile ) {
        return res.json({ success: false, message: 'All fields are required' });
        }
    
        // upload image to image kit
        const fileBuffer = fs.readFileSync(imageFile.path);
        const response = await imageKit.upload({
            file : fileBuffer,
            fileName : imageFile.originalname,
            folder : "/blogs"
        })

        //Optimization through imagekit URL transformation
        const optimizedImageUrl = imageKit.url({
            path : response.filePath,
            transformation : [
                {quality: 'auto'}, //auto compression
                {format : 'webp'},//convert to modern formet
                {width : '1280'} //width resizing
            ]
        });

        const image = optimizedImageUrl;

        await Blog.create({ title, subTitle, description, category, image , isPublished})

        res.json({success: true , message: 'Blog Added Successfully'})
       
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const getAllBlogs = async ( req , res)=> {
    try {
        const blogs = await Blog.find({isPublished : true}) 
        res.json({success: true , blogs})
    } catch (error) {
        res.json({ success: false, message: error.message });
    }

}

export const getBlogById = async ( req , res) => {
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId)

        if(!blog){
            return res.json({ success : false , message : "Blog Not Found"})
        }
        res.json({success: true , blog})

    } catch (error) {
        res.json({ success: false, message: error.message });
  
    }
}

export const deleteBlogById = async ( req , res) => {
    try {
        const { id } = req.body;
       await Blog.findByIdAndDelete(id);

        //Delete All The Comments Associated With The Blog
        await Comment.deleteMany({blog : id});

        res.json({success: true , message : "Blog Deleted Successfully"})

    } catch (error) {
        res.json({ success: false, message: error.message });
  
    }
}

export const togglePublish = async(req , res) => {
    try {
       const { id } = req.body;
       const blog = await Blog.findById(id);
       blog.isPublished =  !blog.isPublished;
       await blog.save();
       res.json({success: true , message : "Blog Status Updated"})


    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}


export const addComment = async (req , res) => {
    try {
        const {blog , name , content } = req.body;
        await Comment.create({blog , name , content});
        res.json({ success: true, message: 'Comment Added For Review' });        

    } catch (error) {
        res.json({ success: false, message: error.message });        
    }
}

export const getBlogComments = async (req , res) => {
    try {
        const {blogId} = req.body;
        const comments = await Comment.find({blog: blogId, isApproved : true }).sort({createdAt : -1});
        res.json({success: true , comments})

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const generateContent  = async (req , res) => {
    try {
        const {prompt} = req.body ;
        const content = await main(prompt + 'Generate A Blog Content For This Topic In Simple Text Format.')
        res.json({success : true , content})
    } catch (error) {
        res.json({success : false , message : error.message})
    }
}