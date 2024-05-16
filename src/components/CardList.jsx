import Card from "./Card";
export default function ChatList({ chatlist = [], isLoading, newQuestion }) {
  return (
    <ul>
      {chatlist.map((chat, idx) => (
        <Card key={idx} role={chat.role} content={chat.content} />
      ))}
      {isLoading && (
        <>
          <Card role="user" content={newQuestion} />
          <Card role="assistant" isLoading={isLoading} />
        </>
      )}
    </ul>
  );
}
