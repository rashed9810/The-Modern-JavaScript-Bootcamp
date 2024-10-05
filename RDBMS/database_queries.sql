-- Database Queries: SQL Basics, Joins, Subqueries, Indexing

-- Example: Creating Tables and a JOIN Query

-- Create Departments Table
CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50)
);

-- Create Employees Table
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(50),
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

-- Insert sample data
INSERT INTO Departments (DepartmentID, DepartmentName) VALUES (1, 'Engineering'), (2, 'HR');

INSERT INTO Employees (EmployeeID, EmployeeName, DepartmentID) VALUES
(101, 'Alice', 1),
(102, 'Bob', 1),
(103, 'Charlie', 2);

-- JOIN Query: Get Employees with their Department Names
SELECT Employees.EmployeeName, Departments.DepartmentName
FROM Employees
JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;
