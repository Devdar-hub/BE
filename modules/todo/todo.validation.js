import * as yup from 'yup';

const todoSchema = yup.object().shape({
  title: yup.string().required('Title is required').max(100, 'Title must be at most 100 characters'),
  description: yup.string().required('Description is required').max(1000, 'Description must be at most 1000 characters'),
  dueDate: yup.date().required('Due date is required').min(new Date(), 'Due date must be in the future'),
  priority: yup.string().required('Priority is required').oneOf(['HIGH', 'MEDIUM', 'LOW'], 'Invalid priority value'),
  status: yup.string().required('Status is required').oneOf(['TODO', 'IN-PROGRESS', 'REVIEW', 'COMPLETED'], 'Invalid status value')
});

export default todoSchema;
