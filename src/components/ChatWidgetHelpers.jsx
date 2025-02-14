import React from 'react';

export function ChatLoading() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin" />
      <span className="text-sm font-medium">Connecting...</span>
    </div>
  );
}

export function CustomChannelHeader() {
  return (
    <div style={{ padding: '10px', borderBottom: '1px solid #e0e0e0' }}>
      <h3 style={{ margin: 0 }}>Customer Support Chat</h3>
    </div>
  );
}