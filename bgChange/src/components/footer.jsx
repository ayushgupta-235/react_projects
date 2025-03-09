import React from 'react'
import Button from './button'
function Footer({setColor}) {

  return (
    <footer className="fixed bottom-0 w-full bg-gray-900 p-4 flex justify-center gap-4">
      <Button colorName="Red" setColor = {setColor} />
      <Button colorName="Blue" setColor = {setColor}/>
      <Button colorName="Green" setColor = {setColor}/>
      <Button colorName="Yellow" setColor = {setColor}/>
    </footer>
  )
}

export default Footer
