import Card from "./Card";
export default function ChatList({ chatlist = [], isLoading, newQuestion }) {
  return (
    <ul className="my-8 px-4 overflow-scroll flex-shrink flex-grow basis-0">
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
