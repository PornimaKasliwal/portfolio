const asyncHandler = require("express-async-handler")
const Skill = require("../models/Skill")
const Experiencies = require("../models/Experiencies")
const About = require("../models/About")


// Skills

exports.addSkills = asyncHandler(async (req, res) => {
    const { skillName, category, level } = req.body
    const lastSkill = await Skill.findOne({ category }).sort({ order: -1 })
    const order = lastSkill ? lastSkill.order + 1 : 0
    await Skill.create({ skillName, category, level, order })
    res.status(200).json({ message: "Skills Added Successfully" })
})

exports.getSkills = asyncHandler(async (req, res) => {
    const frontend = await Skill.find({ category: "frontend" }).sort({ order: 1 })
    const backend = await Skill.find({ category: "backend" }).sort({ order: 1 })
    res.json({ message: "Skills Fetched Successfully", frontend, backend })
})

exports.updateSkills = asyncHandler(async (req, res) => {
    const { sid } = req.params
    const { level } = req.body
    await Skill.findByIdAndUpdate(sid, req.body, { new: true })
    res.json({ message: "Skills Updated Successfully" })
})

exports.deleteSkills = asyncHandler(async (req, res) => {
    const { sid } = req.params
    await Skill.findByIdAndDelete(sid)
    res.json({ message: "Skills Deleted Successfully" })
})


//  Experience
exports.addExperience = asyncHandler(async(req,res)=>{
       const {role,company,period ,description ,responsibilities} = req.body
       const lastExperience = await Experiencies.findOne().sort({ order: -1 })
        const order = lastExperience ? lastExperience.order + 1 : 0
 await Experiencies.create({role,company,period ,description ,responsibilities, order})
    res.status(201).json({message:"Experience Add Success"})
})

exports.getExperience = asyncHandler(async(req,res)=>{
   const experiences = await Experiencies.find().sort({order:-1})
    res.json({message:"Experience Fetch Success",experiences})
})

exports.updateExperience = asyncHandler(async(req,res)=>{
    const {eid} = req.params
    const {role,company,period, responsibilities} = req.body 
    await Experiencies.findByIdAndUpdate(eid,req.body)
    res.json({message:"Experience Update Success"})
})

exports.deleteExperience = asyncHandler(async(req,res)=>{
    const { eid } = req.params
    await Experiencies.findByIdAndDelete(eid)
    res.json({message:"Experience Delete Success"})
})

// Project 
exports.addProject = asyncHandler(async (req, res) => {
    const { title, description, category, technologies, imageURL, liveURL, gitHubURL } = req.body
    await Projects.create({ title, description, category, imageURL, technologies, liveURL, gitHubURL })
    res.status(201).json({ message: "Project Added Successfully" })
})

exports.getProjects = asyncHandler(async (req, res) => {
    const result = await Projects.find().sort({ createdAt: -1 })
    res.json({ message: "Project Fetch Successfully", result })
})

exports.updateProject = asyncHandler(async (req, res) => {
    const { pid } = req.params
    const { title, description, technologies, imageURL, liveURL, gitHubURL } = req.body
    await Projects.findByIdAndUpdate(pid, req.body)
    res.json({ message: "Project Updated Successfully" })
})

exports.deleteProject = asyncHandler(async (req, res) => {
    const { pid } = req.params
    await Projects.findByIdAndDelete(pid)
    res.json({ message: "Project Deleted Successfully" })
})

//  About
exports.addAboutInfo = asyncHandler(async(req,res)=>{
const { name, title, introduction, journey, currentWork,
     dob, location,email,phone,language,profileImage} = req.body;
    await About.create({name,title,introduction, journey, currentWork, dob,location, email, phone, language})
 res.status(201).json({ message: "About Add Successfully" })

})

exports.readAboutInfo = asyncHandler(async(req,res)=>{
    const result= await About.findOne()
      res.status(201).json({ message: "About Fetch Successfully", result })
})

exports.updateAboutInfo = asyncHandler(async(req,res)=>{
    const {uid} = req.params
    const {  title, introduction, currentWork,
      location,email,phone,languages,profileImage} = req.body
     await About.findByIdAndUpdate(uid,req.body)
     res.json({ message: "About Update Successfully" })
})
  
exports.deleteAboutIngo = asyncHandler(async(req, res)=>{
    const {uid} = req.params
    await About.findByIdAndDelete(uid);
   res.json({ message: "About Delete Successfully" })
})