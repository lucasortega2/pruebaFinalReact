import {
  createBookModel,
  deleteBookModel,
  getAllBooksModel,
  getBookForIdModel,
  updateBookModel,
} from '../models/bookModels.js';

import {
  validatePartialSchema,
  validationSchema,
} from '../validations/booksValidations.js';

export const getAllBooksController = (req, res) => {
  const books = getAllBooksModel();
  res.json(books);
};

export const getBookForIdController = (req, res) => {
  const { id } = req.params;
  const book = getBookForIdModel({ id });
  res.json(book);
};

export const postBookController = (req, res) => {
  const book = validationSchema(req.body);

  if (!book.success) return res.json(book);

  const newBook = createBookModel({ input: book.data });
  res.json(newBook);
};

export const updateBookController = (req, res) => {
  const book = validatePartialSchema(req.body);
  if (!book.success)
    return res.status(400).json({ message: 'Error en la validación de datos' });
  const { id } = req.params;
  const updateBook = updateBookModel({ id, data: book.data });

  if (updateBook === false)
    return res.status(404).json({ message: 'book not found' });
  res.json(updateBook);
};

export const deleteBookController = (req, res) => {
  const { id } = req.params;
  const bookToDelete = deleteBookModel({ id });
  if (!bookToDelete) return res.status(404).json({ message: 'Book not found' });
  res.json({ message: 'book deleted' });
};
