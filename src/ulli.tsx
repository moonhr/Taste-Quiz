

interface listItem {
  listItem: string[];
  
}

const UlLi:React.FC<listItem> = ({listItem}) => {
  return (
    <ul>
      <li>{listItem[0]}</li>
      <li>{listItem[1]}</li>
      <li>{listItem[2]}</li>
    </ul>
  );
}

export default UlLi;