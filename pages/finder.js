import React, { useState } from 'react';

const questions = [
  {
    id: 'service',
    question: 'What kind of service are you providing?',
    options: ['Support work', 'Occupational therapy (OT)', 'Physiotherapy', 'Counselling', 'Other']
  },
  {
    id: 'goal',
    question: 'What is the goal of the service?',
    options: ['Daily living skills', 'Social participation', 'Communication', 'Emotional regulation', 'Physical mobility', 'Other']
  },
  {
    id: 'location',
    question: 'Where is the service delivered?',
    options: ['In the participant’s home', 'In the community', 'Via telehealth', 'At a clinic']
  }
];

const lineItemLogic = (answers) => {
  const { service, goal, location } = answers;

  if (service === 'Support work' && goal === 'Daily living skills') {
    return {
      item: '01_011_0107_1_1 – Assistance with Self-Care Activities',
      explanation: 'This line item covers support for personal care in the home or community.'
    };
  }

  if (service === 'Occupational therapy (OT)' && goal === 'Daily living skills') {
    return {
      item: '15_056_0128_1_3 – OT Assessment, Recommendation, Therapy',
      explanation: 'Use this for OT focused on skill development and assessments.'
    };
  }

  return {
    item: "Let's look into this together!",
    explanation: 'We couldn’t find a perfect match yet. Try changing an answer or contact a support coordinator.'
  };
};

export default function Finder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (value) => {
    const key = questions[step].id;
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    if (step === questions.length - 1) {
      setResult(lineItemLogic(newAnswers));
    } else {
      setStep(step + 1);
    }
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  if (result) {
    return (
      <div className="p-6 max-w-xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-bold">Suggested Line Item</h2>
        <p className="text-lg font-semibold">{result.item}</p>
        <p className="text-gray-700">{result.explanation}</p>
        <button
          onClick={restart}
          className="mt-6 px-4 py-2 bg-black text-white rounded"
        >
          Start Again
        </button>
      </div>
    );
  }

  const current = questions[step];

  return (
    <div className="p-6 max-w-xl mx-auto text-center space-y-4">
      <h2 className="text-xl font-semibold">{current.question}</h2>
      <div className="flex flex-col gap-3">
        {current.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="px-4 py-2 border border-gray-800 rounded hover:bg-gray-100"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
