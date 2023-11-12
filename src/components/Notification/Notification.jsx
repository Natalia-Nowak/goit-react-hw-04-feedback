import React, { Component } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
