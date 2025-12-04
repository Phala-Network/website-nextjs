export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-headings:font-semibold container py-24 mt-16">
      {children}
    </div>
  )
}
