import React from "react";

//버튼의 제어가능영역(클릭시 반응, 버튼글자, 활성화상태, 스타일)
interface Button {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  className?: string;
}

/**
 * 24.07.16
 * * 클릭가능한 버튼을 렌더링
 * @param onClick 버튼 클릭 시 호출될 콜백 함수
 * @param label 버튼에 표시될 텍스트
 * @param disabled 버튼 비활성화 여부 (기본값: false)
 * @param className tailwind스타일
 * @returns 버튼생성
 */
const Button: React.FC<Button> = ({
  onClick,
  label,
  disabled = false,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
