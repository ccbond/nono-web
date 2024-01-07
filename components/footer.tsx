import CustomLink from "./custom-link"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full px-4 mx-0 my-4 text-sm md:max-w-3xl md:my-12 md:mx-auto sm:px-6 md:h-5 md:space-x-4">
      <CustomLink href="/policy">Policy</CustomLink>
    </footer>
  )
}
