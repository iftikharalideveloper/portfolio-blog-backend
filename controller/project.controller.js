import Project from "../model/project.model.js";
export const createProject = async (req, res) =>{
    try {
        const newProject= await Project.create(req.body);
        res.status(201).json({success: true, message: "Project added", newProject});
    } catch (error) {
        res.status(400).json({ success: false, error: error.message});
    }
};

export const getAllProjects = async (req, res) =>{
    try {
        const projects = await Project.find();
        res.status(200).json({ success: true, projects});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getProjectById = async (req, res) =>{
    try {
        const project = await Project.findById(req.params.id);
        if (!project){
            return res.status(404).json({ success: false, message: "Project not found!"});
        };
        res.status(200).json({ success: true, project});
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

export const updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProject){
            return res.status(404).json({ success: false, message: "project not found"});
        }
        res.status(200).json({ success: true, message: "Updated Successfully", updatedProject});
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
};

export const deleteProject = async (req, res) =>{
    try{
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if (!deletedProject){
            return res.status(404). json({ success: false, message: "project not found"});
        }
        res.status(200).json({ success: true, message: "Deleted Successfully", deletedProject});
    } catch(error){
        res.status(400).json({error: error.message});
    }
};
