import React, { Component } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
