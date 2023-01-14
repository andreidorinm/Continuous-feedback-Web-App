import React from 'react';

const TermsOfServiceScreen = () => {
  return (
    <div className="terms-of-service">
      <h1>Terms of Service</h1>
      <p>
        Welcome to the Feedback App! By using our app, you agree to be bound by
        the following terms and conditions. If you do not agree to these terms,
        please do not use the app.
      </p>
      <div className="section-terms">
        <h2>1. Using the app</h2>
        <p>
          You must be at least 13 years old to use the app. If you are under 13,
          you must have your parent or guardian's permission to use the app.
        </p>
        <p>
          You may not use the app for any illegal or unauthorized purposes. You
          must not, in the use of the app, violate any laws in your jurisdiction
          (including but not limited to copyright laws).
        </p>
        <h2>2. User content</h2>
        <p>
          The Feedback App allows users to post comments, feedback, and other
          content. You are solely responsible for the content that you post on
          the app. You must not post any content that is illegal, obscene,
          threatening, defamatory, or infringes on any intellectual property
          rights.
        </p>
        <p>
          By posting content on the app, you grant us a perpetual,
          non-exclusive, royalty-free, and fully sublicensable right to use,
          reproduce, modify, adapt, publish, translate, create derivative works
          from, distribute, and display your content in any media.
        </p>
        <h2>3. Intellectual property</h2>
        <p>
          The Feedback App and its original content, features, and functionality
          are owned by [Company Name] and are protected by international
          copyright and trademark laws.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServiceScreen;
