export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Bookflow. All rights reserved.</p>
        <p className="text-xs sm:text-sm">
          Built for FMCG & distribution teams across Pakistan.
        </p>
      </div>
    </footer>
  )
}

