// src/routes/employeeRoutes.ts
import { Router } from 'express';
import * as employeeController from '../controllers/employeeController';

const router = Router();

// Create a new employee
router.post('/', employeeController.create);

// Get all employees
router.get('/', employeeController.getAll);

// Get an employee by ID
router.get('/:id', employeeController.getById);

// Update an employee by ID
router.put('/:id', employeeController.update);

// Delete an employee by ID
router.delete('/:id', employeeController.deleteById);

export default router;
