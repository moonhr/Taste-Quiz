interface 추가타입 {
  재료: string;
  양: string;
}

interface 밥객체 {
  밥솥: string;
  쌀: string;
  물: string;
  추가: 추가타입[];
}

function 밥만들기(밥솥: string, 쌀: string, 물: string, 추가: 추가타입[]): 밥객체 {
  // 매개변수로 밥 만드는 과정을 로직으로

  const 밥객체: 밥객체 = {
    밥솥,
    쌀,
    물,
    추가
  };

  return 밥객체;
}

// 예시 사용
const result = 밥만들기("전기밥솥", "쌀 2컵", "물 2컵", [{ 재료: "콩", 양: "1컵" }]);
console.log(result);