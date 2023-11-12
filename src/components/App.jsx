import React from 'react';
import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import './App.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = option => {
    if (option === 'Good') {
      setGood(good + 1);
    } else if (option === 'Neutral') {
      setNeutral(neutral + 1);
    } else if (option === 'Bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const sum = good + neutral + bad;

    if (sum === 0) {
      return '0%';
    }
    return Math.round((good / sum) * 100) + '%';
  };

  return (
    <div className="wrapper">
      <Section title="Please leave feedback">
        <div className="buttons-wrapper">
          <FeedbackOptions option={'Good'} onLeaveFeedback={increment} />
          <FeedbackOptions option={'Neutral'} onLeaveFeedback={increment} />
          <FeedbackOptions option={'Bad'} onLeaveFeedback={increment} />
        </div>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
