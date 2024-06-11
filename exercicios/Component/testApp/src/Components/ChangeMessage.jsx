import React from 'react'

export const ChangeMessage = (handleMessage) => {
    const messages =["oi", "tudo", "bem", "sim"]
  return (
    <div>
        <button onclick={() => handleMessage(messages[0])}>1</button>
        <button onclick={() => handleMessage(messages[1])}>2</button>
        <button onclick={() => handleMessage(messages[2])}>3</button>
        <button onclick={() => handleMessage(messages[3])}>4</button>

    </div>
  )
}
