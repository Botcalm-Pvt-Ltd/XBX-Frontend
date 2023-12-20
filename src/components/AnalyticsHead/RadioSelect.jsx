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
    <div className="text-white flex items-center justify-center text-sm 4xl:text-2xl">
      <div className="flex gap-10">
        <div className="inline-flex items-center justify-center">
          <div className="p-3">
            <label className="text-white relative flex justify-center items-center">
              <input
                className="styled-checkbox"
                type="checkbox"
                checked={isChecked1}
                onChange={handleToggle1}
              />
              {isChecked1 && (
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g filter="url(#filter0_bi_14_2156)">
                      <rect
                        width="24"
                        height="24"
                        rx="8"
                        fill="#1E2130"
                        fill-opacity="0.3"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="23"
                        height="23"
                        rx="7.5"
                        stroke="white"
                      />
                    </g>
                    <path
                      d="M14.5024 11L11.6882 13.8142L9.99951 12.1265"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <filter
                        id="filter0_bi_14_2156"
                        x="-19.4"
                        y="-19.4"
                        width="62.8"
                        height="62.8"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="9.7"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_14_2156"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_14_2156"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect2_innerShadow_14_2156"
                        />
                      </filter>
                    </defs>
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
          <div className="p-3">
            <label className="text-white relative flex justify-center items-center">
              <input
                className="styled-checkbox"
                type="checkbox"
                checked={isChecked2}
                onChange={handleToggle2}
              />
              {isChecked2 && (
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g filter="url(#filter0_bi_14_2156)">
                      <rect
                        width="24"
                        height="24"
                        rx="8"
                        fill="#1E2130"
                        fill-opacity="0.3"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="23"
                        height="23"
                        rx="7.5"
                        stroke="white"
                      />
                    </g>
                    <path
                      d="M14.5024 11L11.6882 13.8142L9.99951 12.1265"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <filter
                        id="filter0_bi_14_2156"
                        x="-19.4"
                        y="-19.4"
                        width="62.8"
                        height="62.8"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="9.7"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_14_2156"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_14_2156"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect2_innerShadow_14_2156"
                        />
                      </filter>
                    </defs>
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
