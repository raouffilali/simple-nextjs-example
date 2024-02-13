
import { Spinner } from 'flowbite-react';

function Loading() {
  return (
    <div className="flex flex-wrap items-center gap-2">
        <h1>Loading...🕐</h1>
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
}

export default Loading;