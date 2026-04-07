import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML Intern</h4>
                <h5>Clowdsol</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Worked as a machine learning engineer intern building predictive models, analyzing data, and improving efficiency and accuracy with techniques such as feature engineering, hyperparameter tuning, cross-validation, ensemble methods, and model optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
