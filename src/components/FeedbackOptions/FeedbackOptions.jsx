import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

export default function FeedbackOptions({ onLeaveFeedback, option }) {
  return (
    <button className="feedback-button" onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>
  );
}
