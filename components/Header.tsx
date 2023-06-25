
export const HeaderLayoutComponent = () => {
  return (
    <header className="w-full bg-transparent text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <figure>
          logo
        </figure>
        <ul className="flex gap-10">
          <li>Anime</li>
          <li>Description</li>
        </ul>
        <div>
          Logout
        </div>
      </nav>
    </header>
  )
}
