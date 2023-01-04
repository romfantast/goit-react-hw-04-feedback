import FeedbackCaption from 'components/FeedbackCaption/FeedbackCaption';
import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section>
      <FeedbackCaption title={title}>{title}</FeedbackCaption>
      {children}
    </section>
  );
};

export default Section;
