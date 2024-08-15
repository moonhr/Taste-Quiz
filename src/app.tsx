import React, { useState } from "react";
import Button from "./component/button";

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0); //초기단계 0으로 설정
  const [buttonsDisabled, setButtonsDisabled] = useState(false); //기본값 false

  const steps = [
    {
      buttons: [
        { label: "팥붕", isCorrect: true },
        { label: "슈붕", isCorrect: false },
      ],
    },
    {
      buttons: [
        { label: "애플", isCorrect: true },
        { label: "갤럭시", isCorrect: false },
      ],
    },
    {
      buttons: [
        { label: "피자", isCorrect: false },
        { label: "치킨", isCorrect: true },
      ],
    },
    // 필요한 만큼 더 추가할 수 있습니다.
  ];

  const handleClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setButtonsDisabled(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setButtonsDisabled(false);
      }, 1000); // 1초 후에 다음 문제로 이동
    } else {
      alert("오답입니다. 다시 시도하세요!");
    }
  };

  return (
    <div className="p-4">
      {steps.slice(0, currentStep + 1).map((step, stepIndex) => (
        <div key={stepIndex} className="mb-4">
          {step.buttons.map((button, index) => (
            <Button
              key={index}
              onClick={() => handleClick(button.isCorrect)}
              label={button.label}
              disabled={buttonsDisabled && stepIndex === currentStep}
              className="m-2 text-white bg-blue-500 hover:bg-blue-700"
            />
          ))}
        </div>
      ))}
      {currentStep >= steps.length && (
        <h2 className="text-xl">모든 문제를 완료했습니다!</h2>
      )}
    </div>
  );
};

export default App;
