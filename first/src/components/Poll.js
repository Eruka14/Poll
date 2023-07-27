import React, { useState } from 'react';
import clsx from 'clsx';

const QuestionForm = () => {
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { type: 'short-text', question: '', options: [] }]);
  };

  const handleChangeFormTitle = (event) => {
    setFormTitle(event.target.value);
  };

  const handleChangeFormDescription = (event) => {
    setFormDescription(event.target.value);
  };

  const handleChangeQuestion = (index, event) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleChangeOption = (questionIndex, optionIndex, event) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleAddOption = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options.push('');
    setQuestions(updatedQuestions);
  };

  const handleRemoveOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="p-4" >
      <div className="my-4 p-4 border">
        <input
          type="text"
          className="w-full p-2 rounded-md border"
          placeholder="Маягтын нэрийг өгнө үү"
          value={formTitle}
          onChange={handleChangeFormTitle}
        />
        <textarea
          className="mt-2 w-full p-2 rounded-md border"
          placeholder="Маягтын тодорхойлолт"
          rows={3}
          value={formDescription}
          onChange={handleChangeFormDescription}
        />
      </div>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="my-4 border p-4 rounded-md">
            
          <div className="flex items-center justify-between">
          <input
          type="text"
          className="w-400px p-2 mt-2 rounded-md border"
          placeholder="Асуултаа бичнэ үү"
        />
            <select
              className="w-400px mt-2 p-2 rounded-md border"
              value={question.type}
              onChange={(e) => {
                const updatedQuestions = [...questions];
                updatedQuestions[questionIndex].type = e.target.value;
                setQuestions(updatedQuestions);
              }}
            >
              <option value="short-text">Урт хариулт</option>
              <option value="long-text">Богино хариулт</option>
              <option value="multiple-choice">Олон хариулт</option>
              <option value="check-box">Чек бокс</option>
            </select>
            <button
              className="ml-4 mt-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={() => handleRemoveQuestion(questionIndex)}
            >
              Устгах
            </button>
          </div>
          <input
            type="text"
            className={clsx(
              'w-full p-2 mt-4 rounded-md border',
              question.type !== 'short-text' && question.type !== 'long-text' && 'hidden'
            )}
            placeholder="Тайлбар..."
            value={question.question}
            onChange={(e) => handleChangeQuestion(questionIndex, e)}
          />
          {['multiple-choice', 'check-box'].includes(question.type) && (
            <div>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex items-center mt-2">
                  <input
                    type={question.type === 'multiple-choice' ? 'radio' : 'checkbox'}
                    className="mr-2"
                  />
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border"
                    placeholder={`Хариултыг бичнэ үү ${optionIndex + 1}`}
                    value={option}
                    onChange={(e) => handleChangeOption(questionIndex, optionIndex, e)}
                  />
                  {question.options.length > 1 && (
                    <button
                      className="ml-2 bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                      onClick={() => handleRemoveOption(questionIndex, optionIndex)}
                    >
                      Арилгах
                    </button>
                  )}
                </div>
              ))}
              <button
                className="mt-2 bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded"
                onClick={() => handleAddOption(questionIndex)}
              >
                Хариулт нэмэх
              </button>
            </div>
          )}
        </div>
      ))}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={handleAddQuestion}>
        Асуулт нэмэх 
      </button>
    </div>
  );
};

export default QuestionForm;
