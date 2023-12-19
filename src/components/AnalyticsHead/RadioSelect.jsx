import React, { useState } from "react";

const RadioSelect = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleToggle1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleToggle2 = () => {
    setIsChecked2(!isChecked2);
  };

  return (
    <div className="text-white flex items-center justify-center">
      <div className="flex gap-10">
        <div className="inline-flex items-center justify-center">
          <div className="dark:bg-black/10 p-3">
            <label className="text-white relative">
              <input
                className="w-5 h-5 appearance-none rounded-sm border border-white bg-transparent"
                type="checkbox"
                checked={isChecked1}
                onChange={handleToggle1}
              />
              {isChecked1 && (
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    className="w-3 h-3 fill-current text-white dark:checked:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 10.293a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414 0l11-11a1 1 0 0 0-1.414-1.414L11 15.586 6.707 11.293a1 1 0 0 0-1.414 0z"
                    />
                  </svg>
                </span>
              )}
            </label>
          </div>

          <label className="mt-px cursor-pointer select-none">
            HIGHLIGHT RUG
          </label>
        </div>
        <div className="inline-flex items-center">
          <div className="dark:bg-black/10 p-3">
            <label className="text-white relative">
              <input
                className="w-5 h-5 appearance-none rounded-sm border border-white bg-transparent"
                type="checkbox"
                checked={isChecked2}
                onChange={handleToggle2}
              />
              {isChecked2 && (
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    className="w-3 h-3 fill-current text-white dark:checked:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 10.293a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414 0l11-11a1 1 0 0 0-1.414-1.414L11 15.586 6.707 11.293a1 1 0 0 0-1.414 0z"
                    />
                  </svg>
                </span>
              )}
            </label>
          </div>

          <label className="mt-px cursor-pointer select-none">
            LAUNCHED ONLY
          </label>
        </div>
      </div>
    </div>
  );
};

export default RadioSelect;
