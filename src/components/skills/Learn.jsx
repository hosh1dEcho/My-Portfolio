import React from "react";

const Learn = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Learning</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Learning</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Learning</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Hosting</h3>
              <span className="skills__level">Learning</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">TypeScript</h3>
              <span className="skills__level">Learning</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Learning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
