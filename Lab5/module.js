const module = {
    _id: "1",
    name: "Introduction to Rocket Propulsion",
    description: "Basic principles of rocket propulsion and rocket engines.",
    course: "RS101",
    lessons: [
        {
        _id: "L101",
        name: "History of Rocketry",
        description: "A brief history of rocketry and space exploration.",
        module: "M101"
        },
        {
        _id: "L102",
        name: "Rocket Propulsion Fundamentals",
        description: "Basic principles of rocket propulsion.",
        module: "M101"
        },
        {
        _id: "L103",
        name: "Rocket Engine Types",
        description: "Overview of different types of rocket engines.",
        module: "M101"
        }
    ]
}
export default function Module(app) {
  const getModule = (req, res) => {
    res.json(module);
  };
  const getModuleName = (req, res) => {
    res.json(module.name);
  };
   const setModuleName = (req, res) => {
   const { newName } = req.params;
   module.name = newName;
   res.json(module);
  };
  const setModuleDescription = (req, res) => {
   const { newDescription } = req.params;
   module.description = newDescription;
   res.json(module);
  };
  app.get("/lab5/module/description/:newDescription", setModuleDescription);
  app.get("/lab5/module/name/:newName", setModuleName);
  app.get("/lab5/module/name", getModuleName);
  app.get("/lab5/module", getModule);
}