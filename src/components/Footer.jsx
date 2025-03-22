import React from 'react'

const Footer = () => {
  return (
<footer className="text-white text-center py-6 h-[70vh] bg-[#341c02]">
  
  <div className="h-full flex flex-col justify-center items-center">
    <p className="custom-space text-lg mb-4">Made with ❤️ and ☕ by Gina</p>

    <div className="flex justify-center space-x-4 mb-4">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <img src="github-icon.svg" alt="GitHub" className="w-6 h-6" />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <img src="linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" />
      </a>
      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
        <img src="instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
      </a>
    </div>

    <p className="text-sm mb-2">"Life happens, coffee helps. ☕✨"</p>
    <p className="text-sm mb-2">Icons by <a href="https://fontawesome.com" className="underline">FontAwesome</a></p>
    <p className="text-sm mb-2">Images from <a href="https://unsplash.com" className="underline">Unsplash</a></p>

    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm underline">
      Back to Top ↑
    </button>

  </div>

</footer>
  )
}

export default Footer
