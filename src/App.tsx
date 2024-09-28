import MasonryGrid from './components/MasonryGrid'
import StudentList from './components/StudentList'
import './index.css'

function App() {
  return (
    <div className="max-h-full min-h-screen">
      <header className="py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">The CDA Show 🎤</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <MasonryGrid />
      </main>
      <section className='container mx-auto px-4 py-8'>
        <StudentList />
      </section>
      <footer className="shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Thank you 🎤</h1>
          <span className="text-sm">Made with 🖤 by <a href="https://cassette.work">Théo S.</a></span>
          
        </div>
      </footer>
    </div>
  )
}

export default App