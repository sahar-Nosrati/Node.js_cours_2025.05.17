const data = {
  employees: require("../model/employee.json"),
  setemployees: function (data) {
    this.employees = data;
  },
};

const getAllEmployees = (req, res) => {
  res.json(data.employees);
};

const createNewEmployee = (req, res) => {
  const newEmployee = {
    id: data.employees[data.employees.length - 1].id + 1 || 1,
    firstName: req.body.firstName,
    LastName: req.body.LastName,
  };

  if (!newEmployee.firstName || !newEmployee.LastNametName) {
    res.status(400).json({ message: "firstName and LastName are required" });
  }

  data.setemployees([...data.employees, newEmployee]);
  res.status(200).json(data.employees);
};

const updateEmployee = (req, res) => {
  const employee = data.employees.find(
    (employee) => employee.id === parseInt(req.body.id)
  );
  if (!employee) {
    return res
      .status(404)
      .json({ message: `employee ID ${req.body.id} has not been found` });
  }
  if (req.body.employee) employee.firstName = req.body.employee;
  if (req.body.LastName) employee.firstName = req.body.LastName;
  const filteredArray = data.employees.filter(
    (employee) => employee.id !== parseInt(req.body.id)
  );
  const unsortedArray = [...data.employees, employee];
  data.setemployees(
    unsortedArray.sort((a, b) => {
      a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
    })
  );
  res.json(data.employees);
};

const deleteEmployee = (req, res) => {
  res.json({
    id: req.body.id,
  });
};

const getEmployee = (req, res) => {
  res.json({
    id: req.body.id,
  });
};

module.exports = {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
