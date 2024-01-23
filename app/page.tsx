import StoreProvider from "./StoreProvider";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

export default function BookShelf() {
  return (
    <StoreProvider>
      <div className="relative min-h-screen">
        <AddBook />
        <BookList />
      </div>
    </StoreProvider>
  );
}
