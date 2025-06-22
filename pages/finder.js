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
    item: 'Let
