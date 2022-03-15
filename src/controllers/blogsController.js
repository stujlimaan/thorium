const blogModel = require("../models/blogModel")
const authorModel = require("../models/authorModel")
const { send } = require("express/lib/response")

//CREATEBLOG-
const createBlog = async function (req, res) {
    try {
        let authorId = req.body.authorId
        let data = req.body

        if (!authorId) return res.send('The request is not valid as the author details are required.')

        let author = await authorModel.findById(authorId)
        if (!author) return res.send('The request is not valid as no author is present with  given author id')

        let createdBlog = await blogModel.create(data)
        res.send({ data: createdBlog })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//GETBLOG-

const getblogs = async function (req, res) {

    try {
        if (req.query.category || req.query.authorId || req.query.tags || req.query.subcategory) {
            let obj = {};
            if (req.query.category) {
                obj.category = req.query.category
            }
            if (req.query.authorId) {
                obj.authorId = req.query.authorId;
            }
            if (req.query.tags) {
                obj.tags = req.query.tags
            }
            if (req.query.subcategory) {
                obj.subcategory = req.query.subcategory
            }
            obj.isDeleted = false
            obj.isPublished = true
            let data = await blogModel.find(obj)
            if (data == false) {
                return res.status(404).send({ status: false, msg: "The filter value is Invalid" });
            } else {
                res.status(200).send({ status: true, message: "Successfully fetched all blogs", data: data })
            }
        } else {
            return res.status(404).send({ status: false, msg: "Mandatory filter not given" })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//UPDATEBLOG-

const updateBlog = async function (req, res) {

    try {
        let blogId = req.query.blogId;
        let blog = await blogModel.findById(blogId);

        if (!blog) {
            return res.status(404).send({ status: false, msg: "No such blog exists" });
        }
        let updatedBlog = await blogModel.updateMany({ _id: blogId }, {
            title: req.body.title, body: req.body.body, tags: req.body.tags, isPublished: true,
            publishedAt: Date.now(), subCategory: req.body.subCategory
        }, { new: true })

        res.status(200).send({ status: true, data: updatedBlog });
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//DELETEBLOG-

const deleteUser = async function (req, res) {

    try {
        let blogId = req.query.blogId;
        let blog = await blogModel.findById(blogId);

        if (!blog) {
            res.status(401).send("No such blog exists");
        }
        let deletedBlog = await blogModel.findOneAndUpdate({ _id: blogId }, { $set: { isDeleted: true } });
        return res.status(201).send({ status: true, data: deletedBlog });
    }

    catch (err) { res.status(500).send({ msg: "Error", error: err.message }) }
};

module.exports.updateBlog = updateBlog
module.exports.deleteUser = deleteUser
module.exports.createBlog = createBlog
module.exports.getblogs = getblogs