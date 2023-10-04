// src/controllers/employeeController.ts
import { Request, Response } from 'express';
import Employee from '../models/Employee';

// Create a new employee
export const create = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all employees
export const getAll = async (_req: Request, res: Response) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get an employee by ID
export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findByPk(id);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an employee by ID
export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [updated] = await Employee.update(req.body, {
      where: { id },
    });
    if (!updated) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    const employee = await Employee.findByPk(id);
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete an employee by ID
export const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleted = await Employee.destroy({
      where: { id },
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
