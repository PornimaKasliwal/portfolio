const router = require("express").Router()
const admin = require("../controller/admin.controller.js")

router
.post("/add-skills", admin.addSkills)
.get("/get-skills", admin.getSkills)
.patch("/update-skills/:sid", admin.updateSkills)
.delete("/delete-skills/:sid", admin.deleteSkills)

//  Experience
.post("/add-experience",admin.addExperience)
.get("/get-experience",admin.getExperience)
.patch("/update-experience/:eid",admin.updateExperience)
.delete("/delete-experience/:eid",admin.deleteExperience)

// Project
    .post("/add-project", admin.addProject)
    .get("/get-projects", admin.getProjects)
    .patch("/update-project/:pid", admin.updateProject)
    .delete("/delete-project/:pid", admin.deleteProject)

    //  About
    .post("/add-about", admin.addAboutInfo)
    .get("/get-about", admin.readAboutInfo)
    .patch("/update-about/:uid", admin.updateAboutInfo)
    .delete("/delete-about/:uid", admin.deleteAboutIngo)


module.exports = router