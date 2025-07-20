import React from 'react';
import { ToastProvider, useToast } from './reactive-ui/Toast'

export default function App() {
  return (
    <ToastProvider>
      <DemoComponent />
    </ToastProvider>
  );
}

function DemoComponent() {
  const { toast } = useToast();

  return (
    <div>
      <button onClick={() => toast('This is an info message', 'info')}>
        Show Info
      </button>
      <button onClick={() => toast('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quia ea nam tempore deleniti est temporibus labore a culpa? Aspernatur explicabo atque veritatis ipsam consectetur quis soluta doloremque laboriosam voluptatum?', 'success', { duration: 3000 })}>
        Show Success (3s)
      </button>
      <button onClick={() => toast('Warning!', 'warning', { autoClose: false })}>
        Persistent Warning
      </button>
      <button onClick={() => toast('Error!', 'error', { position: 'bottom-center' })}>
        Bottom Center Error
      </button>
    </div>
  );
}